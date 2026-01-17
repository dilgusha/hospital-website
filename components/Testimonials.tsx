
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-16">Pasiyent məmnunluğu</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative group hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-2xl shadow-lg">
                <Quote className="w-6 h-6 fill-current" />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${t.id}`} alt={t.name} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{t.name}</h4>
                  <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 italic leading-relaxed">
                "{t.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
