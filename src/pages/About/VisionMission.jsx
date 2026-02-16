
import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import heroVision from "../../assets/images/heroes/vision-hero.jpg";
import { fadeUp, stagger } from "../../animations/variants";

export default function VisionMission() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* HERO SECTION */}
      <div
        className="relative h-[420px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroVision})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl md:text-5xl font-extrabold mb-4"
          >
            Strategic Direction
          </motion.h1>
          <p className="text-blue-100 max-w-3xl text-lg md:text-xl">
            Our mandate is to bridge the gap between formal education and the global labor market through targeted youth empowerment.
          </p>
        </div>
      </div>

      <div className="flex-grow">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
          
          {/* VISION & MISSION CARDS */}
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Company Vision",
                text: "An African Society where all Youths are employed and Self Reliant.",
                
              },
              {
                title: "Company Mission",
                text: "To empower Youths with requisite knowledge and Opportunities while advocating for policies that makes them Self Reliant.",
                
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-blue-400 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h2 className="text-blue-600 font-bold uppercase  mb-6 flex items-center">
                  <span className="w-8 h-[2px] bg-blue-600 mr-3"></span>
                  {item.title}
                </h2>
                <p className="text-xl text-gray-800  font-medium">
                  "{item.text}"
                </p>
              </motion.div>
            ))}
          </div>

          {/* THEORY OF CHANGE */}
               <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-slate-950 text-white p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          <h3 className="text-3xl font-bold mb-8 text-blue-400">Theory of Change</h3>
          
          {/* The Core Logic  */}
          <p className="text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-8 font-light">
            "If young people are equipped with relevant skills, inclusive opportunities, 
            supportive networks, and a voice in policy and governance, they will secure 
            decent livelihoods, drive climate solutions, and participate meaningfully in society."
          </p>
          
          {/*  The Action Statement  */}
          <p className="text-lg text-slate-400 max-w-3xl mx-auto border-t border-slate-800 pt-8">
            Through integrated youth development, advocacy, community building, and 
            inclusive climate action, Glowing Minds Initiatives enables self-reliant youth 
            to contribute to equitable, resilient, and sustainable African development.
          </p>
        </motion.section>
          {/* CORE OBJECTIVES */}
        {/* CORE OBJECTIVES */}
<section>
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-gray-900">Our Strategic Objectives</h3>
    <p className="text-gray-500 mt-2">How we translate our mission into measurable action.</p>
  </div>
  
  <motion.div 
    variants={stagger}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    {[
      {
        title: "Youth Employability & Skills",
        desc: "To equip young people with market-relevant skills, leadership capacity, and entrepreneurial competencies that enhance employability and support sustainable livelihoods."
      },
      {
        title: "Entrepreneurship & Workforce Readiness",
        desc: "To promote youth-led enterprises and workforce preparedness through mentorship, innovation support, and access to career and business opportunities."
      },
      {
        title: "Policy, Governance & Civic Engagement",
        desc: "To influence youth-responsive policies by conducting research, facilitating dialogue, and engaging policymakers and stakeholders at local, national, and regional levels."
      },
      {
        title: "Climate Action & Sustainability",
        desc: "To advance climate entrepreneurship and environmental stewardship among youth through education, green innovation, and sustainable development initiatives."
      },
      {
        title: "Gender Equality & Social Inclusion",
        desc: "To ensure equitable participation by empowering women, persons with disabilities, and marginalized groups through inclusive programming and advocacy."
      },
      {
        title: "Community & Opportunities Sharing",
        desc: "To strengthen youth networks and collaborative platforms that facilitate peer learning, mentorship, and equitable access to employment and civic opportunities."
      }
    ].map((obj, i) => (
      <motion.div 
        key={i} 
        variants={fadeUp}
        className="bg-blue-50 p-8 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-white hover:shadow-md transition-all h-full flex flex-col"
      >
        <h4 className="text-blue-900 font-bold mb-3 text-lg">{obj.title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{obj.desc}</p>
      </motion.div>
    ))}
  </motion.div>
</section>
        </div>
      </div>

      <Footer />
    </div>
  );
}