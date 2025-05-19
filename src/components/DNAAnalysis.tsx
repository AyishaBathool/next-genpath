"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader2, FileText, CheckCircle2, AlertTriangle, Info } from "lucide-react";

interface DiseaseInfo {
  name: string;
  detected: boolean;
  probability: number;
  description: string;
  symptoms: string[];
  precautions: string[];
  geneticMarker: string;
  detectionMethod: string;
}

export default function DNAAnalysis() {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<DiseaseInfo | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const analyzeDNA = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    setProgress(0);
    setResult(null);

    // Simulate analysis progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);

    // Simulate analysis results after 10 seconds
    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setIsAnalyzing(false);
      
      // Sample analysis result - in a real app, this would be determined by actual DNA analysis
      const randomResult = Math.random();
      if (randomResult < 0.3) {
        // 30% chance of detecting a disease
        setResult({
          name: "Huntington's Disease",
          detected: true,
          probability: 0.92,
          description: "Huntington's disease is a rare, inherited disease that causes the progressive breakdown of nerve cells in the brain. It has a broad impact on a person's functional abilities and usually results in movement, thinking, and psychiatric disorders.",
          symptoms: [
            "Involuntary jerking or writhing movements (chorea)",
            "Muscle problems, such as rigidity or muscle contracture",
            "Slow or abnormal eye movements",
            "Impaired gait, posture and balance",
            "Difficulty with speech or swallowing",
            "Cognitive decline and memory problems",
            "Depression and mood changes"
          ],
          precautions: [
            "Regular neurological monitoring",
            "Physical therapy to maintain mobility",
            "Speech therapy for communication difficulties",
            "Psychological support and counseling",
            "Genetic counseling for family members",
            "Regular exercise and balanced diet",
            "Avoid alcohol and smoking"
          ],
          geneticMarker: "HTT gene mutation (CAG repeat expansion)",
          detectionMethod: "Identified through analysis of the HTT gene, specifically detecting an expanded CAG trinucleotide repeat sequence. The normal range is 10-35 repeats, while 40 or more repeats indicate the presence of Huntington's disease."
        });
      } else {
        // 70% chance of no disease detected
        setResult({
          name: "No Genetic Disease Detected",
          detected: false,
          probability: 0.95,
          description: "Your DNA analysis did not reveal any significant genetic markers associated with known hereditary diseases. This is a positive result, indicating a low risk for genetic disorders.",
          symptoms: [],
          precautions: [
            "Continue regular health check-ups",
            "Maintain a healthy lifestyle",
            "Stay informed about family medical history",
            "Consider periodic genetic screening"
          ],
          geneticMarker: "None detected",
          detectionMethod: "Comprehensive analysis of known disease-associated genetic markers showed no significant variations or mutations."
        });
      }
    }, 10000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dna-file"
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <FileText className="w-8 h-8 mb-3 text-gray-400" />
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">DNA file (TXT, FASTA)</p>
          </div>
          <input
            id="dna-file"
            type="file"
            className="hidden"
            accept=".txt,.fasta"
            onChange={handleFileChange}
          />
        </label>
      </div>

      {file && (
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-700">{file.name}</span>
          </div>
          <Button
            onClick={analyzeDNA}
            disabled={isAnalyzing}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze DNA"
            )}
          </Button>
        </div>
      )}

      {isAnalyzing && (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Analysis Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </CardContent>
        </Card>
      )}

      {result && (
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  {result.detected ? (
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  )}
                  <h3 className="text-lg font-semibold">{result.name}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{result.description}</p>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div
                      className={`h-2 rounded-full ${
                        result.detected ? "bg-red-500" : "bg-green-500"
                      }`}
                      style={{ width: `${result.probability * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500">
                    {Math.round(result.probability * 100)}% Confidence
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {result.detected && (
            <>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Info className="w-5 h-5 text-blue-500" />
                      <h3 className="text-lg font-semibold">Detection Details</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        <span className="font-semibold">Genetic Marker:</span> {result.geneticMarker}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Detection Method:</span> {result.detectionMethod}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      <h3 className="text-lg font-semibold">Common Symptoms</h3>
                    </div>
                    <ul className="space-y-2">
                      {result.symptoms.map((symptom, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-yellow-500">•</span>
                          <span className="text-gray-700">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <h3 className="text-lg font-semibold">Recommended Precautions</h3>
                    </div>
                    <ul className="space-y-2">
                      {result.precautions.map((precaution, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-500">•</span>
                          <span className="text-gray-700">{precaution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {!result.detected && (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Info className="w-5 h-5 text-blue-500" />
                    <h3 className="text-lg font-semibold">General Health Recommendations</h3>
                  </div>
                  <ul className="space-y-2">
                    {result.precautions.map((precaution, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-blue-500">•</span>
                        <span className="text-gray-700">{precaution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
} 