import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "What is genetic screening?",
    answer: "Genetic screening is a process that examines your DNA to identify potential genetic disorders or predispositions to certain health conditions. It helps in early detection and prevention of hereditary diseases."
  },
  {
    question: "How accurate is the genetic risk assessment?",
    answer: "Our genetic risk assessment uses advanced algorithms and the latest scientific research to provide accurate risk evaluations. However, it's important to note that genetic testing is one part of a comprehensive health assessment and should be discussed with healthcare professionals."
  },
  {
    question: "Is my genetic data secure?",
    answer: "Yes, we take data security very seriously. All genetic data is encrypted, stored securely, and handled in compliance with international privacy standards. We never share your data with third parties without your explicit consent."
  },
  {
    question: "How do I interpret my DNA analysis results?",
    answer: "Your DNA analysis results are presented in an easy-to-understand format with detailed explanations. Each result includes the significance of the findings and recommended next steps. Our AI assistant is also available to help explain any complex terms or concepts."
  },
  {
    question: "What types of genetic conditions can be detected?",
    answer: "Our platform can detect various genetic conditions including hereditary diseases, carrier status for certain conditions, and genetic predispositions to common health issues. The specific conditions depend on the type of screening you choose."
  },
  {
    question: "How often should I update my genetic screening?",
    answer: "While your DNA doesn't change, our understanding of genetics and new research findings are constantly evolving. We recommend reviewing your results annually or when new relevant research becomes available."
  }
];

const FAQ = () => {
  return (
    <Card className="shadow-xl bg-white/90 backdrop-blur-md rounded-2xl hover:scale-[1.02] transition-all duration-300 border border-blue-200/50">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <HelpCircle className="h-6 w-6 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-semibold text-blue-900">
            Frequently Asked Questions
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FAQ; 