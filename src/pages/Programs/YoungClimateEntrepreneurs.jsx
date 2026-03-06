
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import { page, fadeUp, stagger } from "../../animations/variants";
import { Quote } from "lucide-react"; 

export default function YoungClimateEntrepreneurs() {
  return (
    <motion.div variants={page} initial="initial" animate="animate" exit="exit" className="bg-white">
      {/* HERO SECTION */}
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(/images/heroes/climate.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Young Climate Entrepreneurs Program</h1>
          <p className="mt-6 text-xl md:text-2xl text-green-50 max-w-3xl mx-auto">
            Empowering the next generation of green leaders through circular economy knowledge and sustainable innovation.
          </p>
        </motion.div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advancing Green Innovation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Young Climate Entrepreneurs Program is an intensive <strong>eight-week virtual initiative</strong> designed to equip fresh graduates in Nigeria with deep knowledge of the circular economy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By promoting environmental stewardship and green innovation, we help young people transition from being passive observers of climate change to active creators of sustainable business solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-900">
              <h3 className="text-xl font-bold mb-4">Program Focus</h3>
              <ul className="space-y-3">
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Primary Audience</span>
                  <span className="text-blue-700 font-semibold">Fresh Graduates</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Duration</span>
                  <span className="text-blue-700 font-semibold">8 Weeks (Virtual)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 font-medium">Core Sector</span>
                  <span className="text-blue-700 font-semibold text-right">Circular & Green Economy</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STRATEGIC ACTIVITIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Key Program Activities</h2>
            <div className="w-24 h-1 bg-blue-800 mx-auto mt-4" />
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Green Capacity Building", 
                desc: "Specialized training on circular economy principles and sustainable enterprise models." 
              },
              { 
                title: "The Climate Pitch", 
                desc: "A platform for participants to showcase innovative green business ideas to potential supporters." 
              },
              { 
                title: "Business Clinics", 
                desc: "Practical advisory sessions and trade fair opportunities for early-stage green ventures." 
              },
              { 
                title: "Sustainability Mentorship", 
                desc: "Ongoing post-training support to help scale climate-driven solutions." 
              },
              { 
                title: "Policy Engagement", 
                desc: "Equipping youth to influence climate governance and decision-making spaces." 
              },
              { 
                title: "Resource Hub Access", 
                desc: "Access to virtual learning resources and a community of environmental stewards." 
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }} className="bg-blue-50 p-8 rounded-2xl border border-green-100">
                <h4 className="text-lg font-bold mb-3 text-blue-900">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STRATEGIC PROGRAM PHASES  */}
      <section className="bg-gray-50 py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-12 text-blue-900">
            Strategic Program Phases
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Green Skills Assessment",
              "Virtual Intensive Training",
              "Climate Innovation Pitch",
              "Incubation & Mentorship"
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-blue-700 font-medium text-gray-800"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* IMPACT & GLOBAL GOALS  */}
      <section className="py-20 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Impact & Global Goals</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            YCEP turns graduates into green entrepreneurs, bridging the climate gap and contributing to:
          </p>

          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <img src="/images/sdgs/sdg12.png" alt="SDG 12" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">Responsible Consumption</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/sdgs/sdg13.png" alt="SDG 13" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">Climate Action</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/sdgs/sdg17.png" alt="SDG 17" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">Partnerships</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* WHY CLIMATE ACTION  */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Closing the Climate Gap</h2>
          <p className="text-blue-100 mb-10 leading-relaxed text-lg">
            With youth participation in climate governance below 30% in most African countries, we are bridging the gap by equipping young people with the skills to drive the green economy.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <span className="block text-4xl font-bold">0.3%</span>
              <span className="text-xs uppercase tracking-widest text-blue-100">Global Funding Reach for Youth Green Initiatives </span>
            </div>
            <div className="w-px h-12 bg-blue-700 hidden md:block" />
            <div className="text-center">
              <span className="block text-4xl font-bold">SDG 13</span>
              <span className="text-xs uppercase tracking-widest text-blue-100">Direct Alignment with Climate Action </span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Voices of Success</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Testimonial 1 */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative flex flex-col"
            >
              <Quote className="absolute top-6 right-8 text-blue-50 w-12 h-12" />
              <p className="text-gray-700 italic leading-relaxed mb-8 relative z-10 flex-grow">
                "I recently completed Graduate Employability Program 4.0 from Glowing Minds Initiatives... Over the past five weeks, I have gained knowledge on self-discovery, personal branding, goal setting, time management, CV writing and cover letters. I am confident that these skills acquired will make me a better person in the job space. I hope to apply this knowledge and strategies to make myself a better person in the employability space."
              </p>
              <div className="border-t pt-6">
                <h4 className="font-bold text-blue-900 uppercase">Imam Taofiq Ahmad</h4>
                <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
                  Political Science Graduate, Usmanu Danfodio University, Sokoto
                </p>
              </div>
            </motion.div>

            {/* Testimonial 2  */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative flex flex-col"
            >
              <Quote className="absolute top-6 right-8 text-blue-50 w-12 h-12" />
              <p className="text-gray-700 italic leading-relaxed mb-8 relative z-10 flex-grow">
                "My reason for applying for GEP 4.0 is to increase my chances of being employed. I learned a whole lot, but the things that stood out for me most were emotional intelligence and CV and cover letter writing. Mr. Abdulganiy emphasized the principles of building a powerful CV and resume. It's definitely going to benefit me and a whole lot of people job hunting presently."
              </p>
              <div className="border-t pt-6">
                <h4 className="font-bold text-blue-900 uppercase">Anita Williams</h4>
                <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
                  Portuguese and English Graduate, Lagos State University, Lagos
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}