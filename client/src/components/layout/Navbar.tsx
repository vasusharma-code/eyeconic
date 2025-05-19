import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoginModal from '../auth/LoginModal';
import SignupModal from '../auth/SignupModal';
import logo from '../../assets/Asset 1-Photoroom.jpg'; // <-- Add your logo file here

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const isLoggedIn = Boolean(localStorage.getItem('token'));

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
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-teal-700">
          <img src={logo} alt="Eyeconic Logo" className="h-8 w-8 object-contain" />
          <span>Eyeconic</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li><a href="#home" className="text-navy-900 hover:text-teal-500 font-medium transition-colors">Home</a></li>
            <li><a href="#courses" className="text-navy-900 hover:text-teal-500 font-medium transition-colors">Courses</a></li>
            <li><a href="#about" className="text-navy-900 hover:text-teal-500 font-medium transition-colors">About</a></li>
            <li><a href="#mentors" className="text-navy-900 hover:text-teal-500 font-medium transition-colors">Mentors</a></li>
            <li><a href="#testimonials" className="text-navy-900 hover:text-teal-500 font-medium transition-colors">Testimonials</a></li>
            <li><a href="#contact" className="text-navy-900 hover:text-teal-500 font-medium transition-colors">Contact</a></li>
          </ul>
          {isLoggedIn ? (
            <Link to="/dashboard" className="btn btn-outline">Dashboard</Link>
          ) : (
            <button
              onClick={() => setLoginOpen(true)}
              className="btn btn-outline"
            >
              Login
            </button>
          )}
          <a href="#contact" className="btn btn-primary">Book a Call</a>
        </div>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li><a href="#home" className="text-navy-900 hover:text-teal-500 font-medium transition-colors">Home</a></li>
              <li><a href="#courses" className="text-navy-900 hover:text-teal-500 font-medium transition-colors">Courses</a></li>
              <li><a href="#about" className="text-navy-900 hover:text-teal-500 font-medium transition-colors">About</a></li>
              <li><a href="#mentors" className="text-navy-900 hover:text-teal-500 font-medium transition-colors">Mentors</a></li>
              <li><a href="#testimonials" className="text-navy-900 hover:text-teal-500 font-medium transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-navy-900 hover:text-teal-500 font-medium transition-colors">Contact</a></li>
            </ul>
            <div className="mt-6 space-y-4">
              {isLoggedIn ? (
                <Link to="/dashboard" className="btn btn-outline w-full text-center">Dashboard</Link>
              ) : (
                <button
                  onClick={() => setLoginOpen(true)}
                  className="btn btn-outline w-full"
                >
                  Login
                </button>
              )}
              <a href="#contact" className="btn btn-primary w-full text-center">Book a Call</a>
            </div>
          </div>
        </div>
      )}

      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLoginSuccess={() => window.location.reload()}
        onSwitchToSignup={() => {
          setLoginOpen(false);
          setSignupOpen(true);
        }}
      />
      <SignupModal
        isOpen={signupOpen}
        onClose={() => setSignupOpen(false)}
        onSignupSuccess={() => window.location.reload()}
        onSwitchToLogin={() => {
          setSignupOpen(false);
          setLoginOpen(true);
        }}
      />
    </nav>
  );
};

export default Navbar;