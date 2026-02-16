
import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  AlertCircle, 
  Lightbulb, 
  Users, 
  Globe, 
  Scale, 
  Zap, 
  Leaf, 
  BookOpen,
  LineChart,
  Briefcase
} from "lucide-react";
import Footer from "../../components/layout/Footer";
import heroImage from "../../assets/images/why-we-exist-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyWeExist() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[480px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative px-6 max-w-5xl space-y-6"
        >
          <div className="flex justify-center mb-4">
              <Target className="w-12 h-12 text-blue-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Why Glowing Minds Initiatives Exists
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-blue-50 max-w-3xl mx-auto">
            Addressing the persistent challenges of youth unemployment, underemployment, 
            and limited access to skill development opportunities across Africa.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* Purpose and Problem Statement */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-8"
        >
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Purpose and Problem Statement</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Glowing Minds Initiatives tackles gaps in workforce readiness, entrepreneurship support, 
              and leadership training, ensuring young people are equipped to thrive economically and socially. 
              It also combats the exclusion of women, persons with disabilities, and marginalized groups 
              from opportunities and decision-making processes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Additionally, the organisation responds to environmental challenges by promoting climate 
              entrepreneurship and sustainable practices. Through policy advocacy, research, 
              and stakeholder engagement, we influence systemic change, creating an enabling environment 
              for youth empowerment and inclusive development.
            </p>
          </div>
        </motion.section>

        {/* The Core Problems with Supporting Data */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
              <AlertCircle className="text-red-500" /> Key Labor & Social Challenges
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Youth Development */}
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Youth Employability</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>• One in five unemployed Nigerian youths has been without work for more than five years.</li>
                <li>• Skills mismatches between labour demand and supply is a key market challenge.</li>
                <li>• Sub-Saharan Africa captures only 55% of its human capital due to unskilled workforces.</li>
              </ul>
            </div>

            {/* Inclusion */}
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Inclusion & Equity</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>• 77.3% of young people with disabilities are unemployed.</li>
                <li>• 79% of Nigerian women work in vulnerable, low-security, low-benefit jobs.</li>
              </ul>
            </div>

            {/* Climate */}
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Climate Sustainability</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>• Only 0.3% of total climate funding reaches youth-focused green initiatives.</li>
                <li>• Youth participation in green innovation is less than 30% in most African countries.</li>
              </ul>
            </div>

            {/* Governance */}
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Civic Engagement</h3>
              <p className="text-sm text-gray-700">
                Despite their numerical advantage, Nigerian youths occupy only 6% of elective and appointive offices.
              </p>
            </div>

            {/* Community */}
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Community Access</h3>
              <p className="text-sm text-gray-700">
                Up to 87% of youth in informal sectors find opportunities via social connections rather than formal channels.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Strategic Identity Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-slate-900 p-10 md:p-16 rounded-[3rem] text-white relative overflow-hidden"
        >
          <div className="relative z-10 space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
              Strategic Direction & Identity
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="text-blue-400 font-bold uppercase tracking-widest text-sm">Mandate</div>
                <p className="text-lg leading-relaxed">
                  Empowering African youth with skills, opportunities, and inclusive platforms while advocating for 
                  youth-centered policies and advancing climate action.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-blue-400 font-bold uppercase tracking-widest text-sm">Theory of Change</div>
                <p className="text-lg italic text-slate-400">
                  "If young people are equipped with relevant skills, inclusive opportunities, supportive networks, 
                  and a voice in policy, they will secure decent livelihoods and drive sustainable development".
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-slate-800">
              <div className="space-y-2">
                <div className="text-blue-400 font-bold uppercase tracking-widest text-sm">Vision</div>
                <p className="text-xl font-semibold">An African Society where all Youths are employed and Self Reliant.</p>
              </div>

              <div className="space-y-2">
                <div className="text-blue-400 font-bold uppercase tracking-widest text-sm">Mission</div>
                <p className="text-xl font-semibold">Empowering Youths with requisite knowledge and Opportunities while advocating for policies that makes them Self Reliant.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}