
import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import heroIdentity from "../../assets/images/heroes/identity-hero.jpg";
import { fadeUp, stagger } from "../../animations/variants";

//  SVG Icon
const IconWrapper = ({ children }) => (
  <div className="w-12 h-12 mb-4 text-blue-600 bg-blue-50 rounded-lg flex items-center justify-center">
    {children}
  </div>
);
export default function Identity() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      {/* 1. HERO SECTION  */}
      <div
        className="relative h-[480px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroIdentity})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-blue-900/60" />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-400 font-bold tracking-widest uppercase text-sm"
          >
            Who We Are
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl md:text-6xl font-extrabold mt-2"
          >
            Organisational Identity
          </motion.h1>
          <p className="text-blue-100 mt-6 text-xl max-w-2xl leading-relaxed">
            A youth-focused and youth-led social enterprise nonprofit committed to advancing employability, entrepreneurship, and leadership across Africa.
          </p>
        </div>
      </div>

      <div className="flex-grow">
        <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">
          
          {/* 2. STRATEGIC DIRECTION */}
          <section>
            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-blue-600 flex flex-col"
              >
                <IconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                </IconWrapper>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 italic leading-relaxed">
                  "An African Society where all Youths are employed and Self Reliant."
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-blue-500 flex flex-col"
              >
                <IconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="m9.05 9 5.64 5.64"/><circle cx="12" cy="12" r="8"/></svg>
                </IconWrapper>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  We are on a Mission to empower Youths with requisite knowledge and Opportunities while advocating for policies that makes them Self Reliant.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-xl text-blue-950 flex flex-col border-b-4 border-blue-400"
              >
                 <IconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                 </IconWrapper>
                <h3 className="text-xl font-bold mb-4">Our Mandate</h3>
                <p className="text-gray-900 text-sm leading-relaxed">
                  To empower African youth with skills, opportunities, and inclusive platforms that enhance employability, entrepreneurship, and civic participation, while advocating youth-centered policies, advancing climate action, and promoting gender equality and social inclusion to build a resilient, self-reliant, and sustainable African society.
                </p>
              </motion.div>
            </div>
          </section>

          {/* HISTORY  */}
          <section className="relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6 text-lg text-slate-700 bg-white p-10 md:p-16 rounded-[2rem] shadow-sm border border-slate-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-1 w-12 bg-blue-600"></div>
                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Our Origin Story</h3>
              </div>
              <p>
                Glowing Minds Initiatives was established in response to interconnected social, economic, and policy challenges confronting young people in Nigeria, particularly students and recent graduates. Nigeria has one of the largest youth populations globally, yet these demographic faces persistently high levels of unemployment and underemployment.
              </p>
              <p>
                The challenge is not solely the scarcity of jobs, but a widening mismatch between formal education and the skills demanded by the labour market. The immediate catalyst for the organization’s formation emerged in 2018, when our Founder – <span className="text-blue-700 font-semibold">Shamsudeen Abdulrazak</span> was the Student Union President at Federal University of Technology, Minna, Nigeria and nearly 1,000 indigent students at the university were forced to defer their studies due to unpaid tuition fees.
              </p>
              <p>
                This incident provided concrete evidence of the economic vulnerability of students from low-income backgrounds and exposed a critical gap in the education system: most students lacked employable or income-generating skills that would enable them to sustain themselves while studying. Existing academic structures largely emphasized theoretical learning, with limited exposure to practical, entrepreneurial, or soft skills development.
              </p>
              <p>
                This experience led our Founder to convene the first <span className="font-bold">Students’ Leadership Technological and Agricultural Summit (SLETA)</span>, aiming to build "Campus Entrepreneurs" – students who could work and earn while pursuing their education. This initial insight into the employability gap among students directly evolved into the <span className="text-blue-700 font-semibold">Graduate Employability Program (GEP)</span>, which was launched through the Glowing Minds Initiative.
              </p>
              <p className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 font-medium">
                On 4th October 2020, we officially started what today evolved to Glowing Minds Initiatives. We constituted the First Board in January 2022 and Officially on the 20th of May 2022 we fully registered as a Nonprofit with Corporate Affairs Commission.
              </p>
            </motion.div>
          </section>

          {/*  theory of change */}
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
          {/* why we */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-600 p-12 rounded-[2rem] text-white relative shadow-2xl"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
                <span className="bg-white/20 p-2 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
</span> Why We Exist
              </h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-xl font-semibold text-blue-100 italic">Addressing the Mismatch</p>
                  <p className="text-lg leading-relaxed opacity-90">
                    Glowing Minds Initiatives addresses the persistent challenges of youth unemployment, underemployment, and limited access to skill development opportunities across Africa.
                  </p>
                  <p className="text-lg leading-relaxed opacity-90">
                    The organisation tackles gaps in workforce readiness, entrepreneurship support, and leadership training, ensuring young people are equipped to thrive economically and socially.
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-xl font-semibold text-blue-100 italic">Systemic Change</p>
                  <p className="text-lg leading-relaxed opacity-90">
                    It also combats the exclusion of women, persons with disabilities, and marginalized groups from opportunities and decision-making processes.
                  </p>
                  <p className="text-lg leading-relaxed opacity-90 border-l-2 border-white/30 pl-6">
                    Through policy advocacy, research, and stakeholder engagement, we influence systemic change, creating an enabling environment for sustainable societal growth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 6. CORE VALUES - Modern Grid */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-slate-900 uppercase">Our Core Values</h2>
              <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>
            <motion.div 
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {["Integrity", "Empathy", "Excellence", "Hard work", "Personal Development"].map((value, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp}
                  className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-2xl shadow-lg shadow-blue-200">
                    {value.charAt(0)}
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg leading-tight">{value}</h4>
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