
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, page } from "../animations/variants";
import { Briefcase, Rocket, Users, CheckCircle } from "lucide-react";
import Footer from "../components/layout/Footer";

export default function CareerPage() {
  return (
    <>
      <motion.main 
        variants={page} initial="initial" animate="animate" exit="exit"
        className="pt-32 pb-20 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6">
              Build Your Future with GMI
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              "The easier it is to find your replacement, the less valuable you are."  
              At GMI, we don't just offer jobs; we offer the chance to master high-income skills 
              and drive social impact across Africa. 
            </motion.p>
          </div>

          {/*  Philosophy Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            <motion.div variants={fadeUp} className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-900">Why Work With Us?</h2>
              <p className="text-gray-600">
                GMI is a mission-driven organization dedicated to ending poverty in all its forms. 
                We believe that lack of money isn't the problem—the lack of high-income skills is. 
                Joining our team means being part of a movement that empowers youth through 
                digital transformation and professional excellence. 
              </p>
              <ul className="space-y-4">
                {[
                  "Focus on High-Income Skills (Coding, AI, Data Analysis) ",
                  "Remote-friendly culture for digital specialists ",
                  "Continuous mentorship and leadership development ",
                  "Impact-driven work aligning with Global SDGs "
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="text-green-500" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/team-work.jpg" alt="GMI Team" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Current Section */}
          <div className="bg-blue-900 rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Ready to make an impact?</h2>
              <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
                Whether you are a professional looking for a high-income career or a volunteer 
                ready to serve, we want to hear from you. "What you will learn from service can 
                never be compared to what you will learn on your own." 
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:careers@glowingmindsinitiatives.org" 
                  className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors"
                >
                  View Open Roles
                </a>
                <a 
                  href="https://forms.gle/jJ83YJEs12eWyJud8" 
                  className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-colors"
                >
                  Volunteer With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}