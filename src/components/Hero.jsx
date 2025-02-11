import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

export default function Hero() {
  const [searchParams, setSearchParams] = useState({
    location: '',
    type: '',
    budget: ''
  });

  return (
    <div className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-center"
        >
          Find Your Dream Property
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-8 text-center"
        >
          Discover Premium Properties in Delhi & Faridabad
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select 
              className="w-full p-3 rounded border text-gray-700"
              value={searchParams.location}
              onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
            >
              <option value="">Location</option>
              <option value="delhi">Delhi</option>
              <option value="faridabad">Faridabad</option>
            </select>

            <select 
              className="w-full p-3 rounded border text-gray-700"
              value={searchParams.type}
              onChange={(e) => setSearchParams({...searchParams, type: e.target.value})}
            >
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="plot">Plot</option>
            </select>

            <select 
              className="w-full p-3 rounded border text-gray-700"
              value={searchParams.budget}
              onChange={(e) => setSearchParams({...searchParams, budget: e.target.value})}
            >
              <option value="">Budget</option>
              <option value="0-50">Under 50 Lakhs</option>
              <option value="50-1">50 Lakhs - 1 Cr</option>
              <option value="1+">Above 1 Cr</option>
            </select>

            <button className="w-full bg-navy-blue text-white p-3 rounded flex items-center justify-center space-x-2 hover:bg-blue-900">
              <FaSearch />
              <span>Search</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}