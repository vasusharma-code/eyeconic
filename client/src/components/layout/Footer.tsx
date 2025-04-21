import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-500 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="mb-6">Transforming medical education through personalized mentorship and strategic guidance.</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-white hover:text-navy-100 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-navy-100 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white hover:text-navy-100 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-navy-100 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#programs" className="hover:underline">Programs</a></li>
              <li><a href="#results" className="hover:underline">Results</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:underline">NEET PG Mentorship</a></li>
              <li><a href="#" className="hover:underline">INiCET Preparation</a></li>
              <li><a href="#" className="hover:underline">Grand Test Series</a></li>
              <li><a href="#" className="hover:underline">Live Sessions</a></li>
              <li><a href="#" className="hover:underline">Daily Tasks & Quizzes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Medical College Road, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@eyeconic.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-teal-400 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Eyeconic Mentorship. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;