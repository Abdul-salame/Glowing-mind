
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Rocket, 
  Users, 
  FileText, 
  TrendingUp, 
  CheckCircle2,
  Globe
} from "lucide-react"; 
import Footer from "../../components/layout/Footer";

// RESTORED ALL 5 ORIGINAL PILLARS WITH UPDATED STATS
const competencies = [
  {
    title: "Career Support Services",
    icon: <Briefcase className="w-8 h-8 text-blue-950" />,
    text: "We provide structured career guidance, employability training, mentorship, and job-readiness support that equips young people with relevant skills.",
    stat: "5,000+ Youth Trained"
  },
  {
    title: "Enterprise Support Services",
    icon: <Rocket className="w-8 h-8 text-blue-950" />,
    text: "We support youth-led enterprises through entrepreneurship training, market access, and advisory services for sustainable startups.",
    stat: "500+ Businesses Supported"
  },
  {
    title: "Community Engagement",
    icon: <Users className="w-8 h-8 text-blue-950" />,
    text: "We work closely with communities to co-create inclusive programmes and deliver context-responsive interventions.",
    stat: "15,000+ Indirect Beneficiaries"
  },
  {
    title: "Policy Development",
    icon: <FileText className="w-8 h-8 text-blue-950" />,
    text: "We facilitate evidence-based policy research and advocacy to influence inclusive policies that integrate youth perspectives.",
    stat: "30+ Strategic Partnerships"
  },
  {
    title: "Business Incubation",
    icon: <TrendingUp className="w-8 h-8 text-blue-950" />,
    text: "We design and deliver structured incubation and acceleration programmes that support MSMEs with investment readiness.",
    stat: "65% Success Rate"
  }
];

// ALL 9 KEY IMPACT METRICS AS REQUESTED
const impactMetrics = [
  { label: "Youth Trained", value: "5,000+", desc: "Trained in essential employability and life skills." },
  { label: "Alumni Network", value: "2,500+", desc: "Provided with mentorship, funding, and professional opportunities." },
  { label: "Youth-Led Businesses", value: "500+", desc: "Supported through dedicated incubation and mentorship programs." },
  { label: "Employment Rate", value: "65%", desc: "Graduates secured jobs or launched businesses within 6 months." },
  { label: "Female Participation", value: "60%", desc: "Maintaining a strong 70% completion rate among women." },
  { label: "Active Mentors", value: "50+", desc: "Providing guidance and professional support to participants." },
  { label: "Strategic Partnerships", value: "30+", desc: "Established with NGOs, private sector, and international organizations." },
  { label: "States Reached", value: "33", desc: "Active physical presence in 5 states, virtual reach in 33 states." },
  { label: "Indirect Impact", value: "15,000+", desc: "Individuals benefiting through skills transfer and community engagement." }
];

export default function CoreCompetencies() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(/images/heroes/competencies-hero.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Our Core Competencies
          </h1>
          <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Deep expertise and measurable impact in youth development and economic empowerment.
          </p>
        </motion.div>
      </section>

      {/* PROGRAMMATIC PILLARS (ALL 5 RESTORED) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Programmatic Pillars</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4" />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {competencies.map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ y: -8 }}
                className="bg-white border border-blue-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.text}
                </p>
                <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm bg-blue-50 w-fit px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-4 h-4" />
                  {item.stat}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* KEY IMPACT METRICS*/}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Key Impact Metrics</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {impactMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="text-4xl font-extrabold text-blue-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-bold text-white mb-2 leading-tight">
                  {metric.label}
                </div>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {metric.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}