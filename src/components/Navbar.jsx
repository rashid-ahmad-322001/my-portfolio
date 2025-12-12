import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative">
        <h1 className="text-2xl font-bold">Rashid Shah</h1>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Desktop Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden md:block p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
        >
          <CiMenuFries className="text-2xl" />
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2"
            >
              <RxCross1 className="text-2xl" />
            </button>
            
            {/* Mobile Navigation Links */}
            <ul className="flex flex-col space-y-4 p-6 pt-12">
              <li><a href="#hero" className="hover:text-blue-500 block py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#about" className="hover:text-blue-500 block py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
              <li><a href="#projects" className="hover:text-blue-500 block py-2" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-500 block py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
            </ul>

            {/* Mobile Dark Mode Toggle */}
            <div className="p-6 pt-0">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
