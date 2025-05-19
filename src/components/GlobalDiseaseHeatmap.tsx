import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

type DiseaseData = {
  [key: string]: {
    [key: string]: number;
  };
};

// Expanded data for genetic diseases with more countries
const diseaseData: DiseaseData = {
  'Sickle Cell Anemia': {
    'Nigeria': 0.8,
    'Ghana': 0.7,
    'Kenya': 0.6,
    'Tanzania': 0.5,
    'Uganda': 0.4,
    'India': 0.3,
    'Brazil': 0.2,
    'United States': 0.1,
    'United Arab Emirates': 0.15,
    'Saudi Arabia': 0.2,
    'Egypt': 0.3,
    'South Africa': 0.25,
    'Ethiopia': 0.35,
    'Sudan': 0.3,
    'Morocco': 0.2,
    'United Kingdom': 0.05,
    'France': 0.05,
    'Germany': 0.05,
    'Canada': 0.05,
    'Australia': 0.05,
    'China': 0.05,
    'Japan': 0.05,
    'South Korea': 0.05,
    'Russia': 0.05,
    'Mexico': 0.1,
  },
  'Cystic Fibrosis': {
    'United Kingdom': 0.7,
    'Ireland': 0.8,
    'France': 0.6,
    'Germany': 0.5,
    'Netherlands': 0.4,
    'United States': 0.3,
    'Canada': 0.3,
    'Australia': 0.2,
    'United Arab Emirates': 0.1,
    'Saudi Arabia': 0.1,
    'Qatar': 0.1,
    'Kuwait': 0.1,
    'Oman': 0.1,
    'Bahrain': 0.1,
    'New Zealand': 0.2,
    'Italy': 0.4,
    'Spain': 0.4,
    'Portugal': 0.4,
    'Belgium': 0.4,
    'Sweden': 0.3,
    'Norway': 0.3,
    'Denmark': 0.3,
    'Finland': 0.3,
    'Switzerland': 0.3,
    'Austria': 0.3,
  },
  'Tay-Sachs Disease': {
    'Israel': 0.8,
    'United States': 0.6,
    'Canada': 0.5,
    'France': 0.4,
    'United Kingdom': 0.3,
    'Germany': 0.2,
    'Russia': 0.2,
    'Poland': 0.1,
    'United Arab Emirates': 0.05,
    'Saudi Arabia': 0.05,
    'Turkey': 0.1,
    'Iran': 0.1,
    'Iraq': 0.05,
    'Syria': 0.05,
    'Lebanon': 0.1,
    'Argentina': 0.1,
    'Brazil': 0.1,
    'Mexico': 0.1,
    'South Africa': 0.1,
    'Australia': 0.1,
    'New Zealand': 0.1,
    'Japan': 0.05,
    'China': 0.05,
    'India': 0.05,
    'South Korea': 0.05,
  },
  'Thalassemia': {
    'Greece': 0.7,
    'Italy': 0.6,
    'Turkey': 0.5,
    'India': 0.4,
    'Pakistan': 0.4,
    'Iran': 0.3,
    'Thailand': 0.3,
    'Malaysia': 0.2,
    'United Arab Emirates': 0.25,
    'Saudi Arabia': 0.3,
    'Qatar': 0.25,
    'Kuwait': 0.25,
    'Oman': 0.2,
    'Bahrain': 0.25,
    'Yemen': 0.3,
    'Cyprus': 0.6,
    'Lebanon': 0.4,
    'Syria': 0.3,
    'Jordan': 0.3,
    'Egypt': 0.3,
    'Tunisia': 0.3,
    'Algeria': 0.3,
    'Morocco': 0.3,
    'Libya': 0.3,
    'Sudan': 0.3,
  },
  'Huntington\'s Disease': {
    'Venezuela': 0.7,
    'United Kingdom': 0.5,
    'United States': 0.4,
    'Canada': 0.3,
    'Australia': 0.3,
    'Germany': 0.2,
    'France': 0.2,
    'Spain': 0.1,
    'United Arab Emirates': 0.05,
    'Saudi Arabia': 0.05,
    'Qatar': 0.05,
    'Kuwait': 0.05,
    'Oman': 0.05,
    'Bahrain': 0.05,
    'New Zealand': 0.2,
    'Italy': 0.2,
    'Netherlands': 0.2,
    'Belgium': 0.2,
    'Switzerland': 0.2,
    'Austria': 0.2,
    'Sweden': 0.2,
    'Norway': 0.2,
    'Denmark': 0.2,
    'Finland': 0.2,
    'Ireland': 0.2,
  },
  'G6PD Deficiency': {
    'United Arab Emirates': 0.3,
    'Saudi Arabia': 0.35,
    'Qatar': 0.3,
    'Kuwait': 0.3,
    'Oman': 0.25,
    'Bahrain': 0.3,
    'Yemen': 0.35,
    'Egypt': 0.3,
    'Sudan': 0.35,
    'Ethiopia': 0.3,
    'Somalia': 0.35,
    'Iran': 0.25,
    'Iraq': 0.3,
    'Syria': 0.25,
    'Lebanon': 0.25,
    'Jordan': 0.25,
    'Palestine': 0.25,
    'Turkey': 0.2,
    'Greece': 0.2,
    'Italy': 0.2,
    'Spain': 0.2,
    'Portugal': 0.2,
    'India': 0.2,
    'Pakistan': 0.2,
    'Bangladesh': 0.2,
  }
};

const GlobalDiseaseHeatmap: React.FC = () => {
  const [selectedDisease, setSelectedDisease] = useState<string>('Sickle Cell Anemia');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  // Get all unique countries from the disease data
  const allCountries = Array.from(new Set(
    Object.values(diseaseData).flatMap(disease => Object.keys(disease))
  )).sort();

  return (
    <Card className="shadow-xl bg-gradient-to-bl from-teal-100 to-cyan-200 rounded-2xl hover:scale-[1.02] transition-transform">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold text-cyan-900 mb-4">Global Disease Prevalence</h2>
        <p className="text-gray-800 mb-4">
          Explore the global distribution of genetic diseases. Select a disease and country to see prevalence rates.
        </p>

        <div className="mb-4">
          <Select value={selectedDisease} onValueChange={setSelectedDisease}>
            <SelectTrigger className="w-full bg-white border-cyan-200">
              <SelectValue placeholder="Select a disease" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-cyan-200">
              {Object.keys(diseaseData).map((disease) => (
                <SelectItem 
                  key={disease} 
                  value={disease}
                  className="text-gray-900 hover:bg-cyan-50 focus:bg-cyan-50"
                >
                  {disease}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="mb-4">
          <Select value={selectedCountry || ''} onValueChange={setSelectedCountry}>
            <SelectTrigger className="w-full bg-white border-cyan-200">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-cyan-200 max-h-[300px]">
              <ScrollArea className="h-[250px]">
                {allCountries.map((country) => (
                  <SelectItem 
                    key={country} 
                    value={country}
                    className="text-gray-900 hover:bg-cyan-50 focus:bg-cyan-50"
                  >
                    {country}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
        </div>

        {selectedCountry && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow-sm border border-cyan-100">
            <h3 className="text-lg font-semibold text-cyan-900 mb-2">
              Prevalence in {selectedCountry}
            </h3>
            <p className="text-gray-700">
              {selectedDisease}: {(diseaseData[selectedDisease][selectedCountry] * 100).toFixed(1)}%
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GlobalDiseaseHeatmap; 