// app/blogs/carrier-vs-affected/page.tsx
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
              Carrier vs. Affected: Understanding Genetic Status
        </h1>
          </div>
          <p className="text-lg text-teal-800 mt-2 font-medium">
            Learn the crucial differences between being a carrier and being affected by a genetic condition.
        </p>
      </div>

        <div className="prose lg:prose-xl space-y-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-teal-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              When it comes to genetic conditions, understanding the difference between being a <strong className="text-teal-700">carrier</strong> and being <strong className="text-teal-700">affected</strong> is crucial. These terms describe different genetic states that can have very different implications for your health and family planning.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">What is a Carrier?</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              A carrier has one copy of a gene mutation but doesn't show symptoms of the condition. This is common in recessive genetic disorders.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {[
                "No symptoms",
                "Can pass to children",
                "Usually healthy"
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">What Does Affected Mean?</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              An affected individual has the genetic condition and shows symptoms. This can happen in different ways:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Recessive Disorders",
                  description: "Two copies of the mutation are needed (one from each parent)."
                },
                {
                  title: "Dominant Disorders",
                  description: "Only one copy of the mutation is needed to show symptoms."
                },
                {
                  title: "X-Linked Disorders",
                  description: "Mutations on the X chromosome can affect males and females differently."
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Why Does This Matter?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Family Planning",
                  description: "Understanding carrier status helps make informed decisions about having children."
                },
                {
                  title: "Early Detection",
                  description: "Knowing you're affected allows for early intervention and treatment."
                },
                {
                  title: "Preventive Care",
                  description: "Carriers might need specific health monitoring or lifestyle adjustments."
                },
                {
                  title: "Genetic Counseling",
                  description: "Both carriers and affected individuals can benefit from professional guidance."
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Real-Life Example: Tay-Sachs Disease</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Carriers",
                  description: "Healthy individuals with one copy of the mutation. Common in certain populations."
                },
                {
                  title: "Affected Individuals",
                  description: "Show severe symptoms from early childhood, including neurological problems."
                },
                {
                  title: "Inheritance Pattern",
                  description: "Both parents must be carriers for a child to be affected."
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Getting Tested</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Genetic testing can tell you if you're a carrier or affected. This information is valuable for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Personal Health",
                  description: "Understanding your genetic status helps manage your health proactively."
                },
                {
                  title: "Family Planning",
                  description: "Making informed decisions about having children."
                },
                {
                  title: "Early Intervention",
                  description: "Starting treatment early if you're affected."
                },
                {
                  title: "Family Awareness",
                  description: "Helping relatives understand their potential risks."
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
              Whether you're a carrier or affected, understanding your genetic status is a powerful tool for managing your health and making informed decisions about your future.
            </p>
            <div className="bg-white/70 p-8 rounded-lg border border-teal-100">
              <p className="text-gray-700 text-xl font-semibold text-center">
                Knowledge is power when it comes to genetic health.
              </p>
              <p className="text-teal-700 text-lg text-center mt-4">
                Get tested, stay informed, and take control of your genetic future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
