
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";

import { page, fadeUp, stagger } from "../../animations/variants";

export default function ProjectUmtazi() {
  return (
    <motion.div variants={page} initial="initial" animate="animate" exit="exit" className="bg-white">
      
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(/images/heroes/umtazi.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold mb-6">Project Umtazi</h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Empowering the next generation of female leaders from underserved communities to become self-reliant through leadership and personal development.
          </p>
        </motion.div>
      </section>

      {/* MISSION & FOCUS */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-900 pl-4">
              Building Self-Reliant Female Leaders
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Project Umtazi is a specialized leadership development program designed for young females in underserved communities who aspire to lead.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We focus on providing these young women with the personal development and leadership skills necessary to break cycles of economic vulnerability and achieve sustainable self-reliance.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }}
            className="bg-purple-50 p-8 rounded-2xl border border-purple-100"
          >
            <h3 className="text-xl font-bold text-blue-900 mb-4">Program Snapshot</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">●</span>
                <p><strong>Primary Target:</strong> Young females from underserved communities.</p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">●</span>
                <p><strong>Geographic Focus:</strong> Nigeria.</p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">●</span>
                <p><strong>Core Objective:</strong> Advancing gender equality and social inclusion.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* KEY ACTIVITIES GRID */}
     <section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900">Our Strategic Pillars</h2>
      <p className="text-gray-600 mt-4">A structured pathway from capacity building to market entry.</p>
    </div>
    
    <motion.div 
      variants={stagger} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true }} 
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {[
        { 
          title: "Capacity Building", 
          desc: "Intensive training in personal development and leadership skills." 
        },
        { 
          title: "The Pitching Stage", 
          desc: "Developing the confidence to present ideas and secure support for community initiatives." 
        },
        { 
          title: "Post-Training Support", 
          desc: "Continued mentorship and guidance to ensure long-term success." 
        },
        { 
          title: "Leadership Summit", 
          desc: "A high-impact gathering for young females to engage with mentors and refine their leadership trajectories." 
        }
      ].map((item, i) => (
        <motion.div 
          key={i} 
          variants={fadeUp} 
          whileHover={{ y: -5 }} 
          className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-950"
        >
          <h4 className="font-bold text-blue-700 mb-2">{item.title}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
      {/* SDG IMPACT */}
     <section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-12 text-gray-900">Aligned with Global Goals</h2>
    
    <div className="flex flex-wrap justify-center gap-10 md:gap-16">
      {/* SDG 1 */}
      <div className="flex flex-col items-center">
        <img 
          src="/images/sdgs/sdg1.png" 
          alt="SDG 1 - No Poverty" 
          className="w-24 h-24 md:w-28 md:h-28 object-contain transition-transform duration-300 hover:scale-110" 
        />
        <span className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">No Poverty</span>
      </div>

      {/* SDG 5 */}
      <div className="flex flex-col items-center">
        <img 
          src="/images/sdgs/sdg5.png" 
          alt="SDG 5 - Gender Equality" 
          className="w-24 h-24 md:w-28 md:h-28 object-contain transition-transform duration-300 hover:scale-110" 
        />
        <span className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">Gender Equality</span>
      </div>

      {/* SDG 8 */}
      <div className="flex flex-col items-center">
        <img 
          src="/images/sdgs/sdg8.png" 
          alt="SDG 8 - Decent Work and Economic Growth" 
          className="w-24 h-24 md:w-28 md:h-28 object-contain transition-transform duration-300 hover:scale-110" 
        />
        <span className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">Decent Work</span>
      </div>
    </div>

    <p className="mt-12 text-gray-700 italic max-w-2xl mx-auto leading-relaxed border-t border-gray-100 pt-8">
      "We combat the exclusion of women and marginalized groups from opportunities and decision-making processes." 
    </p>
  </div>
</section>

      <Footer />
    </motion.div>
  );
}