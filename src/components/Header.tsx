import React from 'react';
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import logo from "../../public/DALL_E_2024-12-24_17.04.05_-_A_sleek_and_professional_logo_for__GenPath___focusing_on_genetic_screening_and_innovation._The_design_features_a_dynamic_DNA_double_helix_forming_both-removebg-preview.png";
import Link from "next/link";

interface HeaderProps {
  showSignOut?: boolean;
}

const Header = ({ showSignOut = true }: HeaderProps) => {
  const router = useRouter();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img 
            src={logo.src} 
            alt="GenPath Logo" 
            className="h-12 w-auto cursor-pointer" 
            onClick={() => router.push('/dashboard')}
          />
          <h1 className="text-2xl font-bold text-blue-900">GenPath</h1>
        </div>
        
        {showSignOut && (
          <Button
            onClick={() => auth.signOut()}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Sign Out
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header; 