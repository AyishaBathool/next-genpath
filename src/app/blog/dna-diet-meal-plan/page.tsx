// app/blogs/dna-diet-meal-plan/page.tsx
import React from 'react';
import logo from "../../../../public/DALL_E_2024-12-24_17.04.05_-_A_sleek_and_professional_logo_for__GenPath___focusing_on_genetic_screening_and_innovation._The_design_features_a_dynamic_DNA_double_helix_forming_both-removebg-preview.png"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50">
    <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-12 bg-gradient-to-r from-teal-100 to-cyan-100 p-8 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform">
          <div className='flex justify-center items-center gap-4 mb-6'>
            <img src={logo.src} className='h-20 w-20 animate-pulse' /> 
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent">
              Your DNA and Diet: The Future of Personalized Nutrition
        </h1>
        </div>
          <p className="text-lg text-teal-800 mt-2 font-medium">
            Discover how your genetic blueprint holds the key to optimal nutrition and wellness.
        </p>
      </div>

        <div className="prose lg:prose-xl space-y-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-teal-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              In a world of conflicting diet advice — keto, plant-based, low-carb, high-protein — what if the perfect diet wasn't about trends, but about <strong className="text-teal-700">your unique genetic makeup</strong>?
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 text-lg">
              Welcome to the revolutionary world of <strong className="text-teal-700">nutrigenomics</strong> — where cutting-edge science meets personalized nutrition to unlock your body's true potential.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Your Genes: The Ultimate Nutrition Guide</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Your DNA is more than just a blueprint — it's a sophisticated instruction manual that determines how your body processes and responds to different nutrients.
            </p>
            <div className="mt-6 space-y-4">
              <div className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                <p className="text-gray-700 text-lg">
                  <span className="text-teal-700 font-semibold">Lactose Intolerance:</span> A genetic variation that affects your body's ability to produce lactase, the enzyme that breaks down dairy.
                </p>
              </div>
              <div className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                <p className="text-gray-700 text-lg">
                  <span className="text-teal-700 font-semibold">Caffeine Metabolism:</span> Genetic variations that determine how quickly your body processes caffeine, affecting your coffee sensitivity.
                </p>
              </div>
              <div className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                <p className="text-gray-700 text-lg">
                  <span className="text-teal-700 font-semibold">FTO Gene:</span> Often called the "fat gene," this genetic variation influences how your body stores and processes fat.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">One Size Doesn't Fit All</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              While your friend thrives on a high-protein diet, you might feel sluggish. Or perhaps low-fat meals work wonders for others but leave you feeling drained. The secret lies in your genes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                "Personalized Food Sensitivity Management",
                "Enhanced Digestive Health",
                "Natural Weight Regulation",
                "Optimized Metabolism",
                "Reduced Risk of Chronic Conditions"
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">The Science Behind Your Plate</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Through GenPath's advanced genetic screening, we decode your unique nutritional needs and provide:
            </p>
            <div className="mt-6 space-y-4">
              {[
                "Comprehensive Genetic Nutrition Profile",
                "Personalized Dietary Recommendations",
                "Customized Meal Planning Guide"
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Real Stories, Real Results</h2>
            <div className="space-y-6">
              <div className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                <p className="text-gray-700 text-lg">
                  <span className="text-teal-700 font-semibold">Success Story 1:</span> After years of digestive discomfort, genetic testing revealed a gluten sensitivity. The switch to a gluten-free diet transformed her quality of life.
                </p>
              </div>
              <div className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                <p className="text-gray-700 text-lg">
                  <span className="text-teal-700 font-semibold">Success Story 2:</span> A client struggling with chronic fatigue discovered a genetic variation affecting vitamin D absorption. With proper supplementation, their energy levels soared.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">The Future of Nutrition is Here</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              With GenPath's cutting-edge platform, personalized nutrition isn't just a concept — it's your reality. We're not about perfection; we're about empowering you with the knowledge to make informed choices that align with your body's natural design.
            </p>
            <div className="bg-white/70 p-8 rounded-lg border border-teal-100">
              <p className="text-gray-700 text-xl font-semibold text-center">
                Your perfect diet isn't a trend — it's written in your DNA.
              </p>
              <p className="text-teal-700 text-lg text-center mt-4">
                Let's decode it together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
