"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, Globe, Dna, Sparkles, ArrowRight } from "lucide-react";
import GlobalDiseaseHeatmap from "@/components/GlobalDiseaseHeatmap";
import DidYouKnow from "@/components/DidYouKnow";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent animate-pulse" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center py-20 px-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-6"
          >
            <Dna className="h-16 w-16 text-blue-600 animate-float" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-teal-600 mb-6">
            Welcome to GenPath
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive platform for genetic screening, disease prevention, and personalized health insights.
          </p>
        </motion.div>
      </div>

      {/* Main Action Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8"
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
              onClick={() => window.location.href = "/blog"}
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
              <h2 className="text-2xl font-semibold text-cyan-900">Analyze DNA File</h2>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Upload your DNA file for comprehensive analysis and personalized health insights.
            </p>
            <Button
              onClick={() => window.location.href = "/dashboard"}
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-200"
            >
              <span className="flex items-center">
                Upload DNA
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Global Disease and Did You Know Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
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

        <Card className="group shadow-xl bg-gradient-to-br from-purple-100 to-indigo-200 rounded-2xl hover:scale-[1.02] transition-all duration-300 border border-purple-200/50">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-600/10 rounded-xl mr-4">
                <Sparkles className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-semibold text-purple-900">Did You Know?</h2>
            </div>
            <DidYouKnow />
          </CardContent>
        </Card>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative text-center py-12 border-t border-gray-200 mt-12"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent" />
        <div className="relative">
          <p className="text-sm text-gray-600">
            © 2025 GenPath. Built with 💙 for a healthier tomorrow.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
