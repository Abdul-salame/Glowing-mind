
const partners = [
  "/images/partners/partner1.jpg",
  "/images/partners/partner2.jpg",
  "/images/partners/partner3.jpg",
  "/images/partners/partner4.jpg",
  "/images/partners/partner5.jpg",
  "/images/partners/partner6.jpg",
  "/images/partners/partner7.jpg",
  "/images/logos/witness.jpeg",
  "/images/logos/roadrunner.png",
  "/images/logos/corestream.jpeg",
  "/images/logos/ecocycle.jpeg",
  "/images/logos/eso.jpeg",
  "/images/logos/aluta-continual.jpeg",
  "/images/logos/catalyst-now-nigerian-chapter.jpeg",
  "/images/logos/ctin-west-africa.jpeg",
  "/images/logos/gge.jpeg",
  "/images/logos/gidan-yanci.jpeg",
  "/images/logos/niger-state-youth.jpeg",
  "/images/logos/nnngo.jpeg",
  "/images/logos/nuj-niger-state.jpeg",
  "/images/logos/nyff.png",
  "/images/logos/rmrdc.jpeg",
];

export default function PartnersMarquee() {
  const uniquePartners = [...new Set(partners)];

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
          {[...uniquePartners, ...uniquePartners].map((logo, index) => (
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
