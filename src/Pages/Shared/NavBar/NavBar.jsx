import { useState } from "react";
import { Menu, X, Code } from "lucide-react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Educational Qualification" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-3">
          <Code className="w-8 h-8 text-green-400" />
          <span className="text-2xl font-bold">Maksudul Haque</span>
        </div>

        {/* Large Screen Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}               // Track active section
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="text-green-400 font-semibold border-b-2 border-green-400"
              className="cursor-pointer transition hover:text-green-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X className="w-8 h-8 text-white" />
            ) : (
              <Menu className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-900 text-center py-4">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="text-green-400 font-semibold border-b-2 border-green-400"
              className="block py-2 cursor-pointer transition hover:text-green-400"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
