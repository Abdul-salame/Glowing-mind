import { motion } from "framer-motion";
import { page, stagger, fadeUp } from "../../animations/variants";
import {
  Laptop,
  BookOpen,
  FileText,
  Building2,
  Quote
} from "lucide-react";
import Footer from "../../components/layout/Footer";

export default function GraduateEmployability() {
  return (
    <motion.div
      variants={page}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-white"
    >
      {/* HERO */}
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(/images/heroes/gep-hero.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative max-w-5xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Graduate Employability Program (GEP)
          </h1>
          <p className="text-lg md:text-xl mt-6 leading-relaxed">
            A specialized career readiness initiative by Glowing Minds Initiatives designed to bridge the gap between formal education and the practical demands of the global labor market.
          </p>
        </motion.div>
      </section>

      {/* OVERVIEW & RATIONALE */}
      <section className="py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-4">Why GEP Exists</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              GEP was born out of a critical observation in 2018 regarding the economic vulnerability of students and the widening mismatch between academic theory and workplace reality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We recognized that many fresh graduates exit tertiary institutions without the digital literacy, soft skills, or professional networks required to secure and retain decent work. GEP directly addresses this unemployment crisis by providing a structured transition from education to employment.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-blue-50 p-8 rounded-2xl border border-blue-100"
          >
            <h3 className="text-xl font-bold mb-4 text-blue-900">Program Snapshot</h3>
            <ul className="space-y-4 text-gray-800">
              <li className="flex justify-between border-b border-blue-200 pb-2">
                <strong>Target Audience:</strong> 
                <span>Fresh Unemployed Graduates </span>
              </li>
              <li className="flex justify-between border-b border-blue-200 pb-2">
                <strong>Geographic Coverage:</strong> 
                <span>National (Nigeria) </span>
              </li>
              <li className="flex justify-between border-b border-blue-200 pb-2">
                <strong>Delivery Model:</strong> 
                <span>Hybrid (In-class & Virtual)</span>
              </li>
              <li className="flex justify-between">
                <strong>Current Progress:</strong> 
                <span>4 Cohorts Completed </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* CORE COMPETENCIES */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Training Pillars</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Career Support",
                desc: "Structured guidance, employability training, and mentorship to equip youth for evolving markets."
              },
              {
                title: "Workforce Readiness",
                desc: "Focus on digital literacy, communication, and the 'Campus Entrepreneur' mindset."
              },
              {
                title: "Market Alignment",
                desc: "Interventions aligned with community needs and current labor market realities."
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              >
                <h4 className="text-xl font-bold mb-3 text-blue-300">{pillar.title}</h4>
                <p className="text-blue-50/80">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Training Methodology</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We utilize a blended learning approach that combines theory with practical exposure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { label: "Interactive Lectures", icon: <BookOpen className="w-8 h-8 text-blue-500" /> },
              { label: "Case Studies", icon: <FileText className="w-8 h-8 text-blue-500" /> },
              { label: "Exposure Visits", icon: <Building2 className="w-8 h-8 text-blue-500" /> },
              { label: "Virtual Learning", icon: <Laptop className="w-8 h-8 text-blue-500" /> }
            ].map((method, i) => (
              <div key={i} className="p-6 border rounded-2xl hover:bg-gray-50 transition">
                <span className="text-4xl mb-4 block">{method.icon}</span>
                <span className="font-semibold text-gray-900">{method.label} </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC PHASES */}
      <section className="bg-gray-50 py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-12">
            Strategic Program Phases
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Intensive Capacity Building ",
              "Structured Internships",
              "Post-Training Support",
              "Corporate Career Fairs"
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-blue-600 font-medium"
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
            GEP is a cornerstone of our mission to build a self-reliant generation. By equipping youth with market-relevant skills, we directly contribute to:
          </p>

          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <img src="/images/sdgs/sdg1.png" alt="SDG 1" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">No Poverty</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/sdgs/sdg4.png" alt="SDG 4" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">Quality Education</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/sdgs/sdg8.png" alt="SDG 8" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">Decent Work</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/sdgs/sdg17.png" alt="SDG 17" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">Partnerships</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS SECTION  */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-16">Alumni Success Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Testimonial 1 */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-8 text-blue-100 w-12 h-12" />
              <p className="text-gray-700 italic leading-relaxed mb-8 relative z-10">
                "I recently completed Graduate Employability Program 4.0 from Glowing Minds Initiatives; an organization focused on tackling unemployment and underemployment in Africa. I applied for GEP 4.0 to enhance my career perspectives and gain invaluable knowledge. Over the past five weeks, I have gained knowledge on self-discovery, personal branding, goal setting, time management, CV writing and cover letters and personal branding. I am confident that these skills acquired will make me a better person in the job space. I hope to apply this knowledge and strategies acquired at Glowing Minds Initiative to make myself a better person in the employability space. Thank you very much, Growing Minds Initiative, for this wonderful initiative. I really appreciate it. Thank you."
              </p>
              <div className="border-t pt-6">
                <h4 className="font-bold text-blue-900 uppercase">Imam Taofiq Ahmad</h4>
               <p className="text-sm text-gray-500 font-medium">Political Science Graduate, Usmanu Danfodio University, Sokoto (UDUS)</p>
                         </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-8 text-blue-100 w-12 h-12" />
              <p className="text-gray-700 italic leading-relaxed mb-8 relative z-10">
                "My reason for applying for GEP, Graduate Employability Program 4.0, is to increase my chances of being employed. In the course of this program, I learned a whole lot of things, but the things that stood out for me the most were emotional intelligence and CV and cover letter writing. And there, Mr. Abdulganiy explained and he emphasized the principles of building a powerful CV and resume. Now, all of those things are things that are going to like help and benefit graduates. It's definitely going to benefit me and I think it's going to benefit a whole lot of people that are job hunting presently. So, thank you, GEP 4.0."
              </p>
              <div className="border-t pt-6">
                <h4 className="font-bold text-blue-900 uppercase">Anita Williams</h4>
<p className="text-sm text-gray-500 font-medium">Portuguese and English Graduate, Lagos State University (LASU)</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}