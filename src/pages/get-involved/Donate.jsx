
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { page, fadeUp, stagger } from "../../animations/variants";
import Footer from "../../components/layout/Footer";

export default function Donate() {
  const navigate = useNavigate();

  return (
    <>
      <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.h1 variants={fadeUp} className="text-4xl font-bold text-blue-800 mb-8">
              Invest in the Future of African Youth
            </motion.h1>

            <div className="relative rounded-xl overflow-hidden mb-10 h-72 w-full">
              <motion.img
                variants={fadeUp}
                src="/images/GetInvolved/donate.jpg"
                className="h-full w-full object-cover"
                alt="Donate to GMI"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <motion.div
              variants={fadeUp}
              className="max-w-4xl text-gray-700 space-y-6"
            >
              <p className="text-lg leading-relaxed">
                Your support helps <strong>Glowing Minds Initiatives</strong> address
                youth unemployment, skills mismatch, and limited access to green
                opportunities. Every donation empowers young people—especially
                women and persons with disabilities—to thrive economically and
                socially.
              </p>

              <h3 className="text-2xl font-semibold text-blue-800">
                How Your Donation Makes an Impact:
              </h3>

              <ul className="grid md:grid-cols-2 gap-4">
                <li className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-800">
                  <strong>Employability & Skills:</strong> Supporting GEP to help
                  graduates secure jobs.
                </li>
                <li className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-800">
                  <strong>Campus Entrepreneurship:</strong> Funding student startups
                  through SLEP.
                </li>
                <li className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-800">
                  <strong>Climate Action:</strong> Empowering green entrepreneurs.
                </li>
                <li className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-blue-800">
                  <strong>Policy Advocacy:</strong> Strengthening youth-led policy
                  innovation.
                </li>
              </ul>

              {/* Simplified Bank Details Section (Point N) */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 my-10 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-6 border-b pb-4">
                  Bank Transfer Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Bank</span>
                    <p className="text-lg font-bold text-blue-800 uppercase">Zenith Bank</p>
                  </div>

                  <div>
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Account Name</span>
                    <p className="text-lg font-bold text-gray-800 uppercase">
                      Glowing Minds Initiatives for Human Development
                    </p>
                  </div>

                  <div>
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Account Number (NGN)</span>
                    <p className="text-3xl font-mono font-extrabold text-blue-900 tracking-tighter">
                      1225514013
                    </p>
                  </div>
                </div>
              </div>

              <p className="italic text-sm text-gray-500 text-center">
                GMI operates a transparent and accountable financial management
                system. All funds are managed in line with approved budgets and
                internal controls.
              </p>
            </motion.div>

            {/* Donate Now Button */}
            <motion.div variants={fadeUp} className="mt-16 text-center">
              <button
                onClick={() => navigate("/get-involved/donate/form")}
                className="px-12 py-4 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Go to Donation Form
              </button>
            </motion.div>

          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}