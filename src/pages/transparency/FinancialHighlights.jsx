
import React from "react";
import { motion } from "framer-motion";
import { page, fadeUp, stagger } from "../../animations/variants";
import { 
  TrendingUp, 
  ShieldCheck, 
  PieChart, 
  DollarSign, 
  Target, 
  Users 
} from "lucide-react";

import Footer from "../../components/layout/Footer";

export default function FinancialHighlights() {
  return (
    <>
      <motion.main 
        variants={page} 
        initial="initial" 
        animate="animate" 
        exit="exit" 
        className="pt-28 pb-20 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="show">
            
            {/* Header Section */}
            <div className="text-center mb-12">
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
                Financial Highlights
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Glowing Minds Initiatives operates a prudent and transparent financial management system 
                that supports effective programme delivery and long-term sustainability. 
                Financial operations are guided by approved budgets, internal controls, and full 
                compliance with applicable regulatory and donor requirements.
              </motion.p>
            </div>

            {/* Hero Image & Growth Status Card */}
            <motion.div variants={fadeUp} className="relative mb-16">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/transparency/finance.jpg"
                  className="w-full h-[400px] object-cover"
                  alt="Financial Transparency"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* Growth Status Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-96 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-3 rounded-xl text-white">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-900">Growth Status</p>
                    <p className="text-xs text-gray-600">Steady year-on-year financial growth across 33 states.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Grid Content */}
            <div className="grid lg:grid-cols-3 gap-8 text-gray-700">
              
              {/* Funding Sources Section */}
              <motion.div variants={fadeUp} className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <PieChart className="text-blue-600" size={28} />
                  <h3 className="text-2xl font-bold text-blue-900">Funding Sources</h3>
                </div>
                <p className="mb-8 text-gray-600 leading-relaxed">
                  We maintain a diversified funding base to reduce dependency on single sources and strengthen organizational resilience. Our revenue includes:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "Institutional Grants", desc: "Multilateral agencies and international foundations." },
                    { title: "Corporate Partnerships", desc: "Strategic CSR initiatives and sponsorships." },
                    { title: "Earned Income", desc: "Training programs, consulting, and social enterprise." },
                    { title: "Philanthropic Donations", desc: "Individual donors and high-net-worth supporters." },
                    { title: "In-Kind Support", desc: "Technical tools and professional services." }
                  ].map((source, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                      <div className="mt-1 text-blue-600"><Target size={18} /></div>
                      <div>
                        <h4 className="font-bold text-blue-900">{source.title}</h4>
                        <p className="text-sm text-gray-500">{source.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Resource Prioritization Section */}
              <motion.div variants={fadeUp} className="bg-blue-900 p-8 md:p-10 rounded-3xl shadow-xl text-white">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign size={28} />
                  <h3 className="text-2xl font-bold">Resource Prioritization</h3>
                </div>
                <p className="mb-8 text-blue-100 text-sm leading-relaxed">
                  Resources are strategically allocated to maximize value for money while maintaining efficient administrative costs.
                </p>
                
                <div className="space-y-4">
                  {[
                    { label: "Program Implementation", icon: <Users size={20}/> },
                    { label: "Capacity Development", icon: <ShieldCheck size={20}/> },
                    { label: "M & E Research", icon: <TrendingUp size={20}/> },
                    { label: "Community Engagement", icon: <Target size={20}/> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/10 rounded-2xl border border-white/10">
                      <span className="font-medium">{item.label}</span>
                      <span className="opacity-60">{item.icon}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Accountability Statement */}
              <motion.div variants={fadeUp} className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                  <ShieldCheck size={200} />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                    <ShieldCheck className="text-green-600" />
                    Financial Accountability Statement
                  </h3>
                  <blockquote className="text-xl italic text-gray-600 mb-8 border-l-4 border-blue-600 pl-6 py-2">
                    "All funds are managed in accordance with approved budgets, internal financial controls, and applicable regulatory and donor compliance requirements."
                  </blockquote>
                  
                  <div className="flex flex-wrap gap-3">
                    {["FIRS COMPLIANT", "CAC REGISTERED", "SCUML CERTIFIED"].map((tag) => (
                      <span key={tag} className="px-5 py-2.5 bg-blue-50 text-blue-700 text-xs font-black tracking-widest rounded-full border border-blue-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div> 
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}