import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, ArrowUp, Send, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white pt-24 pb-12 relative overflow-hidden font-sans">
      <div className="absolute -top-24 -right-24 opacity-10 pointer-events-none transform rotate-12">
        <img
          src="https://lorhospital.az/uploads/settings/1623315995_lor-hospital-logo.png"
          alt=""
          className="w-[800px] grayscale invert"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          <div className="lg:col-span-4 space-y-8">
            <div className="inline-flex p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <img src="../public/image/Footer-logo.webp" alt="LOR Hospital" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-[15px] font-light leading-relaxed opacity-80 max-w-sm">
              Qafqazın ilk və yeganə ixtisaslaşmış <br />
              <span className="font-bold text-white opacity-100 block mt-1 tracking-normal uppercase text-xs">
                QULAQ BURUN BOĞAZ VƏ BAŞ-BOYUN MƏRKƏZİ!
              </span>
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, color: 'hover:bg-[#1877F2]' },
                { icon: Instagram, color: 'hover:bg-[#F401BA]' },
                { icon: Youtube, color: 'hover:bg-[#FF0000]' },
                { icon: MessageCircle, color: 'hover:bg-[#25D366]' }
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className={`bg-white/10 backdrop-blur-sm p-3 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/40 hover:-translate-y-1 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-1 gap-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-2">Əlaqə</h4>
            <div className="flex items-center gap-5 group cursor-pointer bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="bg-white/10 p-3 rounded-xl">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs opacity-60 font-medium">Qaynar Xətt</span>
                <span className="text-2xl font-extrabold tracking-tighter">*0111</span>
              </div>
            </div>
            <div className="flex items-start gap-5 group bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="bg-white/10 p-3 rounded-xl">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs opacity-60 font-medium">Email</span>
                <span className="text-[14px] font-light leading-snug">info@lorhospital.az</span>
              </div>
            </div>
            <div className="flex items-start gap-5 group bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="bg-white/10 p-3 rounded-xl">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs opacity-60 font-medium">Ünvan</span>
                <span className="text-[14px] font-light leading-snug">Bakı ş., Nərimanov r., Əhməd Rəcəbli 19K, AZ1075</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-6">Abunə Olun</h4>
              <div className="space-y-3">
                {[
                  { icon: Facebook, label: 'Facebook', handle: 'Lor Hospital' },
                  { icon: Instagram, label: 'Instagram', handle: 'Lor Hospital' }
                ].map((item, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className={`flex items-center gap-4 group transition-all duration-300 bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/5 hover:border-white/20`}
                  >
                    <div className="bg-white/10 p-2 rounded-lg  transition-all">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">{item.label}</span>
                      <span className="text-sm font-medium text-white ">{item.handle}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-6">Məlumat Alın</h4>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-[2rem] border border-white/20 relative group overflow-hidden">
                <div className="absolute -top-10 -right-10 bg-white/10 w-32 h-32 rounded-full blur-2xl group-hover:bg-white/20 transition-all" />
                <p className="text-sm font-light mb-4 opacity-90">Yeniliklərdən xəbərdar olmaq üçün:</p>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="E-poçt ünvanınız"
                    className="w-full bg-white/10 rounded-xl border border-white/20 py-4 px-5 pr-14 placeholder:text-white/40 focus:bg-white/20 transition-all outline-none font-light text-sm"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-primary p-2.5 rounded-lg hover:bg-blue-50 transition-all shadow-xl active:scale-90">
                    <Send className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-light opacity-50">
            &copy; {new Date().getFullYear()} LOR Hospital. Bütün hüquqlar qorunur.
          </p>

          <div className="flex items-center gap-8">
            <div className="flex gap-6 text-[11px] font-medium uppercase tracking-widest opacity-40">
              <a href="#" className="hover:opacity-100 transition-opacity">Məxfilik Siyasəti</a>
              <a href="#" className="hover:opacity-100 transition-opacity">İstifadə Şərtləri</a>
            </div>

            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center hover:bg-blue-50 hover:-translate-y-2 cursor-pointer transition-all duration-300 shadow-2xl group"
            >
              <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;