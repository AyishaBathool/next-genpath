// app/blogs/personalized-healthcare-genetics/page.tsx
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
              Personalized Healthcare Through Genetics
            </h1>
          </div>
          <p className="text-lg text-teal-800 mt-2 font-medium">
            Explore how genetic insights are transforming healthcare into a more personal, proactive experience.
          </p>
        </div>

        <div className="prose lg:prose-xl space-y-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-teal-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              Imagine going to a doctor and receiving treatment tailored <em>just for you</em> — based on your unique genes, lifestyle, and risk factors. That's the power of <strong className="text-teal-700">personalized healthcare through genetics</strong>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">What Is Personalized Healthcare?</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Also known as <strong className="text-teal-700">precision medicine</strong>, personalized healthcare uses information about your genes, environment, and lifestyle to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Predict disease risks",
                  "Customize treatments",
                  "Optimize prevention strategies"
                ].map((item, index) => (
                  <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                    <p className="text-gray-700 text-lg font-semibold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Instead of a "one-size-fits-all" approach, it allows care that fits <em>you</em> as an individual.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Why Genes Matter</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Your DNA holds valuable clues about how your body works. For example:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "A variation in a metabolism gene may affect how you process medications.",
                  "A mutation in BRCA1 or BRCA2 increases the risk for breast and ovarian cancer.",
                  "Specific genetic traits might make you more responsive to a particular diet or fitness plan."
                ].map((item, index) => (
                  <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                    <p className="text-gray-700 text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                By analyzing this genetic data, doctors and platforms like <strong className="text-teal-700">GenPath</strong> can make better health decisions tailored to you.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Examples of Personalized Healthcare</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "1. Pharmacogenomics",
                  content: "Some people don't respond to certain drugs — or suffer side effects. Genetic testing can reveal how your body metabolizes medication and help doctors choose the safest, most effective option."
                },
                {
                  title: "2. Cancer Treatment",
                  content: "Instead of treating all cancers the same way, genetic analysis of the tumor helps doctors select drugs that target your cancer's exact mutations."
                },
                {
                  title: "3. Preventive Screening",
                  content: "If you're genetically predisposed to a disease like colon cancer, doctors may recommend earlier or more frequent screenings — catching it before it's serious."
                },
                {
                  title: "4. Lifestyle Advice",
                  content: "Genes can influence how you respond to carbs, fats, caffeine, and exercise. With genetic guidance, you can make better choices for weight, energy, and heart health."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <h3 className="text-xl font-semibold text-teal-800 mb-4">{item.title}</h3>
                  <p className="text-gray-700 text-lg">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">How GenPath Makes It Easy</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                At GenPath, we simplify the path to personalized care by:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Providing free genetic screening",
                  "Using AI-powered algorithms to identify risk factors",
                  "Offering a user-friendly dashboard with insights and recommendations",
                  "Connecting users with counselors for deeper analysis"
                ].map((item, index) => (
                  <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                    <p className="text-gray-700 text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                No medical jargon. No hidden fees. Just <strong className="text-teal-700">empowerment through knowledge</strong>.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Is It Worth It?</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Absolutely. Personalized healthcare:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Reduces the risk of trial-and-error treatments",
                  "Saves time and money in the long run",
                  "Improves the chances of successful outcomes",
                  "Puts patients at the center of the decision-making process"
                ].map((item, index) => (
                  <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                    <p className="text-gray-700 text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                It's no longer just for elite hospitals or private clinics. With platforms like GenPath, it's becoming <strong className="text-teal-700">accessible to everyone — for free</strong>.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Final Thoughts</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Your health shouldn't be based on averages. It should be based on <em>you</em>.  
                Genetics is unlocking a new era where care is customized, effective, and proactive.
              </p>
              <div className="bg-white/70 p-8 rounded-lg border border-teal-100">
                <p className="text-gray-700 text-xl font-semibold text-center">
                  With GenPath, your DNA isn't just data — it's the key to a healthier future that's <strong className="text-teal-700">made for you</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
