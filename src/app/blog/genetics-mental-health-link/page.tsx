// app/blogs/genetics-mental-health-link/page.tsx
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
              Genetics and Mental Health: Is There a Link?
            </h1>
          </div>
          <p className="text-lg text-teal-800 mt-2 font-medium">
            Unravel how your genes might influence your emotions, thoughts, and mental well-being.
          </p>
        </div>

        <div className="prose lg:prose-xl space-y-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-teal-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              Mental health has long been viewed as something influenced by environment, trauma, stress, and personal experience. But did you know that <strong className="text-teal-700">genetics plays a role too</strong>? Recent studies are peeling back the layers of our DNA to explore how mental health conditions may be passed down — and how understanding our genes can lead to better emotional care.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Your DNA and Your Mind</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Our brains are built from the instructions coded in our DNA. These instructions shape how neurons connect, how chemicals like serotonin function, and how we respond to the world emotionally.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Certain genes have been linked to an increased risk of mental health conditions, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Depression",
                  "Anxiety",
                  "Bipolar disorder",
                  "Schizophrenia",
                  "ADHD and autism spectrum disorders"
                ].map((item, index) => (
                  <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                    <p className="text-gray-700 text-lg font-semibold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                These are often <strong className="text-teal-700">polygenic</strong>, meaning they're influenced by multiple genes, each contributing a small effect. You might inherit a combination of these that slightly increases your susceptibility — but environment, lifestyle, and support systems still matter a lot.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Nature <em>and</em> Nurture</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                It's not just about what you're born with — it's how your environment interacts with your genetic makeup. This concept is known as <strong className="text-teal-700">gene-environment interaction</strong>.
              </p>
              <div className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                <p className="text-gray-700 text-lg">
                  Example: A person might carry genes that raise their risk for anxiety, but if they grow up in a calm, supportive environment, those genes might not "switch on." Meanwhile, high stress, trauma, or isolation can trigger or worsen symptoms in genetically vulnerable individuals.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                So no — your genes don't "doom" you. Instead, they give you insight.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Mental Health in Families</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Have you ever heard someone say, "Depression runs in my family"? That's not just a figure of speech. Mental health issues do tend to cluster in families, partly due to shared genetics.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                If one parent has bipolar disorder, for example, a child has a higher-than-average chance of developing it. But again — it's just a <strong className="text-teal-700">risk</strong>, not a certainty.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Knowing your family history and your genetic profile can be a powerful tool in catching issues early and managing them proactively.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Where GenPath Fits In</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                At GenPath, we believe mental health is just as important as physical health. Through our platform, users can:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Learn if they carry genetic variants linked to mental health conditions",
                  "Understand how those genes interact with their lifestyle",
                  "Get access to personalized tips and wellness resources",
                  "Connect with counselors trained to interpret genetic risks with empathy"
                ].map((item, index) => (
                  <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                    <p className="text-gray-700 text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                We're not diagnosing — we're <strong className="text-teal-700">educating</strong>, <strong className="text-teal-700">empowering</strong>, and giving you the tools to make informed choices about your mental well-being.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">A New Perspective on Mental Health</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                When you start looking at your mental health through a genetic lens, it doesn't make it less personal — it makes it more understandable. It shifts the conversation from blame to biology, from stigma to science.
              </p>
              <div className="bg-white/70 p-8 rounded-lg border border-teal-100">
                <p className="text-gray-700 text-xl font-semibold text-center">
                  Because the more you know about your own mind — genetically and emotionally — the more you can build a life that supports it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
