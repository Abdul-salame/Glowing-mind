
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { page, fadeUp, stagger } from "../../animations/variants";
import { 
  FileText, 
  BarChart, 
  Users, 
  Gavel, 
  BookOpen, 
  Map, 
  Scale, 
  FileCheck, 
  Lightbulb, 
  Briefcase 
} from "lucide-react"; 

import Footer from "../../components/layout/Footer";

export default function KnowledgeProducts() {
  
  const publications = [
    { name: "Annual Impact Reports", link: "/transparency/financials", internal: true, icon: <BarChart className="w-5 h-5" /> },
    { name: "Financial Reports (Audited)", link: "/transparency/financials", internal: true, icon: <Scale className="w-5 h-5" /> },
    { name: "FFC Conference Reports", link: "/impact/events", internal: true, icon: <Users className="w-5 h-5" /> },
    { name: "AGM Reports", link: "/about/governance", internal: true, icon: <FileCheck className="w-5 h-5" /> },
    { name: "Project and Academic Articles", link: "/media/newspaper", internal: true, icon: <BookOpen className="w-5 h-5" /> },
    { name: "Strategic Plans and Case Studies", link: "/about/identity", internal: true, icon: <Map className="w-5 h-5" /> }
  ];

  const researchAndPolicy = [
    { name: "Youth Employability Research", link: "/programs/policy-lab", internal: true, icon: <FileText className="w-5 h-5" /> },
    { name: "Legal Instrument Analysis", link: "/transparency/legal", internal: true, icon: <Gavel className="w-5 h-5" /> },
    { name: "Policy Briefs & Advocacy", link: "/media/press-releases", internal: true, icon: <Lightbulb className="w-5 h-5" /> },
    { name: "Course Curriculums & Toolkits", link: "/programs/gep", internal: true, icon: <Briefcase className="w-5 h-5" /> },
    { name: "Careers & Business Articles", link: "/blog", internal: true, icon: <BookOpen className="w-5 h-5" /> }
  ];

  const renderLink = (item) => {
    const linkClass = "flex items-center group text-gray-700 hover:text-blue-600 transition-all duration-200";
    const iconBox = (
      <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-100 mr-4 transition-colors">
        <span className="text-primary">{item.icon}</span>
      </div>
    );

    if (item.internal) {
      return (
        <Link to={item.link} className={linkClass}>
          {iconBox}
          <span className="font-medium">{item.name}</span>
        </Link>
      );
    }
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {iconBox}
        <span className="font-medium">{item.name}</span>
      </a>
    );
  };

  return (
    <>
      <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="show">
            
            {/* HERO SECTION  */}
            <motion.div 
              variants={fadeUp} 
              className="relative rounded-xl shadow-lg mb-10 h-72 w-full overflow-hidden"
            >
              <img
                src="/images/impact/knowledge.jpg"
                className="w-full h-full object-cover"
                alt="GMI Knowledge Products"
              />
              {/* T */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Knowledge Products & Publications
                </h1>
              </div>
            </motion.div>

            {/* CONTENT GRID */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Institutional Reports Section */}
              <motion.div variants={fadeUp}>
                <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
                  <FileCheck className="w-6 h-6" /> Institutional Reports
                </h2>
                <ul className="space-y-4">
                  {publications.map((item, index) => (
                    <li key={index}>{renderLink(item)}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Research & Policy Section */}
              <motion.div variants={fadeUp}>
                <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6" /> Research & Policy
                </h2>
                <ul className="space-y-4">
                  {researchAndPolicy.map((item, index) => (
                    <li key={index}>{renderLink(item)}</li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* QUOTE SECTION */}
            <motion.div variants={fadeUp} className="mt-12 p-6 bg-gray-50 rounded-lg italic text-gray-600 border-l-4 border-primary">
              <p>
                Our knowledge products are designed to translate innovative ideas into tangible, 
                impactful policies that address the root causes of societal problems, unlocking 
                the full potential of African youth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}