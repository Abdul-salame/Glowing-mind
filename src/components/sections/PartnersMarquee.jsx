
const partners = [
  "/images/partners/partner1.jpg",
  "/images/partners/partner2.jpg",
  "/images/partners/partner3.jpg",
  "/images/partners/partner4.jpg",
  "/images/partners/partner5.jpg",
  "/images/partners/partner6.jpg",
  "/images/partners/partner7.jpg",
];

export default function PartnersMarquee() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-950">
          Partners & Sponsors
        </h2>
        <p className="text-gray-600 mt-2">
          Organizations supporting our mission across Africa
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-16">
          {[...partners, ...partners].map((logo, index) => (
            <div key={index} className="flex items-center">
              <img
                src={logo}
                alt="Partner Logo"
                className="h-16 md:h-20 object-contain hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
