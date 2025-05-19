"use client"

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const questionGroups = [
  {
    title: "Family History",
    description: "Understanding your family's medical history is crucial for identifying potential genetic risks.",
    questions: [
      {
        id: "q1",
        text: "Do you have any close relatives with a known genetic disorder?",
        riskFactor: "General Genetic Disorders"
      },
      {
        id: "q2",
        text: "Has anyone in your family had cancer before age 50?",
        riskFactor: "Early-Onset Cancer"
      },
      {
        id: "q3",
        text: "Is there a history of heart disease or stroke before age 55?",
        riskFactor: "Cardiovascular Disorders"
      }
    ]
  },
  {
    title: "Personal Medical History",
    description: "Your personal health history provides important insights into potential genetic risks.",
    questions: [
      {
        id: "q4",
        text: "Have you been diagnosed with any chronic conditions before age 30?",
        riskFactor: "Early-Onset Conditions"
      },
      {
        id: "q5",
        text: "Do you have any autoimmune conditions?",
        riskFactor: "Autoimmune Disorders"
      },
      {
        id: "q6",
        text: "Have you experienced unexplained symptoms or conditions?",
        riskFactor: "Undiagnosed Conditions"
      }
    ]
  },
  {
    title: "Lifestyle Factors",
    description: "Your lifestyle choices can influence genetic expression and health outcomes.",
    questions: [
      {
        id: "q7",
        text: "Do you maintain a regular exercise routine?",
        riskFactor: "Physical Activity"
      },
      {
        id: "q8",
        text: "Do you follow a balanced, nutritious diet?",
        riskFactor: "Nutrition"
      },
      {
        id: "q9",
        text: "Do you get adequate sleep (7-9 hours) regularly?",
        riskFactor: "Sleep Patterns"
      }
    ]
  },
  {
    title: "Environmental Exposures",
    description: "Environmental factors can interact with genetic predispositions.",
    questions: [
      {
        id: "q10",
        text: "Have you been exposed to significant environmental toxins?",
        riskFactor: "Environmental Toxins"
      },
      {
        id: "q11",
        text: "Do you work in an environment with potential health hazards?",
        riskFactor: "Occupational Hazards"
      },
      {
        id: "q12",
        text: "Have you lived in areas with high pollution levels?",
        riskFactor: "Environmental Pollution"
      }
    ]
  },
  {
    title: "Reproductive History",
    description: "Reproductive history can provide insights into genetic health.",
    questions: [
      {
        id: "q13",
        text: "Have you or your partner experienced fertility issues?",
        riskFactor: "Reproductive Health"
      },
      {
        id: "q14",
        text: "Have you had any pregnancy complications?",
        riskFactor: "Pregnancy Health"
      },
      {
        id: "q15",
        text: "Is there a history of birth defects in your family?",
        riskFactor: "Birth Defects"
      }
    ]
  },
  {
    title: "Previous Genetic Testing",
    description: "Information about previous genetic testing can help assess current risks.",
    questions: [
      {
        id: "q16",
        text: "Have you had any previous genetic testing?",
        riskFactor: "Genetic Testing History"
      },
      {
        id: "q17",
        text: "Were any genetic variants identified in previous testing?",
        riskFactor: "Known Variants"
      },
      {
        id: "q18",
        text: "Have you participated in any genetic research studies?",
        riskFactor: "Research Participation"
      }
    ]
  }
];

export default function GeneticRiskAssessment() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [riskResults, setRiskResults] = useState<{ riskFactor: string; score: number }[]>([]);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateRisk = () => {
    const riskScores: Record<string, number> = {};
    
    questionGroups.forEach(group => {
      group.questions.forEach(q => {
        if (answers[q.id] === 'yes') {
          riskScores[q.riskFactor] = (riskScores[q.riskFactor] || 0) + 1;
        }
      });
    });

    const results = Object.entries(riskScores)
      .map(([riskFactor, score]) => ({ riskFactor, score }))
      .sort((a, b) => b.score - a.score);

    setRiskResults(results);
    setShowResults(true);
  };

  const handleNext = () => {
    if (currentPage < questionGroups.length - 1) {
      setCurrentPage(prev => prev + 1);
    } else {
      calculateRisk();
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const progress = ((currentPage + 1) / questionGroups.length) * 100;

  if (showResults) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Your Genetic Risk Assessment Results</h2>
          
          <div className="space-y-6">
            {riskResults.map((result, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-800">{result.riskFactor}</h3>
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Risk Level</span>
                    <span className="text-sm font-medium text-blue-600">
                      {result.score >= 3 ? "High" : result.score >= 2 ? "Moderate" : "Low"}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        result.score >= 3 ? "bg-red-500" : result.score >= 2 ? "bg-yellow-500" : "bg-green-500"
                      }`}
                      style={{ width: `${(result.score / 3) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold text-blue-900">Recommendations</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Schedule a consultation with a genetic counselor</li>
              <li>Consider comprehensive genetic testing</li>
              <li>Maintain regular health check-ups</li>
              <li>Follow preventive health measures</li>
            </ul>
          </div>

          <Button
            onClick={() => router.push("/dashboard")}
            className="mt-8 w-full bg-blue-600 hover:bg-blue-700"
          >
            Return to Dashboard
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            {questionGroups[currentPage].title}
          </h2>
          <p className="text-gray-600 mb-4">
            {questionGroups[currentPage].description}
          </p>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-6">
          {questionGroups[currentPage].questions.map((question) => (
            <div key={question.id} className="bg-white p-4 rounded-lg shadow-sm">
              <Label className="text-lg font-medium text-gray-900 mb-4 block">
                {question.text}
              </Label>
              <RadioGroup
                value={answers[question.id] || ""}
                onValueChange={(value) => handleAnswer(question.id, value)}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id={`${question.id}-yes`} />
                  <Label htmlFor={`${question.id}-yes`}>Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id={`${question.id}-no`} />
                  <Label htmlFor={`${question.id}-no`}>No</Label>
                </div>
              </RadioGroup>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <Button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className="bg-gray-500 hover:bg-gray-600 text-white"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {currentPage === questionGroups.length - 1 ? "Get Results" : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
