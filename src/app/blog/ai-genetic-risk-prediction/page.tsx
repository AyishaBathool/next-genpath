// app/blogs/[slug]/page.tsx
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
              How AI is Revolutionizing Genetic Risk Prediction
            </h1>
          </div>
          <p className="text-lg text-teal-800 mt-2 font-medium">
            Explore how AI is transforming genetic data into personalized health insights and enabling early disease detection.
          </p>
        </div>

        <div className="prose lg:prose-xl space-y-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-teal-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              In the rapidly advancing world of healthcare, <strong className="text-teal-700">Artificial Intelligence (AI)</strong> is transforming how we understand and manage our genetic health. At the heart of this revolution is the ability of AI to <strong className="text-teal-700">analyze vast amounts of genetic data</strong>, recognize patterns, and predict health risks with unprecedented accuracy.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Understanding Genetic Risk</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Genetic risk refers to the likelihood of developing certain diseases based on variations in your DNA. Traditional genetic testing provides raw data — AI interprets it into actionable health insights.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">How AI Works in Genetic Screening</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">AI models, trained on vast datasets, can:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Identify mutations linked to specific diseases",
                "Compare DNA patterns across populations",
                "Predict disease onset based on genetics + lifestyle",
                "Customize individual risk scores"
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mt-6">
              Platforms like <strong className="text-teal-700">GenPath</strong> use AI to offer <strong className="text-teal-700">free and personalized risk assessments</strong>, helping users detect potential issues before symptoms arise.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Real-Life Applications</h2>
            <div className="space-y-6">
              <div className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                <p className="text-gray-700 text-lg">
                  Example: <strong className="text-teal-700">BRCA1/BRCA2 genes</strong>. AI not only confirms mutations but predicts the <strong className="text-teal-700">likelihood</strong> of developing breast cancer, recommends preventive actions, and spots hidden risks.
                </p>
              </div>
              <div className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                <p className="text-gray-700 text-lg">
                  AI also predicts conditions like <strong className="text-teal-700">Alzheimer's</strong> years in advance, aiding in early intervention.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Making Health More Inclusive</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">AI breaks barriers by:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Improving predictions for underrepresented ethnic groups",
                "Using NLP to scan research & medical notes",
                "Supporting global genetic health equity"
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">The Future of AI in Genetics</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">Soon, AI may:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Predict multiple diseases at once",
                "Integrate with wearable devices",
                "Offer real-time alerts",
                "Enable 24/7 genetic counseling via chatbots"
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-white/70 p-8 rounded-lg border border-teal-100 mt-6">
              <p className="text-gray-700 text-xl font-semibold text-center">
                With <span className="text-teal-700">GenPath</span>, AI-driven health prediction is no longer the future — it's now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
