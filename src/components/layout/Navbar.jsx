
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); 
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null); 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuData = [
    {
      title: "About Us",
      id: "about",
      items: [
        { label: "Our Identity & History", to: "/about/identity" },
        { label: "Why We Exist", to: "/about/why-we-exist" },
        { label: "Vision & Mission", to: "/about/vision-mission" },
        { label: "Our Team & Faculty", to: "/about/team" },
        { label: "Governance Structure", to: "/about/governance" },
      ],
    },
    {
      title: "What We Do",
      id: "whatwedo",
      items: [
        { label: "Thematic Areas", to: "/what-we-do/thematic-areas" },
        { label: "Approach & Methodology", to: "/what-we-do/approach-methodology" },
        { label: "Core Competencies", to: "/what-we-do/core-competencies" },
        { label: "SDG Alignment", to: "/what-we-do/sdg-alignment" },
      ],
    },
    {
      title: "Programs & Innovation",
      id: "programs",
      items: [
        { label: "Graduate Employability (GEP)", to: "/programs/gep" },
        { label: "Student Entrepreneurship (SLEP)", to: "/programs/slep" },
        { label: "Project Umtazi", to: "/programs/umtazi" },
        { label: "Young Climate Entrepreneurs", to: "/programs/climate" },
        { label: "AI Transition Program", to: "/programs/ai" },
        { label: "Glowing Minds Policy Lab", to: "/programs/policy-lab" },
        { label: "Glowing Minds Hub (Suleja)", to: "/programs/hub" },
        { label: "Young Civic Influencers (YCCIP)", to: "/programs/yccip" },
      ],
    },
    {
      title: "Impact & Resources",
      id: "impact",
      items: [
        { label: "Success Stories", to: "/impact/success-stories" },
        { label: "Knowledge Products", to: "/impact/knowledge-products" },
        { label: "GMI in the News", to: "/impact/news" },
        { label: "Annual Events (FFC)", to: "/impact/events" },
        { label: "Awards & Recognitions", to: "/impact/awards" },
      ],
    },
    {
      title: "Transparency",
      id: "transparency",
      items: [
        { label: "Legal & Compliance", to: "/transparency/legal" },
        { label: "Organizational Policies", to: "/transparency/policies" },
        { label: "GMI Partnerships", to: "/transparency/partnerships" },
        { label: "Financial Highlights", to: "/transparency/financials" },
      ],
    },
    {
      title: "Get Involved",
      id: "getinvolved",
      items: [
        { label: "Donate", to: "/get-involved/donate" },
        { label: "Volunteer/Mentor", to: "/get-involved/volunteer" },
        { label: "Advocate", to: "/get-involved/advocate" },
        { label: "Request SIWES/NYSC", to: "/get-involved/siwes" },
        { label: "Hire Talent", to: "/get-involved/hire-talent" },
        { label: "Join Community", to: "/get-involved/community" },
      ],
    },
  ];

  const toggleMobileSubmenu = (id) => {
    setActiveMobileSubmenu(activeMobileSubmenu === id ? null : id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? "bg-white shadow-md text-gray-800" : "bg-blue-900 text-white"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <img
            src="/images/logo.png"
            alt="Logo"
            className={`h-10 md:h-12 transition ${scrolled || mobileOpen ? "" : "brightness-0 invert"}`}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-xs xl:text-sm font-medium">
          <NavItem to="/" text="Home" />
          {menuData.map((menu) => (
            <Dropdown
              key={menu.id}
              title={menu.title}
              open={openMenu === menu.id}
              onOpen={() => setOpenMenu(menu.id)}
              onClose={() => setOpenMenu(null)}
              items={menu.items}
            />
          ))}
          <NavItem to="/contact" text="Contact" />
          <NavItem to="/blog" text="Blog" />
        </ul>

        {/* Hamburger Button */}
        <button 
          className="lg:hidden p-2 focus:outline-none" 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white text-gray-800 ${
          mobileOpen ? "max-height-screen opacity-100 border-t" : "max-height-0 opacity-0 pointer-events-none"
        }`}
        style={{ maxHeight: mobileOpen ? "calc(100vh - 70px)" : "0px", overflowY: "auto" }}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          <Link to="/" className="text-lg font-semibold border-b pb-2" onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          {menuData.map((menu) => (
            <div key={menu.id} className="border-b pb-2">
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-lg"
                onClick={() => toggleMobileSubmenu(menu.id)}
              >
                {menu.title}
                <span className={`transform transition-transform ${activeMobileSubmenu === menu.id ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              {activeMobileSubmenu === menu.id && (
                <div className="mt-3 ml-4 flex flex-col gap-3 border-l-2 border-blue-100 pl-4">
                  {menu.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="text-gray-600 hover:text-blue-600"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link to="/contact" className="text-lg font-semibold border-b pb-2" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
          <Link to="/blog" className="text-lg font-semibold border-b pb-2" onClick={() => setMobileOpen(false)}>
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}


function NavItem({ to, text }) {
  return (
    <li>
      <Link to={to} className="hover:text-blue-600 transition-colors whitespace-nowrap">
        {text}
      </Link>
    </li>
  );
}

function Dropdown({ title, items, open, onOpen, onClose }) {
  return (
    <li className="relative py-2" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <span className="hover:text-blue-600 transition-colors flex items-center cursor-pointer">
        {title} <span className="ml-1 text-[10px]">▼</span>
      </span>
      {open && (
        <div className="absolute top-full left-0 bg-white text-gray-800 rounded-md shadow-xl min-w-[260px] py-3 border-t-2 border-blue-600">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-5 py-2.5 hover:bg-blue-50 hover:text-blue-700 text-sm"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}