import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';

const properties = [
  {
    id: 1,
    title: "Luxury Apartment in Delhi",
    location: "Bhajanpura, Delhi",
    price: "₹85 Lakhs",
    type: "apartment",
    beds: 3,
    baths: 2,
    area: "1800 sq ft",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    title: "Modern Villa in Faridabad",
    location: "Huda Sector 21, Faridabad",
    price: "₹1.2 Cr",
    type: "house",
    beds: 4,
    baths: 3,
    area: "2500 sq ft",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    title: "Premium Plot",
    location: "Huda Sector 15, Faridabad",
    price: "₹95 Lakhs",
    type: "plot",
    area: "200 sq yards",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

export default function Properties() {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    priceRange: ''
  });

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-center mb-8">Our Properties</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <select
              className="w-full p-3 border rounded"
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
            >
              <option value="">All Locations</option>
              <option value="delhi">Delhi</option>
              <option value="faridabad">Faridabad</option>
            </select>
            
            <select
              className="w-full p-3 border rounded"
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
            >
              <option value="">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="plot">Plot</option>
            </select>
            
            <select
              className="w-full p-3 border rounded"
              value={filters.priceRange}
              onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
            >
              <option value="">All Prices</option>
              <option value="0-50">Under 50 Lakhs</option>
              <option value="50-1">50 Lakhs - 1 Cr</option>
              <option value="1+">Above 1 Cr</option>
            </select>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-navy-blue text-white px-3 py-1 rounded">
                  {property.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{property.location}</span>
                </div>
                
                <div className="flex items-center justify-between text-gray-500">
                  {property.beds && (
                    <div className="flex items-center">
                      <FaBed className="mr-2" />
                      <span>{property.beds} Beds</span>
                    </div>
                  )}
                  {property.baths && (
                    <div className="flex items-center">
                      <FaBath className="mr-2" />
                      <span>{property.baths} Baths</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <FaRulerCombined className="mr-2" />
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}