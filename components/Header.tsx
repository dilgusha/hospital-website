import React, { useState, useEffect } from 'react';
import { Search, Phone, Facebook, Instagram, User, Globe, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string, params?: any) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [lang, setLang] = useState('Az');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({ label, hasDropdown, page }: { label: string, hasDropdown?: boolean, page: string }) => (
    <div 
      className="relative h-full flex items-center"
      onMouseEnter={() => hasDropdown && setActiveDropdown(label)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button 
        onClick={() => !hasDropdown && onNavigate(page)}
        className={`flex items-center gap-1 transition-all duration-300 font-semibold text-[15px] py-6 relative group
          ${activeDropdown === label ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
      >
        {label}
        {hasDropdown && (
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === label ? 'rotate-180' : ''}`} />
        )}
        <span className="absolute bottom-4 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
      </button>
      
      {hasDropdown && activeDropdown === label && (
        <div className="absolute top-[100%] left-[-20px] bg-white shadow-2xl rounded-2xl border border-gray-100 py-3 w-72 z-[100] transform transition-all animate-in fade-in slide-in-from-top-4 duration-300">
          <ul className="flex flex-col space-y-1">
            {(label === "Haqqımızda" ? [
              { n: 'Tariximiz', p: 'home' },
              { n: 'Missiya və məqsəd', p: 'home' },
              { n: 'Keyfiyyət siyasəti', p: 'home' },
              { n: 'Həkimlərimiz', p: 'doctors'},
              { n: 'Məmnunluq anketi', p: 'home' }
            ] : [
              { n: 'Başgicəllənmə Mərkəzi', p: 'home' },
              { n: 'Səs Mərkəzi', p: 'home' },
              { n: 'Eşitmə Mərkəzi', p: 'home' },
              { n: 'Koxlear implantasiya', p: 'home' }
            ]).map((item, i) => (
              <li 
                key={i}
                onClick={() => onNavigate(item.p)} 
                className={`px-5 py-3 hover:bg-blue-50/50 hover:text-primary cursor-pointer transition-all flex items-center justify-between group/item`}
              >
                {item.n}
                <span className="opacity-0 group-hover/item:opacity-100 transition-all transform translate-x-[-10px] group-hover/item:translate-x-0">→</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <header className={`w-full bg-white sticky top-0 z-[1000] transition-all duration-300 ${scrolled ? 'shadow-lg' : 'border-b border-gray-100'}`}>
      <div className="bg-gray-50/80 border-b border-gray-100 py-2.5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[13px] text-gray-500 font-medium">
          <div className="flex space-x-5 items-center">
            <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-600 transition-all hover:scale-110" />
            <Instagram className="w-4 h-4 cursor-pointer hover:text-pink-600 transition-all hover:scale-110" />
          </div>
          
          <div className="flex space-x-8 items-center">
            <button className="hover:text-primary flex items-center gap-2 transition-colors group">
              <User className="w-3.5 h-3.5 group-hover:animate-pulse" /> Daxil olun
            </button>
            
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-1.5 hover:text-primary transition-colors py-1">
                <Globe className="w-3.5 h-3.5" />
                <span className="uppercase tracking-wider">{lang}</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
              </div>

              <div className="absolute right-0 top-full mt-2 w-24 bg-white border border-gray-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[110] overflow-hidden">
                {['Az', 'Ru', 'En'].map((item) => (
                  <div 
                    key={item}
                    onClick={() => setLang(item)}
                    className={`px-4 py-2.5 hover:bg-primary hover:text-white transition-all text-center
                      ${lang === item ? 'bg-blue-50 text-primary font-bold' : 'text-gray-600'}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-8 h-24">
        <div 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-3 cursor-pointer transition-transform hover:scale-105 active:scale-95 shrink-0"
        >
          <img src="/public/image/lor.png" alt="LOR Logo" className="h-16 w-auto object-contain" />
        </div>

        <nav className="hidden lg:flex items-center space-x-8 text-gray-700 h-full">
          <NavItem label="Haqqımızda" hasDropdown page="doctors" />
          <NavItem label="Xidmətlər" hasDropdown page="home" />
          <NavItem label="Referans Eşitmə" page="home" />
          <NavItem label="Xəbərlər" page="home" />
          <NavItem label="Əlaqə" page="home" />
        </nav>

        <div className="flex items-center gap-5">
          <div className="relative hidden xl:block group">
            <input 
              type="text" 
              placeholder="Həkim və ya xidmət axtar..." 
              className="pl-5 pr-12 py-3 border border-gray-200 rounded-2xl text-sm bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all w-64 group-hover:border-gray-300"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 group-hover:text-primary transition-colors">
               <Search className="w-4.5 h-4.5" />
            </div>
          </div>
          <a href="tel:*0111" className="bg-primary text-white px-7 py-3 rounded-full font-black text-lg flex items-center gap-2 hover:bg-blue-600 duration-300 transition shadow-lg whitespace-nowrap">
             <Phone className="w-5 h-5 fill-current" />
             *0111
           </a>
        </div>
      </div>
    </header>
  );
};

export default Header;