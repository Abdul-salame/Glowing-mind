
import { motion } from "framer-motion";
import { 
  Megaphone, 
  Scale, 
  Globe, 
  Users, 
  FileText, 
  Share2,
  MessageCircle // Added for WhatsApp icon
} from "lucide-react"; 
import { page, fadeUp, stagger } from "../../animations/variants";
import Footer from "../../components/layout/Footer";

export default function Advocate() {
  return (
    <>
      <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="show">
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-primary mb-8">
              Advocate for Change
            </motion.h1>

            {/* Hero Image Container */}
            <div className="relative rounded-2xl overflow-hidden mb-12 h-80 w-full shadow-lg">
              <motion.img
                variants={fadeUp}
                src="/images/GetInvolved/advocate.jpg"
                className="h-full w-full object-cover"
                alt="GMI Advocacy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            <motion.div
              variants={fadeUp}
              className="text-gray-700 max-w-5xl space-y-12"
            >
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed">
                  At Glowing Minds Initiatives, advocacy is a core pillar of our mission.
                  We believe young people should be <strong>co-creators</strong> of the
                  solutions that affect their lives. By becoming a GMI Advocate, you help
                  influence systemic change and create an enabling environment for youth
                  empowerment across Africa.
                </p>
              </div>

              {/* Advocacy Pillars */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-5 p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit">
                    <Scale className="text-primary w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-primary mb-2">
                      Policy Lab Engagement
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Collaborate with our Policy Lab to translate ideas into
                      actionable youth-focused policies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit">
                    <Globe className="text-primary w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-primary mb-2">
                      Climate & Green Economy
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Advocate for youth participation in climate governance and
                      sustainable innovation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit">
                    <Users className="text-primary w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-primary mb-2">
                      Social Inclusion (GESI)
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Promote equity, disability inclusion, and gender justice.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit">
                    <Megaphone className="text-primary w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-primary mb-2">
                      Civic Participation
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Strengthen youth engagement in governance and leadership.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Section Grid */}
              <div className="grid lg:grid-cols-5 gap-8 items-stretch">
                {/* How to Advocate List */}
                <div className="lg:col-span-3 bg-gray-50 p-10 rounded-3xl border border-gray-200">
                  <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                    <Share2 className="w-7 h-7" />
                    How You Can Amplify Our Voice
                  </h3>

                  <ul className="space-y-6">
                    <li className="flex gap-4 items-start">
                      <div className="bg-primary text-white p-1 rounded-full mt-1">
                        <FileText className="w-4 h-4" />
                      </div>
                      <span className="text-lg">
                        <strong className="text-primary">Distribute Knowledge:</strong> Share research,
                        policy briefs, and toolkits.
                      </span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="bg-primary text-white p-1 rounded-full mt-1">
                        <Megaphone className="w-4 h-4" />
                      </div>
                      <span className="text-lg">
                        <strong className="text-primary">Digital Advocacy:</strong> Amplify youth initiatives
                        and campaigns online.
                      </span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="bg-primary text-white p-1 rounded-full mt-1">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="text-lg">
                        <strong className="text-primary">Community Outreach:</strong> Facilitate youth-centered
                        policy dialogues.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* WhatsApp Community CTA */}
                <div className="lg:col-span-2 bg-primary text-white p-10 rounded-3xl flex flex-col justify-center items-center text-center shadow-xl">
                  <div className="bg-white/20 p-4 rounded-full mb-6">
                    <MessageCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Join the Community</h3>
                  <p className="mb-8 opacity-90 text-lg">
                    Connect with fellow advocates and get real-time updates via our WhatsApp group.
                  </p>
                  <a 
                    href="https://chat.whatsapp.com/IX5atzce9Nn06d0nXesjwU" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-white text-primary font-bold py-4 px-8 rounded-xl hover:bg-orange-50 transition-colors flex items-center justify-center gap-3 shadow-lg"
                  >
                    Join GMI Community
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}