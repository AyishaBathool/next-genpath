import React, { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Lightbulb } from 'lucide-react';

const geneticHealthTips = [
  "Regular genetic counseling can help you understand your family's health history and potential risks.",
  "Early detection of genetic conditions can significantly improve treatment outcomes.",
  "Maintaining a healthy lifestyle can help manage many genetic conditions.",
  "Genetic testing can provide valuable insights for family planning decisions.",
  "Understanding your genetic makeup can help personalize your healthcare approach.",
  "Some genetic conditions can be managed through diet and lifestyle modifications.",
  "Genetic screening is recommended for couples planning to start a family.",
  "Regular check-ups are crucial for monitoring genetic conditions.",
  "Genetic research is constantly evolving, bringing new treatment options.",
  "Support groups can provide valuable resources for managing genetic conditions.",
  "Genetic testing should always be done under professional medical supervision.",
  "Understanding inheritance patterns can help assess risk for future generations.",
  "Some genetic conditions can be prevented through early intervention.",
  "Genetic health is influenced by both inherited and environmental factors.",
  "Regular exercise can help manage symptoms of many genetic conditions.",
  "Genetic counseling can help interpret complex test results.",
  "Family history is a crucial tool in assessing genetic health risks.",
  "Some genetic conditions can be treated with gene therapy.",
  "Genetic health monitoring should be part of your regular healthcare routine.",
  "Understanding your genetic risks can help make informed lifestyle choices."
];

const TipOfTheDay = () => {
  const [currentTip, setCurrentTip] = useState('');

  useEffect(() => {
    // Get a random tip on component mount
    const randomTip = geneticHealthTips[Math.floor(Math.random() * geneticHealthTips.length)];
    setCurrentTip(randomTip);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <Card className="p-4 bg-gradient-to-r from-cyan-50 to-white border-cyan-100">
      <div className="flex items-start gap-3">
        <Lightbulb className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-cyan-900 mb-1">Tip of the Day</h3>
          <p className="text-cyan-800">{currentTip}</p>
        </div>
      </div>
    </Card>
  );
};

export default TipOfTheDay; 