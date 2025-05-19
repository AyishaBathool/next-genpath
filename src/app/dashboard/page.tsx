"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, Globe, Dna, Sparkles, ArrowRight, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import GeneticSearch from "@/components/GeneticSearch";
import GlobalDiseaseHeatmap from "@/components/GlobalDiseaseHeatmap";
import GeneticRiskAssessment from "@/components/GeneticRiskAssessment";
import DNAAnalysis from "@/components/DNAAnalysis";
import Chatbot from '@/components/Chatbot';
import TipOfTheDay from "@/components/TipOfTheDay";
import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import DNATimeline from "@/components/DNATimeline";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [showRiskAssessment, setShowRiskAssessment] = useState(false);
  const [showDNAAnalysis, setShowDNAAnalysis] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
      router.push("/login");
    }
    });

    return () => unsubscribe();
  }, [router]);

  if (!user) {
    return null;
  }

  if (showRiskAssessment) {
  return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50 p-8">
        <div className="max-w-7xl mx-auto">
          <Button
            onClick={() => setShowRiskAssessment(false)}
            className="mb-8 bg-gray-500 hover:bg-gray-600 text-white"
          >
            Back to Dashboard
          </Button>
          <GeneticRiskAssessment />
        </div>
        </div>
    );
  }

  if (showDNAAnalysis) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50 p-8">
        <div className="max-w-7xl mx-auto">
        <Button
            onClick={() => setShowDNAAnalysis(false)}
            className="mb-8 bg-gray-500 hover:bg-gray-600 text-white"
        >
            Back to Dashboard
        </Button>
          <DNAAnalysis />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50">
      <Header />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.displayName || user.email}
          </h2>
          <p className="text-gray-600">
            Your personalized genetic health dashboard
          </p>
        </motion.div>

        {/* Add TipOfTheDay at the top */}
        <div className="col-span-full mb-4">
          <TipOfTheDay />
        </div>

        {/* Main Action Cards and Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Main Action Cards - 3 columns */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <Card className="group shadow-xl bg-gradient-to-br from-blue-100 to-cyan-200 rounded-2xl hover:scale-[1.02] transition-all duration-300 border border-blue-200/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-600/10 rounded-xl mr-4">
                      <BookOpen className="h-8 w-8 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-900">Read Articles</h2>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Explore our curated collection of articles about hereditary diseases, genetic screening, and healthcare tips.
                  </p>
                  <Button
                    onClick={() => router.push("/blog")}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-200"
                  >
                    <span className="flex items-center">
                      Read Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group shadow-xl bg-gradient-to-br from-cyan-200 to-teal-200 rounded-2xl hover:scale-[1.02] transition-all duration-300 border border-cyan-200/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-cyan-600/10 rounded-xl mr-4">
                      <FileText className="h-8 w-8 text-cyan-600" />
                    </div>
                    <h2 className="text-2xl font-semibold text-cyan-900">Analyze DNA</h2>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Upload your DNA file for comprehensive analysis and personalized health insights.
                  </p>
                  <Button
                    onClick={() => setShowDNAAnalysis(true)}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-200"
                  >
                    <span className="flex items-center">
                      Upload DNA
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group shadow-xl bg-gradient-to-br from-teal-200 to-emerald-200 rounded-2xl hover:scale-[1.02] transition-all duration-300 border border-teal-200/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-teal-600/10 rounded-xl mr-4">
                      <AlertTriangle className="h-8 w-8 text-teal-600" />
                    </div>
                    <h2 className="text-2xl font-semibold text-teal-900">Risk Assessment</h2>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Take our comprehensive genetic risk assessment to understand your potential health risks and get personalized recommendations.
                  </p>
                  <Button
                    onClick={() => setShowRiskAssessment(true)}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-200"
                  >
                    <span className="flex items-center">
                      Start Assessment
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* DNA Timeline - 1 column */}
          <div className="lg:col-span-1">
            <Card className="shadow-xl bg-white/90 backdrop-blur-md rounded-2xl border border-blue-200/50 h-full">
            <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">DNA History</h2>
                <DNATimeline />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Genetic Search and Global Disease Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        >
          <Card className="group shadow-xl bg-white/90 backdrop-blur-md rounded-2xl hover:scale-[1.02] transition-all duration-300 border border-blue-200/50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600/10 rounded-xl mr-4">
                  <Dna className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-blue-900">Genetic Search</h2>
              </div>
              <GeneticSearch />
            </CardContent>
          </Card>

          <Card className="group shadow-xl bg-white/90 backdrop-blur-md rounded-2xl hover:scale-[1.02] transition-all duration-300 border border-blue-200/50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600/10 rounded-xl mr-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-blue-900">Global Disease Prevalence</h2>
              </div>
              <GlobalDiseaseHeatmap />
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <FAQ />
        </motion.div>
      </main>

      <Chatbot />
    </div>
  );
}
