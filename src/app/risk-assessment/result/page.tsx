"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface RiskResult {
  riskFactor: string;
  score: number;
}

const ResultPage = () => {
  const router = useRouter();
  const [result, setResult] = useState<RiskResult | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("geneticRiskResult");
    if (stored) {
      setResult(JSON.parse(stored));
    }
  }, []);

  const getRiskLevel = (score: number) => {
    if (score >= 3) return "High";
    if (score >= 2) return "Moderate";
    return "Low";
  };

  const getRecommendations = (riskFactor: string) => {
    const recommendations: Record<string, { actions: string[]; specialists: string[]; tests: string[] }> = {
      "General Genetic Disorders": {
        actions: [
          "Schedule a consultation with a genetic counselor",
          "Document detailed family medical history",
          "Consider comprehensive genetic testing"
        ],
        specialists: [
          "Genetic Counselor",
          "Medical Geneticist",
          "Primary Care Physician"
        ],
        tests: [
          "Comprehensive genetic panel",
          "Chromosomal microarray analysis",
          "Whole exome sequencing (if indicated)"
        ]
      },
      "Early-Onset Cancer": {
        actions: [
          "Regular cancer screening based on family history",
          "Consider genetic testing for cancer predisposition",
          "Maintain healthy lifestyle habits"
        ],
        specialists: [
          "Oncologist",
          "Genetic Counselor",
          "Cancer Risk Assessment Specialist"
        ],
        tests: [
          "BRCA1/2 testing",
          "Lynch syndrome screening",
          "Regular cancer screening protocols"
        ]
      },
      "Neurodevelopmental Disorders": {
        actions: [
          "Developmental assessment",
          "Early intervention services if needed",
          "Regular pediatric follow-ups"
        ],
        specialists: [
          "Developmental Pediatrician",
          "Child Neurologist",
          "Behavioral Therapist"
        ],
        tests: [
          "Developmental screening",
          "Neurological evaluation",
          "Genetic testing for specific syndromes"
        ]
      },
      "Cardiovascular Disorders": {
        actions: [
          "Regular cardiac evaluation",
          "Maintain heart-healthy lifestyle",
          "Monitor blood pressure and cholesterol"
        ],
        specialists: [
          "Cardiologist",
          "Cardiac Geneticist",
          "Preventive Cardiology Specialist"
        ],
        tests: [
          "Echocardiogram",
          "Cardiac genetic testing",
          "Regular cardiac screening"
        ]
      },
      "Reproductive Health": {
        actions: [
          "Fertility evaluation",
          "Genetic counseling",
          "Regular gynecological check-ups"
        ],
        specialists: [
          "Reproductive Endocrinologist",
          "Genetic Counselor",
          "Gynecologist"
        ],
        tests: [
          "Hormonal evaluation",
          "Carrier screening",
          "Fertility assessment"
        ]
      },
      "Psychiatric Disorders": {
        actions: [
          "Regular mental health monitoring",
          "Family counseling if needed",
          "Stress management techniques"
        ],
        specialists: [
          "Psychiatrist",
          "Psychologist",
          "Mental Health Counselor"
        ],
        tests: [
          "Psychiatric evaluation",
          "Genetic testing for psychiatric conditions",
          "Regular mental health screening"
        ]
      },
      "Autoimmune Disorders": {
        actions: [
          "Regular autoimmune screening",
          "Monitor for symptoms",
          "Maintain immune system health"
        ],
        specialists: [
          "Rheumatologist",
          "Immunologist",
          "Autoimmune Specialist"
        ],
        tests: [
          "Autoimmune panel",
          "Inflammatory markers",
          "Regular autoimmune screening"
        ]
      },
      "Neurological Disorders": {
        actions: [
          "Regular neurological evaluation",
          "Monitor for symptoms",
          "Maintain brain health"
        ],
        specialists: [
          "Neurologist",
          "Neurogeneticist",
          "Neurological Rehabilitation Specialist"
        ],
        tests: [
          "Neurological evaluation",
          "Brain imaging if needed",
          "Genetic testing for neurological conditions"
        ]
      }
    };

    return recommendations[riskFactor] || {
      actions: [
        "Consult with a healthcare provider",
        "Regular health check-ups",
        "Maintain healthy lifestyle habits"
      ],
      specialists: [
        "Primary Care Physician",
        "Genetic Counselor",
        "Specialist as needed"
      ],
      tests: [
        "Basic health screening",
        "Genetic counseling",
        "Specialized testing as recommended"
      ]
    };
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-800">Your Genetic Risk Assessment</h2>

      {result ? (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Primary Risk Factor</h3>
            <p className="text-lg text-gray-800 mb-2">{result.riskFactor}</p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Risk Level:</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                getRiskLevel(result.score) === "High" 
                  ? "bg-red-100 text-red-800"
                  : getRiskLevel(result.score) === "Moderate"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-green-100 text-green-800"
              }`}>
                {getRiskLevel(result.score)}
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Recommended Actions</h3>
            <ul className="space-y-3">
              {getRecommendations(result.riskFactor).actions.map((action, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">{action}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Recommended Specialists</h3>
            <ul className="space-y-3">
              {getRecommendations(result.riskFactor).specialists.map((specialist, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">{specialist}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Recommended Tests</h3>
            <ul className="space-y-3">
              {getRecommendations(result.riskFactor).tests.map((test, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">{test}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={() => router.push("/risk-assessment")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Retake Assessment
            </Button>
            <Button
              onClick={() => router.push("/")}
              className="bg-gray-600 hover:bg-gray-700 text-white"
            >
              Return Home
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600">
          <p>No assessment results found.</p>
          <Button
            onClick={() => router.push("/risk-assessment")}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Take Assessment
          </Button>
        </div>
      )}
    </div>
  );
};

export default ResultPage;
