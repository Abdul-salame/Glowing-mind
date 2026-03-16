
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { page, fadeUp, stagger } from "../../animations/variants";
import { 
  BarChart, 
  Users, 
  BookOpen, 
  FileCheck, 
  Youtube, 
  Music, 
  Newspaper,
  ExternalLink,
  Globe
} from "lucide-react"; 

import Footer from "../../components/layout/Footer";

export default function KnowledgeProducts() {
  
  
  const institutionalReports = [
    { name: "2024 Annual Impact Report", link: "/reports/GMIHD 2024 ANNUAL REPORT.pdf", internal: false, icon: <BarChart className="w-5 h-5" /> },
    { name: "2023 Annual Impact Report", link: "/reports/GMIHD 2023 ANNUAL REPORT.pdf", internal: false, icon: <BarChart className="w-5 h-5" /> },
    { name: "2022 Annual Impact Report", link: "/reports/GMIHD 2022 ANNUAL REPORT.pdf", internal: false, icon: <BarChart className="w-5 h-5" /> },
    { name: "FFC Conference Reports", link: "/impact/events", internal: true, icon: <Users className="w-5 h-5" /> },
  ];

  
  const newspaperFeatures = [
    { name: "Guardian: NGO trains Niger youths on policy advocacy", link: "https://guardian.ng/news/ngo-trains-niger-youths-on-policy-development-advocacy/", internal: false },
    { name: "Nigeria Daily Post: Journalists training on fake news", link: "https://nigeriadailypost.com.ng/2024/11/14/niger-journalists-get-training-on-curbing-fake-news-others/", internal: false },
    { name: "Analyst News: GMI trains journalists in Niger State", link: "https://analystnews.com.ng/glowing-minds-initiatives-for-human-development-trains-journalists-in-niger-state-on-threat-of-fake-news/", internal: false },
    { name: "The Voice: Niger journalists trained on fake news", link: "https://thevoice.com.ng/niger-journalists-trained-on-fake-news/", internal: false },
    { name: "The Eagle Eye: News Details", link: "https://www.theeagleeye.com.ng/news-details.php?nid=199", internal: false },
  ];

  
  const multimediaFeatures = [
    { name: "GMI TV (YouTube Channel)", link: "https://youtu.be/Y1gsdZDESjQ?si=tU6EQYA6qmiovxeo", internal: false, icon: <Youtube className="w-5 h-5" /> },
    { name: "GMI Podcast (Spotify)", link: "https://open.spotify.com/episode/1qErvprjZ34feJTDbIkFJ4?si=OmqxBREHT2eZMGA3s7fWBw ", internal: false, icon: <Music className="w-5 h-5" /> },
    { name: "Facebook Video Feature", link: "https://www.facebook.com/share/v/1EPwpDzKbL/", internal: false, icon: <Globe className="w-5 h-5" /> }
  ];

  const renderLink = (item) => {
    const linkClass = "flex items-center group text-gray-700 hover:text-blue-600 transition-all duration-200";
    const iconBox = (
      <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-100 mr-4 transition-colors">
        <span className="text-primary">{item.icon || <Newspaper className="w-5 h-5" />}</span>
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
        <span className="font-medium flex items-center gap-2">
          {item.name} <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </span>
      </a>
    );
  };

  return (
    <>
      <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="show">
            
            <motion.div variants={fadeUp} className="relative rounded-2xl shadow-xl mb-16 h-80 w-full overflow-hidden">
              <img src="/images/impact/knowledge.jpg" className="w-full h-full object-cover" alt="Knowledge Products" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent flex items-center px-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white max-w-lg leading-tight">
                  Knowledge Products & Media Features
                </h1>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12">
              {/*  Annual Reports */}
              <motion.div variants={fadeUp} className="space-y-6">
                <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b pb-4">
                  <FileCheck className="text-orange-500" /> Annual Reports
                </h2>
                <ul className="space-y-5">
                  {institutionalReports.map((item, index) => (
                    <li key={index}>{renderLink(item)}</li>
                  ))}
                </ul>
              </motion.div>

              {/*  Print & Digital  */}
              <motion.div variants={fadeUp} className="space-y-6">
                <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b pb-4">
                  <BookOpen className="text-orange-500" /> Print & Digital Press
                </h2>
                <ul className="space-y-5">
                  {newspaperFeatures.map((item, index) => (
                    <li key={index}>{renderLink(item)}</li>
                  ))}
                </ul>
              </motion.div>

              {/* TV & Radio  */}
              <motion.div variants={fadeUp} className="space-y-6">
                <h2 className="text-xl font-bold text-primary flex items-center gap-2 border-b pb-4">
                  <Youtube className="text-orange-500" /> TV & Radio Features
                </h2>
                <ul className="space-y-5">
                  {multimediaFeatures.map((item, index) => (
                    <li key={index}>{renderLink(item)}</li>
                  ))}
                </ul>
              </motion.div>
            </div>

            
            <motion.div variants={fadeUp} className="mt-20 p-8 bg-blue-50 rounded-2xl text-center border border-blue-100">
              <p className="text-gray-700 italic max-w-3xl mx-auto">
                "Our knowledge products and media engagements are designed to translate innovative ideas into tangible, 
                impactful policies that address the root causes of societal problems."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}