import React, { useState, useEffect } from 'react';
import { diseases } from '@/data/diseases'; // Assuming the data is in a file called 'diseases.ts'
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

const GeneticSearch = () => {
  // State to store the input and the filtered diseases
  const [query, setQuery] = useState('');
  const [filteredDiseases, setFilteredDiseases] = useState(diseases);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  // Filter diseases whenever query changes
  useEffect(() => {
    if (query.trim() === '') {
      setFilteredDiseases(diseases);
    } else {
      const filtered = diseases.filter((disease) =>
        disease.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredDiseases(filtered);
    }
  }, [query]);

  // Handle input changes
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // Handle clicking on a suggestion
  const handleSelectDisease = (slug: string) => {
    router.push(`/diseases/${slug}`);
    setQuery('');
    setIsFocused(false);
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search for a genetic disease..."
          className="w-full p-3 pl-10 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      </div>
      
      {(isFocused || query) && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filteredDiseases.length > 0 ? (
            filteredDiseases.map((disease) => (
              <div
                key={disease.slug}
                className="p-3 hover:bg-blue-50 cursor-pointer transition-colors"
                onClick={() => handleSelectDisease(disease.slug)}
              >
                <div className="font-medium text-gray-900">{disease.name}</div>
                <div className="text-sm text-gray-500">{disease.summary.substring(0, 100)}...</div>
              </div>
            ))
          ) : (
            <div className="p-3 text-gray-500">No diseases found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default GeneticSearch;
