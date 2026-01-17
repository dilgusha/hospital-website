import React, { useState } from 'react';
import { ARTICLES } from '../constants';
import { ChevronLeft, ChevronRight, ArrowRight, Clock } from 'lucide-react';

const Articles: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = ARTICLES.length;
  const visibleCards = 4;
  const maxIndex = Math.max(0, totalItems - visibleCards);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-32 bg-[#F8FAFC] font-sans overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tighter leading-none">
              Faydalı Məlumatlar
            </h2>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={prevSlide}
              className="group border border-gray-200 hover:border-primary/20 bg-white hover:bg-primary/5 p-4 rounded-2xl transition-all duration-300 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-primary" />
            </button>
            <button 
              onClick={nextSlide}
              className="group bg-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 p-4 rounded-2xl transition-all duration-300 active:scale-95"
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden p-2"> 
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` 
            }}
          >
            {ARTICLES.map((article) => (
              <div 
                key={article.id} 
                className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
              >
                <div className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="h-56 relative overflow-hidden flex-shrink-0 ">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1 text-gray-400 text-[10px] font-semibold uppercase tracking-wider">
                        <Clock className="w-3 h-3" />
                        {article.date}
                      </div>
                    </div>

                    <h3 className="text-[1.1rem] font-bold text-gray-800 mb-8 line-clamp-3 leading-[1.5] tracking-tight group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>

                    <div className="mt-auto pt-6 border-t border-gray-50">
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-2 text-primary text-[11px] font-bold uppercase tracking-widest group/link"
                      >
                        Ətraflı Oxu
                        <div className="w-6 h-[1px] bg-primary/30 group-hover/link:w-10 transition-all duration-500" />
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;