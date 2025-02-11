import { FaHome, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-navy-blue text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <FaHome className="text-2xl" />
          <span className="text-xl font-bold">Baba Properties</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/properties" className="hover:text-gray-300">Properties</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/blog" className="hover:text-gray-300">Blog</Link>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://wa.me/919990994836" className="flex items-center space-x-1 hover:text-green-400">
            <FaWhatsapp />
            <span className="hidden md:inline">WhatsApp</span>
          </a>
          <a href="tel:+919990994836" className="flex items-center space-x-1">
            <FaPhone />
            <span className="hidden md:inline">Call Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
}