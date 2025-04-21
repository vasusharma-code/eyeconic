import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Logo from '../ui/Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li><a href="#home" className="text-navy-900 hover:text-teal-500 font-medium transition-colors">Home</a></li>
            <li><a href="#about" className="text-navy-900 hover:text-teal-500 font-medium transition-colors">About</a></li>
            <li><a href="#programs" className="text-navy-900 hover:text-teal-500 font-medium transition-colors">Programs</a></li>
            <li><a href="#results" className="text-navy-900 hover:text-teal-500 font-medium transition-colors">Results</a></li>
            <li><a href="#contact" className="text-navy-900 hover:text-teal-500 font-medium transition-colors">Contact</a></li>
          </ul>
          
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-teal-500 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-teal-500 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-teal-500 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-teal-500 transition-colors">
              <Twitter size={18} />
            </a>
          </div>
          
          <a href="#contact" className="btn btn-primary">Book a Call</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-navy-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li><a href="#home" className="block text-navy-900 hover:text-teal-500 font-medium transition-colors">Home</a></li>
              <li><a href="#about" className="block text-navy-900 hover:text-teal-500 font-medium transition-colors">About</a></li>
              <li><a href="#programs" className="block text-navy-900 hover:text-teal-500 font-medium transition-colors">Programs</a></li>
              <li><a href="#results" className="block text-navy-900 hover:text-teal-500 font-medium transition-colors">Results</a></li>
              <li><a href="#contact" className="block text-navy-900 hover:text-teal-500 font-medium transition-colors">Contact</a></li>
            </ul>
            
            <div className="mt-6 flex items-center space-x-6">
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-teal-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-teal-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-teal-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-teal-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            
            <a href="#contact" className="mt-6 btn btn-primary w-full text-center">Book a Call</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;