// app/blogs/free-genetic-screening/page.tsx
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
          Free Genetic Screening: Myth or Reality?
        </h1>
        </div>
          <p className="text-lg text-teal-800 mt-2 font-medium">
          Unpacking the truth about free genetic screening and how platforms like GenPath are making it accessible to all.
        </p>
      </div>

        <div className="prose lg:prose-xl space-y-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-teal-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              For years, genetic screening was seen as a luxury — expensive, exclusive, and limited to those with elite medical access. But times are changing. The idea of <strong className="text-teal-700">free genetic screening</strong> is no longer just a myth; it's becoming a reality, especially with digital platforms like <strong className="text-teal-700">GenPath</strong> leading the charge.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">What is Genetic Screening?</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
          Genetic screening involves analyzing your DNA to check for mutations that could lead to diseases or inherited conditions. Unlike full genome sequencing, it focuses on specific genes or patterns linked to health risks.
        </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {[
                "Predict disease likelihood",
                "Identify carrier status",
                "Plan early treatment"
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">The High Cost Barrier</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
          Traditionally, genetic tests have been expensive — often costing hundreds or even thousands of dollars. This cost includes:
        </p>
            <div className="space-y-4">
              {[
                {
                  title: "Lab Testing",
                  description: "Professional analysis of your DNA samples."
                },
                {
                  title: "Genetic Counseling",
                  description: "Expert guidance on understanding your results."
                },
                {
                  title: "Data Interpretation",
                  description: "Detailed analysis of your genetic information."
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Why Free Screening Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Early Detection",
                  description: "Identify diseases before symptoms appear."
                },
                {
                  title: "Public Health",
                  description: "Improve overall community health outcomes."
                },
                {
                  title: "Cost Reduction",
                  description: "Lower long-term healthcare expenses."
                },
                {
                  title: "Community Empowerment",
                  description: "Provide preventive knowledge to all."
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Making Free Screening Possible</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Here's how platforms like <strong className="text-teal-700">GenPath</strong> are making free genetic screening a reality:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "AI Technology",
                  description: "Open-source tools reduce analysis costs."
                },
                {
                  title: "Digital Solutions",
                  description: "Remote testing and digital reports cut expenses."
                },
                {
                  title: "Non-Profit Model",
                  description: "Partnerships support accessibility."
                },
                {
                  title: "Efficient Design",
                  description: "User-focused approach reduces overhead."
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">What to Watch For</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Not all "free" tests are created equal. Be aware of:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Hidden Costs",
                  description: "Some platforms charge high fees for results."
                },
                {
                  title: "Data Usage",
                  description: "Check how your genetic data is used."
                },
                {
                  title: "Accuracy",
                  description: "Verify the reliability of the testing."
                },
                {
                  title: "Support",
                  description: "Ensure genetic counseling is available."
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
              Free genetic screening isn't a far-off dream anymore. It's a movement towards <strong className="text-teal-700">health equity</strong> — where everyone, regardless of income, can access vital genetic insights.
            </p>
            <div className="bg-white/70 p-8 rounded-lg border border-teal-100">
              <p className="text-gray-700 text-xl font-semibold text-center">
                With GenPath, free genetic screening is real.
              </p>
              <p className="text-teal-700 text-lg text-center mt-4">
                And it's here to stay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
