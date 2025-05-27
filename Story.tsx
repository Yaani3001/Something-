import React from 'react';
import { Coffee, MapPin, Music, Star, Heart, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'

const timeline = [
  {
    date: "First Meeting",
    location: "Coffee Shop",
    description: "The day our eyes met and everything changed. A simple coffee order turned into hours of conversation that felt like minutes.",
    icon: Coffee,
    image: img1
  },
  {
    date: "First Date",
    location: "City Park",
    description: "A perfect evening under the stars. We walked through the park, sharing stories and dreams as the sun set over the city.",
    icon: MapPin,
    image: img2
  },
  {
    date: "First Concert",
    location: "Downtown Arena",
    description: "Dancing and singing our hearts out to our favorite songs. The music brought us even closer together.",
    icon: Music,
    image: img3
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Story() {
  return (
    <div className="min-h-screen py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-3xl mx-auto px-4"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-red-600 mb-4 font-['Montserrat']">
            Our Love Story
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Every great love story has a beginning. Here's ours, filled with moments that made us smile, laugh, and fall deeper in love.
          </p>
        </motion.div>
        
        <div className="relative">
          {timeline.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-20 last:mb-0 relative"
            >
              <div className="flex flex-col items-center">
                {/* Card Content */}
                <div className="w-full">
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <event.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 font-['Montserrat']">
                          {event.date}
                        </h3>
                        <p className="text-gray-600 flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative mb-6 rounded-xl overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.date}
                        className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Heart Icon */}
                <div className="relative mt-8 mb-8">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg z-10 hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-red-200 rounded-full blur-lg opacity-50 -z-10" />
                </div>

                {/* Arrow Connection */}
                {index !== timeline.length - 1 && (
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ArrowDown className="w-8 h-8 text-red-400 animate-bounce" />
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}