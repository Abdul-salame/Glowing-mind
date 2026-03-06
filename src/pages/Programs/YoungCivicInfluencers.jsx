
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import { page, fadeUp, stagger } from "../../animations/variants";
import { Quote, Megaphone, Users, ShieldCheck, Target, Lightbulb, Globe } from "lucide-react";

export default function YoungCivicInfluencers() {
  return (
    <motion.div variants={page} initial="initial" animate="animate" exit="exit" className="bg-white">
      {/* HERO SECTION */}
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(/images/heroes/civic.jpg)` }} 
      >
        <div className="absolute inset-0 bg-black/70" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative max-w-5xl mx-auto text-center px-6">
          <span className="bg-blue-900 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
            Civic Engagement Pillar
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-6">
            Young Civic and Community Influencers Program (YCCIP)
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Empowering young leaders to drive community development through active citizenship, 
            civic participation, and social advocacy.
          </p>
        </motion.div>
      </section>

      {/*  OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Program Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                The Young Civic and Community Influencers Program (YCCIP) is GMI’s flagship initiative 
                under the Civic Engagement thematic area. It is designed to bridge the gap between 
                youth potential and community governance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We identify, train, and mentor young people to become catalysts for social change. 
                By providing them with the tools for advocacy and community organizing, we ensure 
                that youth voices are not just heard, but are influential in local and regional 
                decision-making processes.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              className="bg-blue-50 p-10 rounded-3xl border border-blue-100 shadow-sm"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <Target className="text-blue-700" /> Key Program Objectives
              </h3>
              <ul className="space-y-4">
                {[
                  "To foster a culture of active citizenship among young Nigerians.",
                  "To build the capacity of youth for effective community advocacy.",
                  "To promote youth participation in local governance and policy dialogues.",
                  "To leverage digital tools for social impact and community influencing."
                ].map((obj, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <span className="text-blue-900 font-bold">•</span>
                    <span className="text-sm leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE FOCUS AREAS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900">Core Focus Areas</h2>
            <p className="text-gray-600 mt-4">The thematic pillars that drive the YCCIP curriculum.</p>
          </div>
          
          <motion.div 
            variants={stagger} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }} 
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Civic Education",
                desc: "Understanding rights, responsibilities, and the structures of governance in Nigeria.",
                icon: ShieldCheck
              },
              {
                title: "Advocacy & Campaigning",
                desc: "Strategic communication techniques to influence public opinion and policy makers.",
                icon: Megaphone
              },
              {
                title: "Community Organizing",
                desc: "Mobilizing local resources and people to address community-specific challenges.",
                icon: Users
              }
            ].map((focus, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-orange-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <focus.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-3">{focus.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{focus.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STRATEGIC IMPLEMENTATION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
               <h2 className="text-3xl font-bold text-blue-900 mb-6">How We Implement YCCIP</h2>
               <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="font-bold text-orange-500 text-2xl">01</div>
                    <div>
                      <h4 className="font-bold text-blue-950">Workshop & Bootcamps</h4>
                      <p className="text-sm text-gray-600">Intensive training on leadership and civic tech.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-bold text-orange-500 text-2xl">02</div>
                    <div>
                      <h4 className="font-bold text-blue-950">Community Impact Projects</h4>
                      <p className="text-sm text-gray-600">Participants lead real-world projects in their local wards.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-bold text-orange-500 text-2xl">03</div>
                    <div>
                      <h4 className="font-bold text-blue-950">Mentorship & Policy Labs</h4>
                      <p className="text-sm text-gray-600">Direct connection with seasoned civic leaders and policy experts.</p>
                    </div>
                  </div>
               </div>
            </div>
           <div className="md:w-1/2 bg-blue-900 rounded-3xl p-10 text-white relative overflow-hidden">
  <div className="relative z-10">
    <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
    <p className="text-blue-100 mb-8 leading-relaxed">
      We are building a network of influencers dedicated to the prosperity 
      and development of Nigeria's local communities.
    </p>
    
    
    <a 
      href="https://chat.whatsapp.com/IX5atzce9Nn06d0nXesjwU" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition shadow-lg"
    >
      Join the Community
    </a>
  </div>
  <Globe className="absolute -bottom-10 -right-10 text-white/10 w-64 h-64" />
</div>
              
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="mx-auto mb-8 text-blue-200 w-12 h-12" />
          <p className="text-2xl italic text-blue-900 mb-8 leading-relaxed">
            "The Young Civic and Community Influencers Program redefined my understanding 
            of leadership. It’s not about positions, but about the consistent influence 
            we exert to make our communities better for everyone."
          </p>
          <div className="font-bold text-blue-900 uppercase tracking-widest text-sm">— YCCIP Fellow, Abuja Cohort</div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}