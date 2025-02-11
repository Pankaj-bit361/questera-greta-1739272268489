import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaHome } from 'react-icons/fa';

export default function About() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">About Baba Properties</h1>
          <p className="text-gray-600 text-lg">
            Your trusted partner in real estate since 2010, specializing in premium properties 
            across Delhi and Faridabad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <FaAward className="text-4xl text-navy-blue" />,
              title: "12+ Years Experience",
              description: "Delivering excellence in real estate services since 2010"
            },
            {
              icon: <FaUsers className="text-4xl text-navy-blue" />,
              title: "1000+ Happy Clients",
              description: "Building trust through successful property dealings"
            },
            {
              icon: <FaHome className="text-4xl text-navy-blue" />,
              title: "500+ Properties",
              description: "Wide range of properties across Delhi & Faridabad"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}