// app/blogs/genetic-data-privacy/page.tsx
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
              Genetic Data Privacy: What You Need to Know
            </h1>
          </div>
          <p className="text-lg text-teal-800 mt-2 font-medium">
            Explore the importance of protecting your genetic data and how GenPath ensures your privacy and security.
          </p>
        </div>

        <div className="prose lg:prose-xl space-y-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-teal-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              When you upload your DNA for analysis, you're sharing some of the most personal data you have — your genetic blueprint. That's why <strong className="text-teal-700">genetic data privacy</strong> is more than just a technical issue — it's a matter of trust, ethics, and security.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Why is Genetic Data So Sensitive?</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Your DNA holds information about your ancestry, disease risk, physical traits, and even behavioral tendencies. This makes it:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {[
                "Highly identifiable",
                "Valuable to researchers",
                "Potentially risky if misused"
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Common Privacy Risks in Genetic Testing</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Unauthorized Access",
                  description: "Hackers or third parties accessing data without your consent."
                },
                {
                  title: "Data Sharing Without Transparency",
                  description: "Some platforms may sell anonymized data to third parties — including pharmaceutical companies — without clear opt-out options."
                },
                {
                  title: "Genetic Discrimination",
                  description: "Employers or insurance companies using genetic data to deny opportunities or coverage, although many countries have laws against this."
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">How GenPath Protects Your Data</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              At GenPath, protecting your genetic information is non-negotiable. Our approach includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Data Encryption",
                  description: "Your files are encrypted during upload, storage, and access."
                },
                {
                  title: "Zero-Knowledge Storage",
                  description: "Even we can't access your raw DNA unless you allow it."
                },
                {
                  title: "Strict Access Control",
                  description: "Only you and authorized health professionals (if you consent) can view your reports."
                },
                {
                  title: "No Third-Party Selling",
                  description: "We never sell or share your data without explicit permission."
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Laws That Protect You</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Several regulations around the world help safeguard genetic data:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "GDPR (Europe)",
                  description: "Treats genetic data as sensitive personal data."
                },
                {
                  title: "HIPAA (USA)",
                  description: "Protects health-related genetic info shared with medical providers."
                },
                {
                  title: "GINA (USA)",
                  description: "Prohibits discrimination based on genetic information in health insurance and employment."
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Final Thoughts</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Genetic testing opens powerful doors to understanding your health — but it should never come at the cost of your privacy. By choosing secure, transparent platforms like GenPath, you can unlock the benefits of DNA insights while staying safe and in control.
            </p>
            <div className="bg-white/70 p-8 rounded-lg border border-teal-100">
              <p className="text-gray-700 text-xl font-semibold text-center">
                Your genes are yours. So is your data.
              </p>
              <p className="text-teal-700 text-lg text-center mt-4">
                GenPath makes sure it stays that way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
