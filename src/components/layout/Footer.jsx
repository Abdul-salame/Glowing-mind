import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok, 
  FaSpotify,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaBullseye,
  FaBriefcase,
  FaBlog,
  FaEnvelopeOpenText,
} from "react-icons/fa";

import { Link } from "react-router-dom";



const certificates = [
  "/images/certificates/cert1.png",
  "/images/certificates/cert2.png",
  "/images/certificates/cert3.png",
  "/images/certificates/cert4.png",
  "/images/certificates/cert5.png",
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-12 md:grid-cols-3">
        {/* LEFT COLUMN */}
        <div>
          <img src="/images/logo.png" alt="GMI Logo" className="h-20 mb-6" />

          <p className="text-sm text-gray-200 leading-relaxed">
            Glowing Minds Initiatives for Human Development is a non-profit
            organization established in 2018 to address youth unemployment and
            unemployability through entrepreneurship, education, leadership
            development, climate advocacy, and civic engagement.
          </p>

          {/* CERTIFICATES */}
          <div className="mt-6 grid grid-cols-3 sm:grid-cols-5 gap-4 items-center">
            {certificates.map((img, i) => (
              <div
                key={i}
                className="flex items-center justify-center bg-white rounded-md p-2"
              >
                <img
                  src={img}
                  alt="Certificate"
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>


        {/*  QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex items-center gap-3">
              <FaHome className="text-accent" />
              <Link to="/" className="hover:text-accent">Home</Link>
            </li>

            <li className="flex items-center gap-3">
              <FaInfoCircle className="text-accent" />
              <Link to="/about/identity" className="hover:text-accent">About</Link>
            </li>

            <li className="flex items-center gap-3">
              <FaUsers className="text-accent" />
              <Link to="/what-we-do/thematic-areas" className="hover:text-accent">
                Who We Are
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <FaUsers className="text-accent" />
              <Link to="/about/team" className="hover:text-accent">
                Our Team
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <FaBullseye className="text-accent" />
              <Link to="/what-we-do/sdg-alignment" className="hover:text-accent">
                SDGs Focus
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <FaBriefcase className="text-accent" />
              <Link to="/career" className="hover:text-accent">
                Careers
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <FaBlog className="text-accent" />
              <Link to="/blog" className="hover:text-accent">
                Blog
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelopeOpenText className="text-accent" />
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN – CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

          <ul className="space-y-4 text-sm text-gray-200">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-accent" />
              <span>
                Behind House No 30, Franklin Street PDP Quarters,
                Suleja – Niger State.
              </span>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-accent" />
              <a
                href="mailto:info@glowingmindsinitiatives.org"
                className="hover:text-accent"
              >
                info@glowingmindsinitiatives.org
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-accent" />
              <a href="tel:+2348148451424" className="hover:text-accent">
                +234 814 845 1424
              </a>
            </li>
          </ul>

          {/* SOCIAL ICONS */}
<div className="flex flex-wrap gap-4 mt-6">
  {[
    { Icon: FaFacebookF, link: "https://www.facebook.com/glowingmindsinitiatives.org" },
    { Icon: FaTwitter, link: "https://www.twitter.com/glowing_minds" },
    { Icon: FaInstagram, link: "https://www.instagram.com/glowingmindsinitiatives.org" },
    { Icon: FaYoutube, link: "https://www.youtube.com/@GlowingMindsInitiatives" },
    { Icon: FaLinkedinIn, link: "https://www.linkedin.com/company/glowing-minds-initiatives/" },
    { Icon: FaTiktok, link: "https://www.tiktok.com/@glowing.minds.ini" },
    { Icon: FaSpotify, link: "https://open.spotify.com/episode/1qErvprjZ34feJTDbIkFJ4?si=OmqxBREHT2eZMGA3s7fWBw" } 
  ].map((social, i) => (
    <a
      key={i}
      href={social.link}
      target="_blank" 
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition"
    >
      <social.Icon size={18} />
    </a>
  ))}
</div>
          </div> 
        </div> 

      {/* BOTTOM FOOTER */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-300">
          © 2026 GMI. All rights reserved | Powered by CorestreamNG
        </div>
      </div>
    </footer>
  );
}
