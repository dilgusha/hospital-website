
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center relative z-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#333] leading-[1.1] mb-10 tracking-tight">
            İxtisaslaşmış Tibbi<br />Xidmətin Tək ünvanı!
          </h1>
          <div className="pt-4">
            <button className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white border-2 border-primary text-primary font-bold rounded-full overflow-hidden transition-all duration-500 hover:text-white">
              <span className="absolute inset-0 w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative z-10 uppercase text-xs tracking-widest">Daha ətraflı</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      <div className="absolute top-0 right-0 w-full md:w-3/5 h-full z-0">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent z-10"></div>
          <img
            src="../public/image/BANNER.png"
            alt="LOR Hospital Building"
            className="w-full h-full object-cover"
          />

          <div className="absolute right-8 bottom-12 flex flex-col gap-5 z-20">
            <a href="https://wa.me/*0111" target="_blank" className=" rounded-full text-white shadow-2xl hover:scale-110 transition cursor-pointer flex items-center justify-center">
              <img src="../public/image/Whatsapp.png" alt="" />
            </a>
            <a href="tel:*0111" className="rounded-full text-white shadow-2xl hover:scale-110 transition cursor-pointer flex items-center justify-center">
              <img src="../public/image/Phone.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
