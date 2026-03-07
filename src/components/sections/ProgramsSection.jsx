
import { useEffect, useRef, useState } from "react";

export default function ProgramsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

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
      description:
        "Strategically addressing youth unemployment by equipping young graduates and artisans with 21st-century employability skills, vocational mastery, and professional mentorship.",
    },
    {
      title: "Education & Digital Inclusion",
      image: "/images/programs/program1.jpg",
      description:
        "Bridging the digital divide through targeted literacy programs, ensuring underserved youth have the tools and knowledge to navigate and thrive in the global digital economy.",
    },
    {
      title: "Community Development & Leadership",
      image: "/images/programs/program2.jpg",
      description:
        "Fostering resilient communities through civic education, climate advocacy, and leadership training that empowers local youth to lead sustainable social change.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-blue-900 py-24 overflow-hidden"
    >
      {/* Decorative Top Shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-16 fill-white"
        >
          <path d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
                <div
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our Strategic Objectives
          </h2>
          <p className="text-blue-100 text-lg">
            Our work is guided by core objectives designed to foster sustainable 
            human development and systemic change across Nigeria.
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {objectives.map((obj, index) => (
            <div
              key={index}
              className={`group h-[400px] [perspective:1000px] transition-all duration-1000
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card Inner Container */}
              <div className="relative h-full w-full rounded-2xl shadow-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
                  <img
                    src={obj.image}
                    alt={obj.title}
                    className="h-full w-full rounded-2xl object-cover brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent rounded-2xl" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {obj.title}
                    </h3>
                    <p className="text-orange-400 text-sm font-bold mt-2 uppercase tracking-wider">
                      Hover to explore →
                    </p>
                  </div>
                </div>

                {/* The Side-Flip  */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-white p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-1 bg-orange-500 mb-6" />
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    {obj.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {obj.description}
                  </p>
                  <button className="mt-8 px-6 py-2 bg-blue-900 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors">
                    Learn More
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