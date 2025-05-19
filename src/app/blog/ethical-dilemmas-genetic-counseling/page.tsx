// app/blogs/ethical-dilemmas-genetic-counseling/page.tsx
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
              Ethical Dilemmas in Genetic Counseling
            </h1>
          </div>
          <p className="text-lg text-teal-800 mt-2 font-medium">
            Explore real cases where genetic counselors faced complex ethical decisions, from disclosure dilemmas to family conflicts.
          </p>
        </div>

        <div className="prose lg:prose-xl space-y-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-teal-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              Genetic counseling is not just science — it's deeply personal. Behind every gene variant lies a person, a family, and often a difficult choice. While counselors provide medical guidance, they're also navigating some of the <strong className="text-teal-700">toughest ethical dilemmas in modern healthcare</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              Let's explore some <strong className="text-teal-700">real-life-inspired stories</strong> that highlight the gray zones in genetic counseling.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">1. When Knowing Hurts: The Huntington's Case</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Imagine this: A 32-year-old woman comes in for testing. Her mother has Huntington's disease — a fatal, inherited condition with no cure. The woman wants to know if she carries the gene. But there's a twist: her brother is adamantly against testing and fears that if she's positive, it'll reveal <em>his</em> risk too.
              </p>
              <div className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                <p className="text-gray-700 text-lg">
                  <span className="text-teal-700 font-semibold">Ethical Dilemma:</span> Does the counselor proceed with testing, knowing the results could unintentionally reveal information about a sibling who hasn't consented?
                </p>
              </div>
              <div className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                <p className="text-gray-700 text-lg">
                  <span className="text-teal-700 font-semibold">What Happened:</span> After thorough counseling, the woman proceeds — privately. The counselor ensures her results stay confidential. It's a delicate balance of autonomy and privacy, with emotional stakes running high.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">2. Parental Secrets: Should Children Know?</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                A couple undergoes genetic screening before having children. The test reveals the father is not biologically related to the child he's raising — a result neither parent expected.
              </p>
              <div className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                <p className="text-gray-700 text-lg">
                  <span className="text-teal-700 font-semibold">Ethical Dilemma:</span> Should the counselor inform the father? Or keep the findings confidential per the mother's wishes?
                </p>
              </div>
              <div className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                <p className="text-gray-700 text-lg">
                  <span className="text-teal-700 font-semibold">What Happened:</span> This case split professionals. Some argued the father had a right to know. Others emphasized patient confidentiality. Ultimately, the counselor supported the couple in seeking therapy and navigating disclosure on their own terms.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">3. The BRCA Gene and Family Risk</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                A woman tests positive for the BRCA1 gene, dramatically increasing her risk of breast and ovarian cancer. She refuses to tell her sister, who is also at risk, citing strained family ties.
              </p>
              <div className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                <p className="text-gray-700 text-lg">
                  <span className="text-teal-700 font-semibold">Ethical Dilemma:</span> Does the counselor break confidentiality to warn a potentially at-risk family member?
                </p>
              </div>
              <div className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                <p className="text-gray-700 text-lg">
                  <span className="text-teal-700 font-semibold">What Happened:</span> Counselors are bound by confidentiality laws. While they can <strong className="text-teal-700">urge</strong> patients to disclose, they cannot breach trust. In this case, the counselor provided resources and encouraged the patient to reconsider — but couldn't force disclosure.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">Where GenPath Stands</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              At <strong className="text-teal-700">GenPath</strong>, we understand that <strong className="text-teal-700">ethics and empathy go hand in hand</strong>. Our platform ensures:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Transparent communication about what results mean",
                "Support for users making difficult decisions",
                "Clear boundaries around privacy and disclosure"
              ].map((item, index) => (
                <div key={index} className="bg-white/70 p-6 rounded-lg hover:bg-white/90 transition-colors border border-teal-100">
                  <p className="text-gray-700 text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mt-6">
              We also connect users with trained counselors — not just chatbots — when sensitive situations arise.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-900 to-cyan-900 bg-clip-text text-transparent mb-6">The Bottom Line</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Genetic counselors aren't just messengers of DNA data — they're <strong className="text-teal-700">navigators of ethical mazes</strong>. From protecting privacy to empowering informed choices, their job requires more than knowledge. It demands <strong className="text-teal-700">humanity, compassion, and critical thinking</strong>.
              </p>
              <div className="bg-white/70 p-8 rounded-lg border border-teal-100">
                <p className="text-gray-700 text-xl font-semibold text-center">
                  So the next time you hear "genetic testing," remember: It's not just about what we <em>can</em> know — it's about how we choose to use that knowledge. And those choices? They're rarely black and white.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
