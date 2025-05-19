// app/blogs/accuracy-at-home-dna-tests/page.tsx
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
          How Accurate Are At-Home DNA Tests?
        </h1>
        </div>
          <p className="text-lg text-teal-800 mt-2 font-medium">
          A deep dive into the reliability, science, and limitations behind at-home genetic testing kits.
        </p>
      </div>

        <div className="prose lg:prose-xl space-y-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-teal-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              Spit in a tube, mail it off, and get your ancestry, health risks, and diet advice in a few weeks — all from the comfort of your home. But how accurate are these <strong className="text-teal-700">at-home DNA tests</strong>, really?
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              It's a question more people are asking as these kits become popular birthday gifts and health tools.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">The Science Behind the Spit</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              At-home DNA tests typically analyze a type of genetic code called <strong className="text-teal-700">SNPs</strong> (single nucleotide polymorphisms). These are small variations in DNA that can hint at ancestry, health traits, and more.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              While SNP analysis isn't as thorough as full genome sequencing, it's useful for identifying:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Risk markers for certain diseases",
                "Traits like lactose intolerance or muscle composition",
                "Ancestry breakdowns based on shared markers with global populations"
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mt-6">
              So yes — many at-home kits are based on <strong className="text-teal-700">real science</strong>. But there's nuance.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">What They're Good At</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Ancestry Insights",
                  description: "Most major brands like 23andMe and AncestryDNA do a solid job of mapping where your ancestors came from. They compare your DNA with massive reference databases and return geographic estimates with high confidence."
                },
                {
                  title: "Genetic Traits",
                  description: "Traits like eye color, bitter taste sensitivity, or earwax type? These predictions are generally accurate and fun."
                },
                {
                  title: "Carrier Status",
                  description: "Many tests screen for whether you're a carrier of genetic disorders like Tay-Sachs or cystic fibrosis. This info can be important for family planning."
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Where It Gets Tricky</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Health Predictions",
                  description: "Just because a gene variant is present doesn't mean you'll develop a condition. Most diseases are polygenic (involving many genes) and influenced heavily by lifestyle and environment."
                },
                {
                  title: "Diet & Fitness Plans",
                  description: "Some kits claim to tell you the best way to eat or exercise. While there's some science behind these suggestions, they should be taken as guidance, not strict rules."
                },
                {
                  title: "False Positives or Negatives",
                  description: "Not all kits use the same reference panels. One test might flag a risk gene that another doesn't even check for. Lab errors, while rare, can also occur."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg">
                    <span className="text-teal-700 font-semibold">{item.title}:</span> {item.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mt-6">
              That's why many experts recommend <strong className="text-teal-700">confirming serious health findings with a medical-grade test</strong> and speaking to a healthcare professional.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Where GenPath Comes In</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              At GenPath, we focus on <strong className="text-teal-700">accuracy, interpretation, and accessibility</strong>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "We use verified gene-disease links only",
                "Our reports come with context — not just raw data",
                "We guide users toward real doctors and counselors when needed"
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mt-6">
              We don't want to scare you — we want to <strong className="text-teal-700">inform and empower</strong>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">So… Should You Trust At-Home Tests?</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
          In short: Yes — for many things.
        </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Just know their <strong className="text-teal-700">limitations</strong>. They offer a great starting point, not the full picture.
        </p>
              <p className="text-gray-700 leading-relaxed text-lg">
          Think of them as a compass, not a crystal ball.
        </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                If you're using your genetic insights to make better health, diet, or lifestyle decisions — and you're open to validating serious concerns with a medical expert — you're using the test the smart way.
        </p>
              <div className="bg-white/70 p-8 rounded-lg border border-teal-100">
                <p className="text-gray-700 text-xl font-semibold text-center">
                  And that's where the real value lies: <span className="text-teal-700">self-awareness that sparks smarter choices</span>.
        </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
