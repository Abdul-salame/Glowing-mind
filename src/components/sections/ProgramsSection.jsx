
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; 

export default function ProgramsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  //  expanded card
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const objectives = [
    {
      title: "Youth Empowerment & Employability",
      image: "/images/programs/program3.jpg",
      shortDesc: "Strategically addressing youth unemployment by equipping young graduates with 21st-century skills.",
      longDesc: "Through our Graduate Employability Program (GEP), we provide intensive soft-skills training, professional mentorship, and internship placements. We bridge the gap between academic learning and the practical demands of the global labor market, ensuring African youth are competitive and work-ready."
    },
    {
      title: "Education & Digital Inclusion",
      image: "/images/programs/program1.jpg",
      shortDesc: "Bridging the digital divide through targeted literacy and technology access programs.",
      longDesc: "We focus on ensuring underserved youth have the tools to thrive in the digital economy. This includes coding bootcamps, AI transition workshops, and providing digital infrastructure to remote communities to ensure equitable access to global opportunities."
    },
    {
      title: "Community Development & Leadership",
      image: "/images/programs/program2.jpg",
      shortDesc: "Fostering resilient communities through civic education and leadership training.",
      longDesc: "We empower local youth to lead sustainable social change through our Young Civic and Community Influencers Program (YCCIP). By blending climate advocacy with policy influence training, we help youth identify and solve community-specific challenges in real-time."
    },
  ];

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="relative bg-blue-900 py-24 overflow-hidden">
      {/* Decorative Top Shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Strategic Objectives</h2>
          <p className="text-blue-100 text-lg">
            Our work is guided by core objectives designed to foster sustainable human development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {objectives.map((obj, index) => (
            <div
              key={index}
              className={`group min-h-[450px] [perspective:1000px] transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-full w-full rounded-2xl shadow-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
                  <img src={obj.image} alt={obj.title} className="h-full w-full rounded-2xl object-cover brightness-75" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent rounded-2xl" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white leading-tight">{obj.title}</h3>
                    <p className="text-orange-400 text-sm font-bold mt-2 uppercase tracking-wider">Hover to explore →</p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-white p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col overflow-y-auto">
                  <div className="w-16 h-1 bg-orange-500 mb-4 shrink-0" />
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{obj.title}</h3>
                  
                  <div className="flex-grow">
                    <p className="text-gray-700 text-sm leading-relaxed mb-2">
                      {obj.shortDesc}
                    </p>
                    
                    {/* Collapsible Content */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedIndex === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <p className="text-gray-600 text-xs leading-relaxed pt-2 border-t border-gray-100">
                        {obj.longDesc}
                      </p>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleToggle(index)}
                    className="mt-4 flex items-center justify-center gap-2 w-full py-2 bg-blue-900 text-white rounded-lg text-xs font-semibold hover:bg-orange-600 transition-colors"
                  >
                    {expandedIndex === index ? (
                      <>Show Less <ChevronUp size={14}/></>
                    ) : (
                      <>Learn More <ChevronDown size={14}/></>
                    )}
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}