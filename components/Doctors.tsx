import React, { useState, useEffect } from 'react';
import { DOCTORS } from '../constants';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Doctors: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive logic: ensures the "window" size matches the screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevents sliding into empty space
  const maxIndex = Math.max(0, DOCTORS.length - itemsPerPage);

  const nextSlide = () => {
    if (currentIndex < maxIndex) setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section className="bg-primary py-24 mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Həkimlərimiz</h2>

          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-4 rounded-2xl bg-white/10 text-white border border-white/10 hover:bg-white hover:text-primary disabled:opacity-20 transition-all duration-500 shadow-xl active:scale-90"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="p-4 rounded-2xl bg-white/10 text-white border border-white/10 hover:bg-white hover:text-primary disabled:opacity-20 transition-all duration-500 shadow-xl active:scale-90"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden py-3">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {DOCTORS.map((doc) => (
              <div 
                key={doc.id} 
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="bg-white rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-3 group">
                  <div className="h-[400px] overflow-hidden relative">
                    <img 
                      src={doc.image} 
                      alt={doc.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{doc.name}</h3>
                    <p className="text-primary text-xs font-bold uppercase tracking-widest">
                      {doc.specialty}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Doctors;