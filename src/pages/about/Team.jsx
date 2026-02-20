
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../../components/layout/Footer";

import abdullahi from "../../assets/images/team/abdullahi-bala.jpg";
import bello from "../../assets/images/team/bello-lateef.jpg";
import samirah from "../../assets/images/team/samirah-bello.jpg";
import ibrahim from "../../assets/images/team/ibrahim-jimoh.jpg";

import shamsudeen from "../../assets/images/team/shamsudeen-gidado.jpg";
import hamdalat from "../../assets/images/team/hamdalat-yusuf.jpg";
import abdulbasit from "../../assets/images/team/abdulbasit-abdulrazak.jpg";
import iradatullah from "../../assets/images/team/iradatullah-yakub.jpg";
import sakeenah from "../../assets/images/team/sakeenah-ibrahim.jpg";

export default function Team() {
  const [activeMember, setActiveMember] = useState(null);
  /* OUR FACULTY STATE COMMENTED OUT
  const [activeFilter, setActiveFilter] = useState("All");
  */

  const leadership = [
    {
      name: "Prof. Abdullahi Bala",
      role: "Board Chairman",
      image: abdullahi,
      bio: `Professor Abdullahi Bala is a distinguished academic...`, // truncated for brevity
    },
    {
      name: "Mr. Bello Lateef",
      role: "Board Member",
      image: bello,
      bio: `Lateef Bello Adekunle is an experienced international...`,
    },
    {
      name: "Mrs. Samirah Bello",
      role: "Board Member",
      image: samirah,
      bio: `Samirah Bello is an agribusiness leader...`,
    },
    {
      name: "Mr. Ibrahim Jimoh",
      role: "Board Member",
      image: ibrahim,
      bio: `Ibrahim Jimoh is a seasoned software engineer...`,
    },
    {
      name: "Mr. Shamsudeen Abdulrazak",
      role: "Board Secretary",
      image: shamsudeen,
      bio: `SHAMSUDEEN ABDULRAZAK – EXECUTIVE DIRECTOR...`,
    },
  ];

  const keyStaff = [
    {
      name: "Shamsudeen Abdulrazak",
      role: "Executive Director",
      image: shamsudeen,
      bio: `Shamsudeen is a Social Entrepreneur...`,
    },
    {
      name: "Hamdalat Yusuf",
      role: "Operations Manager",
      image: hamdalat,
      bio: `Hamdalat Ayoola Yusuf is the Head of Operations...`,
    },
    {
      name: "Abdulbasit Abdulrazak",
      role: "Policy and Research Lead",
      image: abdulbasit,
      bio: `I am a research-driven pharmaceutical professional...`,
    },
    {
      name: "Iradatullah Yakub",
      role: "Communication Manager",
      image: iradatullah,
      bio: `Iradatullah Yakub is the Communication Lead...`,
    },
    {
      name: "Sakeenah Ibrahim",
      role: "Program Manager",
      image: sakeenah,
      bio: `Sakeenah Ibrahim is the Program Manager...`,
    },
  ];

  /* OUR FACULTY DATA COMMENTED OUT
  const faculty = [
    { name: "Chytwo Ola", role: "Faculty Member", category: "Employability", image: null },
    ...
  ];

  const filters = ["All", "Employability", "Technology", "Governance", "Climate", "Entrepreneurship", "Leadership"];

  const filteredFaculty = activeFilter === "All" 
    ? faculty 
    : faculty.filter((f) => f.category === activeFilter);
  */

  return (
    <div className="pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-4xl font-extrabold text-blue-950">Our Team</h1>
          <p className="text-gray-600 mt-2">The leadership and brains behind our mission.</p>
        </motion.div>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-8 border-l-4 border-blue-600 pl-4">Board of Directors</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {leadership.map((member) => (
              <TeamCard key={member.name} member={member} onClick={() => setActiveMember(member)} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-8 border-l-4 border-blue-600 pl-4">Key Staff</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {keyStaff.map((member) => (
              <TeamCard key={member.name} member={member} onClick={() => setActiveMember(member)} />
            ))}
          </div>
        </section>

        {/* OUR FACULTY SECTION COMMENTED OUT 
        <section className="bg-blue-50 p-10 rounded-3xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Faculty</h2>
          <p className="text-gray-700 max-w-3xl mb-8">
            Our faculty comprises over 40 seasoned professionals delivering hands-on, practice-driven training across Nigeria.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === filter ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-600 hover:bg-blue-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredFaculty.map((member) => (
                <motion.div
                  key={member.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white p-4 rounded-xl shadow-sm text-center"
                >
                  <div className="h-40 w-40 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-gray-400">Photo</div>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-xs text-blue-600 uppercase tracking-wider">{member.category}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
        */}
      </div>

      <AnimatePresence>
        {activeMember && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6 backdrop-blur-sm"
            onClick={() => setActiveMember(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white max-w-2xl w-full rounded-3xl p-8 max-h-[80vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <img src={activeMember.image} className="w-32 h-32 rounded-2xl object-cover" alt="" />
                <div>
                  <h2 className="text-3xl font-bold text-blue-950">{activeMember.name}</h2>
                  <p className="text-blue-600 font-bold">{activeMember.role}</p>
                </div>
              </div>
              <div className="prose text-gray-700">
                <p className="whitespace-pre-line leading-relaxed">{activeMember.bio || "Full profile coming soon."}</p>
              </div>
              <button
                onClick={() => setActiveMember(null)}
                className="mt-8 w-full py-3 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}

function TeamCard({ member, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm cursor-pointer group"
      onClick={onClick}
    >
      <div className="h-64 bg-gray-200 overflow-hidden">
        {member.image ? (
          <img src={member.image} alt={member.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-gray-400">No Image</div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-900 line-clamp-1">{member.name}</h3>
        <p className="text-sm text-blue-600 font-medium">{member.role}</p>
      </div>
    </motion.div>
  );
}