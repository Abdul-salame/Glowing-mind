
import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react"; 
import Footer from "../../components/layout/Footer";

const sdgSections = [
  {
    number: 1,
    title: "NO POVERTY",
    tagline: "We equip people living in underserved communities with the necessary skills that can help them earn income and live better lives.",
    desc: "Glowing Minds Initiative For Human Development aims to end poverty in all its forms everywhere. Our objectives include ensuring that the entire population and especially the poorest and most vulnerable have equal rights to economic resources, access to basic services, property and land control, natural resources and new technologies.",
    image: "/images/sdgs/sdg1.png",
    reverse: false
  },
  {
    number: 4,
    title: "QUALITY EDUCATION",
    tagline: "We are committed to improving quality education by building schools and improving the learning experience of children across Africa.",
    desc: "We are committed to fostering an environment that strives to guarantee universal access to comprehensive, fair, and high-quality education, while concurrently advocating for the facilitation of continual learning opportunities throughout one's entire life.",
    image: "/images/sdgs/sdg4.png",
    reverse: true
  },
  {
    number: 8,
    title: "DECENT WORK AND ECONOMIC GROWTH",
    tagline: "We Promote inclusive and sustainable economic growth, employment and decent work for all.",
    desc: "Glowing Minds Initiative For Human Development ensured Sustained and inclusive economic growth can drive progress, create decent jobs for all and improve living standards. COVID-19 has disrupted billions of lives and endangered the global economy.",
    image: "/images/sdgs/sdg8.png",
    reverse: false
  },
  {
    number: 13,
    title: "CLIMATE ACTION",
    tagline: "Climate change is affecting every country on every continent. It is disrupting national economies and affecting lives.",
    desc: "Glowing Minds Initiative For Human Development sees Saving lives and livelihoods requires urgent action to address both the pandemic and the climate emergency. There by we start what is call 'Waste to wealth.'",
    image: "/images/sdgs/sdg13.png",
    reverse: true
  },
  {
    number: 17,
    title: "PARTNERSHIP FOR GOALS",
    tagline: "We join to strengthen the means of implementation of SDGs by partnership.",
    desc: "Ensure strengthening and streamlining cooperation between nation-states, both developed and developing, using the SDGs as a shared framework and a shared vision for defining that collaborative way forward.",
    image: "/images/sdgs/sdg17.png",
    reverse: false
  }
];

export default function SDGAlignment() {
  return (
    <div className="bg-white min-h-screen">
      {/* hero*/}
      <section 
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(/images/heroes/sdg-hero.jpg)` }}
      >

        <div className="absolute inset-0 bg-slate-900/60 z-0" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-6"
          >
            <Globe className="w-12 h-12 text-blue-400 animate-pulse" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our SDG Alignment</h1>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto">
            GMI’s mission is anchored in the UN 2030 Agenda to drive sustainable, inclusive growth across Africa.
          </p>
        </div>
      </section>

      {/*  SDG sections */}
      <div className="divide-y divide-gray-100">
        {sdgSections.map((sdg, index) => (
          <motion.section 
            key={sdg.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="py-16 md:py-24"
          >
            <div className="max-w-6xl mx-auto px-6">
              {/* Top Summary Header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">{sdg.title}</h2>
                <p className="text-lg font-medium text-gray-700 max-w-4xl mx-auto">
                  {sdg.tagline}
                </p>
              </div>

              {/* detail Content*/}
              <div className={`flex flex-col ${sdg.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
                <div className="w-full md:w-1/3 flex justify-center">
                  <img 
                    src={sdg.image} 
                    alt={sdg.title} 
                    className="w-64 h-64 object-contain shadow-lg rounded-2xl p-4 bg-white"
                  />
                </div>
                
                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Goal {sdg.number}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{sdg.title}</h3>
                  </div>
                  <div className="h-1 w-20 bg-blue-500 mb-6" />
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {sdg.desc}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      <Footer />
    </div>
  );
}