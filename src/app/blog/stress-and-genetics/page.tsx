// app/blogs/stress-and-genetics/page.tsx
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
              Stress and Genetics: The Hidden Connection
        </h1>
          </div>
          <p className="text-lg text-teal-800 mt-2 font-medium">
            Discover how your genes influence your response to stress and what you can do about it.
          </p>
        </div>

        <div className="prose lg:prose-xl space-y-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-teal-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              Did you know that your genes can influence how you handle stress? Recent research has revealed fascinating connections between our genetic makeup and our stress response, opening new doors for personalized stress management strategies.
        </p>
      </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">The Science Behind Stress and Genes</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Our genes influence stress response through several key mechanisms:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {[
                "Cortisol regulation",
                "Neurotransmitter balance",
                "Immune system response"
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Key Genetic Factors</h2>
            <div className="space-y-4">
              {[
                {
                  title: "COMT Gene",
                  description: "Influences how quickly your body breaks down stress hormones."
                },
                {
                  title: "BDNF Gene",
                  description: "Affects brain plasticity and stress resilience."
                },
                {
                  title: "5-HTTLPR Gene",
                  description: "Regulates serotonin levels and emotional response."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg">
                    <span className="text-teal-700 font-semibold">{item.title}:</span> {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Personalized Stress Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Exercise Type",
                  description: "Your genes can influence which types of exercise are most effective for stress relief."
                },
                {
                  title: "Meditation Style",
                  description: "Different meditation techniques may work better based on your genetic profile."
                },
                {
                  title: "Sleep Patterns",
                  description: "Genetic variations affect your optimal sleep schedule and quality."
                },
                {
                  title: "Dietary Needs",
                  description: "Certain nutrients may be more important for your stress response."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg">
                    <span className="text-teal-700 font-semibold">{item.title}:</span> {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Epigenetics and Stress</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Your genes aren't your destiny. Epigenetics shows how lifestyle choices can influence gene expression:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Lifestyle Changes",
                  description: "Exercise, diet, and sleep can modify how your stress genes are expressed."
                },
                {
                  title: "Environmental Factors",
                  description: "Your surroundings and experiences can impact gene activity."
                },
                {
                  title: "Mind-Body Connection",
                  description: "Mental practices can influence physical gene expression."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg">
                    <span className="text-teal-700 font-semibold">{item.title}:</span> {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Taking Action</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Understanding your genetic stress profile can help you develop a personalized approach to stress management:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Genetic Testing",
                  description: "Learn about your unique stress response genes."
                },
                {
                  title: "Personalized Plan",
                  description: "Develop a stress management strategy based on your genetic profile."
                },
                {
                  title: "Regular Monitoring",
                  description: "Track how different approaches affect your stress levels."
                },
                {
                  title: "Professional Support",
                  description: "Work with experts to optimize your stress management."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg">
                    <span className="text-teal-700 font-semibold">{item.title}:</span> {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Final Thoughts</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Your genes may influence how you handle stress, but they don't determine your fate. With the right knowledge and tools, you can develop effective strategies to manage stress and improve your well-being.
            </p>
            <div className="bg-white/70 p-8 rounded-lg border border-teal-100">
              <p className="text-gray-700 text-xl font-semibold text-center">
                Understanding your genetic stress profile is the first step.
              </p>
              <p className="text-teal-700 text-lg text-center mt-4">
                Take control of your stress response with personalized strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
