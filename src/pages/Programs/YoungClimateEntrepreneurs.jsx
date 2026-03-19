
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
          <h1 id="page-title" className="text-4xl md:text-5xl font-extrabold leading-tight">Young Climate Entrepreneurs Program</h1>
          <p className="mt-6 text-xl md:text-2xl text-green-50 max-w-3xl mx-auto">
            Empowering the next generation of green leaders through circular economy knowledge and sustainable innovation.
          </p>
        </motion.div>
      </section>

      {/* OVERVIEW SECTION */}
      <main id="main-content" aria-labelledby="page-title">
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

      {/*  CLIMATE ACTION  */}
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

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 tracking-tight">YCEP Alumni Reviews</h2>
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
              <Quote aria-hidden="true" className="absolute top-6 right-8 text-blue-50 w-12 h-12" />
              <figure className="relative z-10 flex-grow">
                <blockquote className="text-gray-700 italic leading-relaxed mb-8">
                  <p>
                    "I am one of the beneficiaries of the Young Climate Entrepreneurship Program. With the help of this program, I was able to get insight on how to curate a sustainable business. One of my favourite parts about this program is the weekly classes where we meet different climate enthusiasts where they teach us how to become better when it comes to climate issues."
                  </p>
                </blockquote>
                <figcaption className="border-t pt-6">
                  <h4 className="font-bold text-blue-900 uppercase">Fauziyyah Yusuf</h4>
                  <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">YCEP 1.0 Alumni</p>
                </figcaption>
              </figure>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative flex flex-col"
            >
              <Quote aria-hidden="true" className="absolute top-6 right-8 text-blue-50 w-12 h-12" />
              <figure className="relative z-10 flex-grow space-y-4">
                <blockquote className="text-gray-700 italic leading-relaxed mb-8 space-y-4">
                  <p>
                    "I'm forever grateful for the Youth Climate Employability Program 1.0. It ignited a spark within me, empowering me to turn my passion into business through mentorship, training, and networking."
                  </p>
                  <p>
                    "I gained the confidence and skills to succeed in self-discovery, climate change in Nigeria, business planning, sustainable business model canvas, marketing (B2B processes and traditional processes), and sourcing for finance. This program is a game-changer for young entrepreneurs, providing a platform to unleash our potential and shape our futures."
                  </p>
                  <p>
                    "Ever since I joined this program, I was able to launch my own brand, Prudent Innovations. May almighty God be with the facilitators and everyone."
                  </p>
                </blockquote>
                <figcaption className="border-t pt-6">
                  <h4 className="font-bold text-blue-900 uppercase">Tijani Mubarak Mashood</h4>
                  <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">CEO of Prudent Innovations | Lagos State University Student | YCEP 1.0 ALUMNI</p>
                </figcaption>
              </figure>
            </motion.div>
        </div>
        </div>
      </section>

      </main>

      <Footer />
    </motion.div>
  );
}