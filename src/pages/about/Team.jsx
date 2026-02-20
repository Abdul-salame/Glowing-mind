
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../../components/layout/Footer";


export default function Team() {
  const [activeMember, setActiveMember] = useState(null);

  const leadership = [
    {
      name: "Prof. Abdullahi Bala",
      role: "Board Chairman",
      image: "/images/team/abdullahi-bala.jpg",
      bio: `PROF ABDULLAHI BALA – BOARD CHAIRMAN 
Professor Abdullahi Bala is a distinguished academic and higher education administrator from Suleja, Niger State, Nigeria. He holds a First Class Bachelor of Agriculture degree from Ahmadu Bello University, Zaria, an MSc in Soil Chemistry and Fertility from the University of Reading, and a PhD in Soil Microbiology from the University of London, both supported by Commonwealth scholarships.
Appointed Pioneer Vice-Chancellor of Phoenix University Agwada in October 2023, he previously served as Vice-Chancellor of the Federal University of Technology, Minna, where he held several senior leadership roles over three decades. His tenure was marked by expanded academic programmes, improved research output, enhanced student support, and strong institutional rankings.
Professor Bala is a Fellow of the Soil Science Society of Nigeria and the Nigerian Institution of Mechanical Engineers. He currently serves as Deputy Chair, Board of Directors, Diamond Development Organisation (DDI); Chair, Board of Glowing Minds Initiatives for Human Development; and Co-Chair, Board of the International Centre for Emerging Technologies. He holds the traditional titles of Walin Zazzau Suleja and Jagaban Ilimin Bosso.
`,
    },
    {
      name: "Mr. Bello Lateef",
      role: "Board Member",
      image: "/images/team/bello-lateef.jpg",
      bio: `MR BELLO LATEEF – BOARD MEMBER 
Lateef Bello Adekunle is an experienced international development professional, nonprofit leader, and fundraising specialist. He serves as a principal at Grithworth LLC, where he advances philanthropic strategy, resource mobilization, and global development initiatives. Lateef combines over 15 years of experience in project management, civil engineering, and social impact work with academic training that includes studies at the Indiana University Lilly Family School of Philanthropy. 
His work focuses on empowering communities through sustainable programs, grant development, and advocacy for equitable resource distribution. Prior to his current role, he has engaged in diverse roles spanning international development campaigns, social justice advocacy, and capacity-building for nonprofit organizations. Lateef is known for bridging technical expertise and strategic fundraising to support mission-driven organizations and deliver measurable social impact.
`,
    },
    {
      name: "Mrs. Samirah Bello",
      role: "Board Member",
      image: "/images/team/samirah-bello.jpg",
      bio: `MRS SAMIRAH BELLO – BOARD MEMBER 
Samirah is a management and business professional with over seven years’ experience in agribusiness and eight years in community development. She currently leads partnerships at ThriveAgric, ensuring that agricultural value chains across Africa have access to operational and financial resources while creating sustainable impact through the SDG lens. Her work has empowered hundreds of thousands of smallholder farmers by improving access to finance, technology, and productivity through collaborations with national and international stakeholders.
She also provides consulting services, serves on several NGO and youth organization boards, and has driven projects in education, children’s rights, domestic and sexual violence prevention, women and youth empowerment, and governance.
Samirah holds a master’s degree in Globalisation, Business, and Development from the University of Sussex (distinction), and is a Chevening Scholar, Mandela Washington Fellow, One Young World Ambassador, and YALI RLC fellow. She is committed to generating social, economic, and environmental impact in business to drive sustainability and growth.
`,
    },
    {
      name: "Mr. Ibrahim Jimoh",
      role: "Board Member",
      image: "/images/team/ibrahim-jimoh.jpg",
      bio: `MR IBRAHIM JIMOH – BOARD MEMBER 
Ibrahim Jimoh is a seasoned software engineer and tech entrepreneur with a BSc in Information Technology from the Chartered Institute for IT, London, and a PGD in System Analysis. With nearly a decade of experience, he specializes in ERP software design, system automation, AI solutions, and blockchain development for government agencies, private organizations, and startups.
He is the founder of Code4Africa, a social initiative providing coding education to African children, having trained over 2,000 individuals across four countries. As co-founder of a leading enterprise software and business automation company, he has led teams that launched three successful startups in EdTech (CoreCert), HealthTech (WeCare247), and FinTech (CorePay).
An active member of the British Computer Society, the Chartered Institute for IT, and ICM UK, Jimoh also serves as a startup evaluator for the Federal Ministry of Humanitarian Affairs and consultant for the Ministry of Culture and Tourism. He is driven by continuous learning, innovation, and social impact.
`,
    },
    {
      name: "Mr. Shamsudeen Abdulrazak",
      role: "Board Secretary",
      image: "/images/team/shamsudeen-gidado.jpg",
      bio: ` Shamsudeen is a Social Entrepreneur and the Executive Director of Glowing Minds Initiatives for Human Development; a nonprofit dedicated to reducing unemployment and improving employability among young people, with a team passionate about making a positive impact on Employability, Climate Change, Gender Inclusion and Civic Engagement.
Shamsudeen holds a Masters of Business Administration (Humanitarian) with specialization in Social Entrepreneurship from Roxbourg Institute of Social Entrepreneurship, Vaud Switzerland. A Bachelor degree in Library and Information Technology from Federal University of Technology, Minna. He is an Alumnus from Fate Foundation and a 2021 fellow of the Friedrich Ebert Stiftung Nigeria Open Minds Young Voices Network. He is 2021 Associate of Initiative for Revival and Sustainability - (IRSD).
Shamsudeen has extensive knowledge of Leadership, Youth Empowerment, Development, Communications, Media, Business Development and Organizational Development.
`,
    },
  ];

  const keyStaff = [
    {
      name: "Shamsudeen Abdulrazak",
      role: "Executive Director",
      image: "/images/team/shamsudeen-gidado.jpg",
      bio: `Shamsudeen is a Social Entrepreneur and the Executive Director of Glowing Minds Initiatives for Human Development; a nonprofit dedicated to reducing unemployment and improving employability among young people, with a team passionate about making a positive impact on Employability, Climate Change, Gender Inclusion and Civic Engagement.
Shamsudeen holds a Masters of Business Administration (Humanitarian) with specialization in Social Entrepreneurship from Roxbourg Institute of Social Entrepreneurship, Vaud Switzerland. A Bachelor degree in Library and Information Technology from Federal University of Technology, Minna. He is an Alumnus from Fate Foundation and a 2021 fellow of the Friedrich Ebert Stiftung Nigeria Open Minds Young Voices Network. He is 2021 Associate of Initiative for Revival and Sustainability - (IRSD).
Shamsudeen has extensive knowledge of Leadership, Youth Empowerment, Development, Communications, Media, Business Development and Organizational Development.
`,
    },
    {
      name: "Hamdalat Yusuf",
      role: "Operations Manager",
      image: "/images/team/hamdalat-yusuf.jpg",
      bio: `Amdalat Ayoola Yusuf is the Head of Operations at Glowing Minds Initiatives for Human Development, where she plays a key role in driving organizational efficiency and program implementation. She is also a committed serial volunteer with a strong passion for community development and human-centered initiatives.`,
    },
    {
      name: "Abdulbasit Abdulrazak",
      role: "Policy and Research Lead",
      image: "/images/team/abdulbasit-abdulrazak.jpg",
      bio: `I am a research-driven pharmaceutical professional passionate about advancing Youth Development in Nigeria and Africa.

Complementing my research background, I possess growing software engineering and digital innovation skills that support data-driven health solutions, with skills in web development (HTML, CSS, JavaScript), Git/GitHub, AI tools for research productivity, and graphic design for scientific communication and advocacy.

Beyond research, I am committed to youth engagement, gender inclusion, and stakeholder-driven health advocacy. I am interested in collaborations that drive pharmaceutical innovation, digital health solutions, and equitable access to healthcare.`,
    },
    {
      name: "Iradatullah Yakub",
      role: "Communication Manager",
      image: "/images/team/iradatuallah-yakub.jpg",
      bio: `Iradatullah Yakub is the Communication Lead and Content Strategist at Glowing Minds Initiatives, where she develops and manages Communication and content Strategy of the Organisation that supports accessible, inclusive, and impactful Youth Programming. Her work combines communication, digital storytelling, and Youth-centered approaches to amplify the organisation’s mission.`,
    },
    {
      name: "Sakeenah Ibrahim",
      role: "Program Manager",
      image: "/images/team/sakeenah-ibrahim.jpg",
      bio: `Sakeenah Ibrahim is the Program Manager at Glowing Minds Initiatives for Human Development`,
    },
  ];

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
                <img src={activeMember.image} className="w-32 h-32 rounded-2xl object-cover" alt={activeMember.name} />
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
          <img 
            src={member.image} 
            alt={member.name} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
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