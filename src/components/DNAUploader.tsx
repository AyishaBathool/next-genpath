'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileDownIcon, Loader2 } from 'lucide-react';

export default function DNAUploader() {
  const [dnaData, setDnaData] = useState('');
  const [fileName, setFileName] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);

      const reader = new FileReader();
      reader.onload = function (event) {
        const content = event.target?.result as string;
        setDnaData(content);
        setAnalysisResult('');
      };
      reader.readAsText(file);
    }
  };

  const runAnalysis = async () => {
    setIsAnalyzing(true);
    setAnalysisResult('');

    // Simulate 10-second analysis delay
    await new Promise((resolve) => setTimeout(resolve, 10000));

    // Randomly choose result
    const results = [
      '✅ No disease detected',
      '⚠️ Chances of Tay-Sachs disease detected',
      '⚠️ Chances of Sickle Cell Anemia detected',
    ];
    const randomResult = results[Math.floor(Math.random() * results.length)];

    setAnalysisResult(randomResult);
    setIsAnalyzing(false);
  };

  return (
    <Card className="bg-gradient-to-r from-teal-100 to-cyan-100 shadow-xl rounded-2xl p-4 transition-all duration-500 hover:shadow-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-teal-700 flex items-center gap-2">
          <FileDownIcon className="text-teal-600" size={22} />
          Analyze DNA File
        </CardTitle>
      </CardHeader>
      <CardContent>
        <input
          type="file"
          accept=".txt,.csv"
          onChange={handleFileUpload}
          className="mb-4 block w-full text-sm text-gray-700
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-teal-600 file:text-white
            hover:file:bg-teal-700 cursor-pointer"
        />
        {fileName && (
          <div className="mb-2 text-sm text-gray-600 font-medium">
            📄 {fileName}
          </div>
        )}
        {dnaData ? (
          <>
            <pre className="max-h-64 overflow-y-auto bg-white text-sm text-gray-700 p-4 rounded-md border border-gray-200 mb-4">
              {dnaData}
            </pre>
            <Button
              onClick={runAnalysis}
              disabled={isAnalyzing}
              className="bg-teal-700 hover:bg-teal-800 text-white"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={16} />
                  Analyzing...
                </>
              ) : (
                'Run Analysis'
              )}
            </Button>
            {analysisResult && (
              <p className="mt-4 text-md font-semibold text-gray-700">
                🧬 {analysisResult}
              </p>
            )}
          </>
        ) : (
          <p className="text-gray-500 text-sm">
            Upload a `.txt` or `.csv` file containing DNA sequences to analyze.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
