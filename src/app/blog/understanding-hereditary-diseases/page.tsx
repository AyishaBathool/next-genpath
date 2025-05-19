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
          Understanding Hereditary Diseases in Your Family
        </h1>
        </div>
          <p className="text-lg text-teal-800 mt-2 font-medium">
          Learn how hereditary conditions are passed down through generations and how to identify patterns in your family's health history.
        </p>
      </div>

        <div className="prose lg:prose-xl space-y-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-teal-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              Does heart disease run in your family? What about diabetes, cancer, or rare genetic conditions? If you've ever asked yourself questions like these, you're not alone. <strong className="text-teal-700">Understanding hereditary diseases</strong> is the first step toward early detection, proactive care, and empowered decision-making.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">What Are Hereditary Diseases?</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Hereditary diseases are conditions passed down from parents to children through <strong className="text-teal-700">genes</strong>. These can be:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {[
                {
                  title: "Single-gene disorders",
                  description: "Like cystic fibrosis or sickle cell anemia"
                },
                {
                  title: "Multifactorial disorders",
                  description: "Like heart disease or type 2 diabetes"
                },
                {
                  title: "Chromosomal disorders",
                  description: "Like Down syndrome"
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Why Family History Matters</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
          Your family's medical history is like a genetic roadmap. It can reveal patterns that may affect you or your children in the future. Red flags include:
        </p>
            <div className="space-y-4">
              {[
                {
                  title: "Multiple Cases",
                  description: "Several relatives with the same or related conditions."
                },
                {
                  title: "Early Onset",
                  description: "Diseases appearing before typical age (e.g., breast cancer before 50)."
                },
                {
                  title: "Rare Patterns",
                  description: "Unusual diseases running through generations."
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Building a Family Health Tree</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
          To spot hereditary patterns, start documenting your family's health. Talk to relatives and collect:
        </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Diagnoses",
                  description: "Especially chronic or recurring conditions."
                },
                {
                  title: "Age at Diagnosis",
                  description: "When conditions first appeared."
                },
                {
                  title: "Causes of Death",
                  description: "If applicable and known."
                },
                {
                  title: "Ethnic Background",
                  description: "Some conditions are more common in specific populations."
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Taking Action</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              If you uncover risks, don't panic — knowledge is power. Here's what you can do:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Professional Guidance",
                  description: "Talk to a doctor or genetic counselor to interpret your family health tree."
                },
                {
                  title: "Lifestyle Changes",
                  description: "Manage hereditary risks through diet, exercise, and monitoring."
                },
                {
                  title: "Genetic Testing",
                  description: "Consider testing for carrier status or disease risk."
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">How GenPath Helps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Family History Tools",
                  description: "Easy-to-use tools for documenting your genetic story."
                },
                {
                  title: "AI Risk Assessment",
                  description: "Advanced analysis of your genetic patterns."
                },
                {
                  title: "Expert Support",
                  description: "Access to counselors for guidance and support."
                },
                {
                  title: "Clear Results",
                  description: "Understandable insights, not just numbers."
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
              Your DNA doesn't define your destiny — but it can illuminate your path. By understanding hereditary diseases in your family, you're taking control of your health story.
            </p>
            <div className="bg-white/70 p-8 rounded-lg border border-teal-100">
              <p className="text-gray-700 text-xl font-semibold text-center">
                Knowledge is the first step to empowerment.
              </p>
              <p className="text-teal-700 text-lg text-center mt-4">
                Take control of your genetic health journey today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
