"use client";

import React, { useState, useEffect } from 'react';

const funFacts = [
  "1 in 25 people of European descent is a Tay-Sachs carrier!",
  "Humans share 98% of their DNA with chimpanzees.",
  "Your DNA, if stretched out, would reach to the moon and back 6,000 times!",
  "All humans share 99.9% of their DNA with each other.",
  "The human genome contains about 3 billion base pairs.",
  "There are about 20,000-25,000 genes in the human genome.",
  "Identical twins share 100% of their DNA.",
  "The first human genome was sequenced in 2003.",
  "DNA was discovered in 1869 by Friedrich Miescher.",
  "The structure of DNA was discovered by Watson and Crick in 1953.",
  "Your DNA contains about 2 meters of genetic material in each cell.",
  "The human genome project cost about $3 billion and took 13 years to complete.",
  "Today, sequencing a human genome costs less than $1,000.",
  "Your DNA is constantly being damaged and repaired.",
  "Some genes can be turned on or off by environmental factors."
];

const DidYouKnow: React.FC = () => {
  const [currentFact, setCurrentFact] = useState<string>('');

  useEffect(() => {
    // Get a random fact
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    setCurrentFact(funFacts[randomIndex]);

    // Change fact every 30 seconds
    const interval = setInterval(() => {
      const newRandomIndex = Math.floor(Math.random() * funFacts.length);
      setCurrentFact(funFacts[newRandomIndex]);
    }, 30000); // 30 seconds in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-start gap-2">
        <div className="text-purple-500 text-xl">🧬</div>
        <div>
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Did You Know?</h3>
          <p className="text-gray-700">{currentFact}</p>
        </div>
      </div>
    </div>
  );
};

export default DidYouKnow; 