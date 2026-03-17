
import { motion } from "framer-motion";
import { page, fadeUp, stagger } from "../../animations/variants";
import { Building2, Landmark, Users2, Handshake } from "lucide-react";
import Footer from "../../components/layout/Footer";

export default function Partnerships() {
  const categories = [
    {
      title: "Donors",
      icon: <Handshake className="w-6 h-6" />,
      partners: [
        { name: "Gidan Yanci", logo: "/images/logos/gidan-yanci.jpeg" },
        { name: "WITNESS", logo: "/images/logos/witness.jpeg" },
        { name: "NYFF", logo: "/images/logos/nyff.png" },
      ]
    },
    {
      title: "Partners",
      icon: <Users2 className="w-6 h-6" />,
      partners: [
        { name: "Corestream Nigeria", logo: "/images/logos/corestream.jpeg" },
        { name: "GIRLS GET EQUAL NIGERIA", logo: "/images/logos/gge.jpeg" },
        { name: "Startup Campus Nile", logo: "/images/logos/startup-campus-nile.jpeg" },
        { name: "University of Abuja SUG", logo: "/images/logos/uiabuja-sug.jpeg" },
        { name: "Skills Outside School Foundation", logo: "/images/logos/sosf.jpeg" },
        { name: "Roadrunner", logo: "/images/logos/roadrunner.png" },
      ]
    },
    {
      title: "Government",
      icon: <Landmark className="w-6 h-6" />,
      partners: [
        { name: "Aluta Continual", logo: "/images/logos/aluta-continual.jpeg" },
        { name: "Nigerian Union of Journalists, Niger State Chapter.", logo: "/images/logos/nuj-niger-state.jpeg" },
        { name: "Window on America", logo: "/images/logos/window-on-america.jpeg" },
        { name: "ECOCYKLE FOUNDATION", logo: "/images/logos/ecocycle.jpeg" },
        { name: "RMRDC", logo: "/images/logos/rmrdc.jpeg" },
        { name: "Niger State Ministry of Youth", logo: "/images/logos/niger-state-youth.jpeg" },
      ]
    },
    {
      title: "Alliances and Memberships",
      icon: <Building2 className="w-6 h-6" />,
      partners: [
        { name: "Nigeria Network of NGOs", logo: "/images/logos/nnngo.jpeg" },
        { name: "Catalyst Now Nigerian Chapter", logo: "/images/logos/catalyst-now-nigerian-chapter.jpeg" },
        { name: "CTIN WEST AFRICA", logo: "/images/logos/ctin-west-africa.jpeg" },
        { name: "Nigeria ESO Collaborative", logo: "/images/logos/eso.jpeg" },
      ]
    }
  ];

  return (
    <>
      <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="show">
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-primary mb-12">
              GMI Partnerships & Alliances
            </motion.h1>

            {/* Segmented Partnerships Grid */}
            <div className="space-y-16">
              {categories.map((cat, idx) => (
                <motion.div key={idx} variants={fadeUp} className="w-full">
                  {/* Header Section - Counter Removed */}
                  <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-4">
                    <div className="p-3 bg-blue-50 text-primary rounded-xl">
                      {cat.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-primary uppercase tracking-wide">
                      {cat.title}
                    </h2>
                  </div>
                  
                  {/* Logo Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {cat.partners.map((partner, pIdx) => (
                      <div 
                        key={pIdx} 
                        className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center group"
                      >
                        <div className="h-20 w-full flex items-center justify-center mb-4">
                          <img 
                            src={partner.logo} 
                            alt={partner.name}
                            className="max-h-full max-w-full object-contain transition-all duration-300"
                            onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Logo"; }}
                          />
                        </div>
                        <p className="text-xs font-semibold text-gray-500 text-center uppercase tracking-tight">
                          {partner.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Partnership CTA */}
            <motion.div variants={fadeUp} className="bg-primary text-white p-12 rounded-3xl mt-24 text-center">
              <h3 className="text-3xl font-bold mb-6">Partner With Us</h3>
              <p className="opacity-90 mb-10 max-w-2xl mx-auto text-lg">
                Join our network of donors, government agencies, and strategic partners 
                working to empower African youth.
              </p>
              <button className="bg-orange-500 text-white font-bold py-4 px-10 rounded-full hover:bg-orange-600 transition-all shadow-xl">
                Start a Collaboration
              </button>
            </motion.div>

          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}