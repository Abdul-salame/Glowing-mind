
import { useEffect, useRef, useState } from "react";

const logos = [
  "/images/news/Guardian.png",
  "/images/news/punch.png",
  "/images/news/Vanguard.png",
  "/images/news/businessday.png",
  "/images/news/TheCable.png",
  "/images/news/unesco.png",
  "/images/news/Leadership.png",
  "/images/news/MIT.png",
  "/images/news/BLUE.png",
  "/images/news/PULSE.png",
];

export default function NewsMentions() {
  const uniqueLogos = [...new Set(logos)];
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-14 bg-gray-50 overflow-hidden transition-all duration-100
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-950">
          GMI in the News
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
       
        
        <div className="flex w-max animate-marquee gap-16 md:gap-20 hover:[animation-play-state:paused]">
          {[...uniqueLogos, ...uniqueLogos].map((logo, index) => (
            <div key={index} className="flex items-center">
              <img
                src={logo}
                alt="Media Logo"
                className="h-12 md:h-16 object-contain  hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}