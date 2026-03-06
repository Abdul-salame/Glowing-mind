
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

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-12 md:grid-cols-3">
        {/* LEFT COLUMN - ABOUT GMI */}
        <div>
          <img src="/images/logo.png" alt="GMI Logo" className="h-20 mb-6" />
          <p className="text-sm text-gray-200 leading-relaxed">
            Glowing Minds Initiatives for Human Development is a non-profit
            organization established in 2018 to address youth unemployment and
            unemployability through entrepreneurship, education, leadership
            development, climate advocacy, and civic engagement.
          </p>
          {/* Note: Award Column (certificates) has been removed per Point 18 */}
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex items-center gap-3 group">
              <FaHome className="text-blue-400 group-hover:text-white transition-colors" />
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li className="flex items-center gap-3 group">
              <FaInfoCircle className="text-blue-400 group-hover:text-white transition-colors" />
              <Link to="/about/identity" className="hover:text-white transition-colors">About Us</Link>
            </li>
            <li className="flex items-center gap-3 group">
              <FaUsers className="text-blue-400 group-hover:text-white transition-colors" />
              <Link to="/about/team" className="hover:text-white transition-colors">Our Team</Link>
            </li>
            <li className="flex items-center gap-3 group">
              <FaBullseye className="text-blue-400 group-hover:text-white transition-colors" />
              <Link to="/what-we-do/sdg-alignment" className="hover:text-white transition-colors">SDGs Focus</Link>
            </li>
            <li className="flex items-center gap-3 group">
              <FaBriefcase className="text-blue-400 group-hover:text-white transition-colors" />
              <Link to="/career" className="hover:text-white transition-colors">Careers</Link>
            </li>
            <li className="flex items-center gap-3 group">
              <FaBlog className="text-blue-400 group-hover:text-white transition-colors" />
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            </li>
            <li className="flex items-center gap-3 group">
              <FaEnvelopeOpenText className="text-blue-400 group-hover:text-white transition-colors" />
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN – CONTACT (Point 13) */}
        <div>
          <h3 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Contact Us</h3>
          
          <ul className="space-y-6 text-sm text-gray-200">
            {/* Abuja Address (Point 13) */}
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-blue-400 flex-shrink-0" />
              <div>
                <strong className="block text-white mb-1">Abuja Office:</strong>
                <span>Plot 404, Marcus Garvey Street, 5th Avenue, Gwarimpa, Abuja.</span>
              </div>
            </li>

            {/* Suleja Address */}
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-blue-400 flex-shrink-0" />
              <div>
                <strong className="block text-white mb-1">Niger State Office:</strong>
                <span>Behind House No 30, Franklin Street, PDP Quarters, Suleja – Niger State.</span>
              </div>
            </li>

            <li className="pt-2 space-y-3">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:info@glowingmindsinitiatives.org" className="hover:text-blue-400 transition-colors">
                  info@glowingmindsinitiatives.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400" />
                <a href="tel:+2348148451424" className="hover:text-blue-400 transition-colors">
                  +234 814 845 1424
                </a>
              </div>
            </li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { Icon: FaFacebookF, link: "https://www.facebook.com/glowingmindsinitiatives.org" },
              { Icon: FaTwitter, link: "https://www.twitter.com/glowing_minds" },
              { Icon: FaInstagram, link: "https://www.instagram.com/glowingmindsinitiatives.org" },
              { Icon: FaYoutube, link: "https://www.youtube.com/@GlowingMindsInitiatives" },
              { Icon: FaLinkedinIn, link: "https://www.linkedin.com/company/glowing-minds-initiatives/" },
              { Icon: FaTiktok, link: "https://www.tiktok.com/@glowing.minds.ini" },
              { Icon: FaSpotify, link: "https://spotify.com" } 
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300"
              >
                <social.Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-white/10 bg-blue-950/50">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-xs text-gray-400 tracking-wide">
          © 2026 GMI. All rights reserved | Powered by CorestreamNG
        </div>
      </div>
    </footer>
  );
}