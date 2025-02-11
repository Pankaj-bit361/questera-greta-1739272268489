import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-navy-blue"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-navy-blue"
                    placeholder="Your Email"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-navy-blue h-32"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-navy-blue text-white py-3 rounded hover:bg-blue-900 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-navy-blue text-xl mr-4" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">C-398, Main Market, Bhajanpura, Delhi-110053</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <FaPhone className="text-navy-blue text-xl mr-4" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+919990994836">+91-9990994836</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <FaWhatsapp className="text-navy-blue text-xl mr-4" />
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-gray-600">
                      <a href="https://wa.me/919990994836">+91-9990994836</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <FaEnvelope className="text-navy-blue text-xl mr-4" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@babaproperties.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}