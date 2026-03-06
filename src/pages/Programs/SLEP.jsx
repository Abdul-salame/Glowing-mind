
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import { page, fadeUp, stagger } from "../../animations/variants";

export default function StudentEntrepreneurship() {
  return (
    <motion.div variants={page} initial="initial" animate="animate" exit="exit" className="bg-white">
      {/* HERO SECTION */}
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(/images/heroes/slep.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Student Leadership & Entrepreneurship Program (SLEP)
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Empowering undergraduates in public higher institutions with the skills to ideate, start, and scale businesses while on campus.
          </p>
        </motion.div>
      </section>

      {/* BACKGROUND  */}
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why SLEP?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The program was inspired by a 2018 crisis at the Federal University of Technology, Minna, where nearly 1,000 students were forced to defer their studies due to unpaid tuition.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We realized that academic structures lacked practical entrepreneurial training. SLEP bridges this gap by building <strong>"Campus Entrepreneurs"</strong>—students equipped to earn a livelihood while pursuing their education.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-4">Program Snapshot</h3>
              <ul className="space-y-3">
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Target Audience</span>
                  <span className="text-blue-700 font-semibold text-right">Public University Undergraduates </span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Primary Goal</span>
                  <span className="text-blue-700 font-semibold text-right">Self-Reliance </span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Recorded Impact</span>
                  <span className="text-blue-700 font-semibold text-right">2 Cohorts Completed </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 font-medium">Coverage</span>
                  <span className="text-blue-700 font-semibold text-right">National (Nigeria) </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Adaptive Delivery Model</h2>
          <p className="text-blue-100 mb-12 leading-relaxed text-lg">
            Our training utilizes a hybrid approach, combining face-to-face in-class interactions with an online learning interface. Students participate in interactive lectures, case studies, and exposure visits to actual business sites.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Interactive Lectures", "Case Studies", "Guided Tours", "Virtual Resources"].map((m, i) => (
              <div key={i} className="bg-white/10 py-4 px-2 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-sm font-semibold uppercase tracking-wider">{m}</span>
              </div>
            ))}
          </div>
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
              "Campus Leadership Bootcamps",
              "Ideation & Venture Creation",
              "Mentorship & Incubation",
              "Student Innovation Showcases"
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-blue-600 font-medium text-gray-800"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* IMPACT & SDG ALIGNMENT */}
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
            SLEP empowers the "Campus Entrepreneur" by fostering leadership and self-reliance, directly contributing to these Sustainable Development Goals:
          </p>

          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <img src="/images/sdgs/sdg4.png" alt="SDG 4" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">Quality Education</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/sdgs/sdg8.png" alt="SDG 8" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">Decent Work</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/sdgs/sdg9.png" alt="SDG 9" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">Innovation</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/sdgs/sdg17.png" alt="SDG 17" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">Partnerships</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* IMPACT / TESTIMONIAL SUMMARY */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Measuring Success </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-left bg-white p-8 rounded-2xl shadow-sm">
              <p className="italic text-gray-700 mb-6">
                "For the past 8 weeks with SLEP 2.0, gaining business orientation is an understatement. From the Johari window to the Business Model Canvas and funding, I gained a lot for my business growth."
              </p>
              <p className="font-bold text-blue-900">— Isa Mariam Oyebisi, 200 Level Student </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-4xl font-extrabold text-blue-600">500+</h4>
                <p className="text-gray-600 font-medium">Campus Entrepreneurs Trained </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-4xl font-extrabold text-blue-600">34+</h4>
                <p className="text-gray-600 font-medium">Tertiary Institutions Reached </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}