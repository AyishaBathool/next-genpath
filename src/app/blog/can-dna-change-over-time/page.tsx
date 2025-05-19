// app/blogs/can-dna-change-over-time/page.tsx
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
              Can My DNA Change Over Time?
            </h1>
          </div>
          <p className="text-lg text-teal-800 mt-2 font-medium">
            Discover whether your genetic code can actually change and what factors might influence it.
          </p>
        </div>

        <div className="prose lg:prose-xl space-y-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-teal-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              We're often told that our DNA is fixed from birth — a permanent genetic blueprint. But is that entirely true? Can your DNA change over time? The answer is both simple and fascinating.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Your Core DNA: Mostly Fixed</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              The <strong className="text-teal-700">sequence of your DNA</strong>, the code you inherit from your parents, is mostly set at birth. This includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Genes responsible for traits like eye color",
                "Genetic predispositions to diseases",
                "Inherited mutations from your family"
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mt-6">
              This <strong className="text-teal-700">core DNA does not naturally change</strong>. It's the same in your skin cells, brain cells, and even blood. So when you take a genetic test, the report is consistent whether it's done today or ten years later.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">So, What *Can* Change?</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              While your DNA sequence is mostly fixed, your <strong className="text-teal-700">genetic expression</strong> — how your body <em>uses</em> your DNA — can change. This is where things get interesting.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              These changes happen through a field called <strong className="text-teal-700">epigenetics</strong>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Epigenetics: The Flexible Layer of DNA</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Epigenetics involves small molecular "tags" added to your DNA or proteins around it. These tags can turn genes on or off without altering the actual code.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">Things that can affect epigenetic changes include:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Diet",
                "Stress",
                "Pollution",
                "Exercise",
                "Aging"
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg font-semibold text-teal-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mt-6">
              For example, if you're exposed to chronic stress, some genes might become less active — especially those linked to immune response or mental health. Conversely, healthy habits might upregulate protective genes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Mutations: Rare But Real Changes</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Although uncommon, <strong className="text-teal-700">mutations</strong> — changes in the actual DNA sequence — can happen due to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Radiation exposure",
                "Chemical exposure (e.g., smoking)",
                "Viral infections",
                "Random errors during cell division"
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg font-semibold text-teal-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mt-6">
              Most mutations are harmless, but some can lead to conditions like cancer. Somatic mutations (those that occur after birth) affect only certain cells — which is why you can develop diseases in adulthood even if your inherited genes are healthy.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Inherited vs. Acquired DNA Changes</h2>
            <div className="bg-white/70 p-6 rounded-lg border border-teal-100 overflow-x-auto">
              <table className="table-auto w-full text-center">
                <thead>
                  <tr className="text-teal-800 font-bold">
                    <th className="p-4">Type</th>
                    <th className="p-4">Can it be passed to kids?</th>
                    <th className="p-4">Can it affect your health?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white/50 hover:bg-white/80 transition-colors">
                    <td className="p-4">Inherited mutation</td>
                    <td className="p-4">Yes</td>
                    <td className="p-4">Yes</td>
                  </tr>
                  <tr className="bg-white/50 hover:bg-white/80 transition-colors">
                    <td className="p-4">Somatic mutation</td>
                    <td className="p-4">No</td>
                    <td className="p-4">Yes</td>
                  </tr>
                  <tr className="bg-white/50 hover:bg-white/80 transition-colors">
                    <td className="p-4">Epigenetic change</td>
                    <td className="p-4">Usually no</td>
                    <td className="p-4">Yes (but reversible)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mt-6">
              Understanding these layers can help you better interpret genetic test results — and make lifestyle changes that positively influence gene expression.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">How GenPath Helps</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              At GenPath, we don't just show your raw genetic data. We offer:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Insights into potential health risks",
                "Explanations on whether they're inherited or potentially acquired",
                "Education on how epigenetics plays a role in your life"
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mt-6">
              Our mission is to help you use your genetics <strong className="text-teal-700">proactively</strong>, not fearfully.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Final Thoughts</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                So, can your DNA change over time?  
                The sequence itself mostly stays the same — but how your body <em>reads</em> and <em>uses</em> that code can shift with your environment, lifestyle, and age.
              </p>
              <div className="bg-white/70 p-8 rounded-lg border border-teal-100">
                <p className="text-gray-700 text-xl font-semibold text-center">
                  With <span className="text-teal-700">GenPath</span>, you can learn not only what's in your genes, but how to live smarter with that knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
