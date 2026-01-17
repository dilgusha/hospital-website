
import React, { useState, useMemo } from 'react';
import { DOCTORS } from '../constants';
import { ChevronRight, Search, Filter } from 'lucide-react';
import DoctorCard from '../components/DoctorCard';

interface DoctorsListProps {
  onDoctorClick: (id: number) => void;
}

const DoctorsList: React.FC<DoctorsListProps> = ({ onDoctorClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Həkimlərimiz');

  const sidebarLinks = [
    { name: 'Tariximiz', path: 'history' },
    { name: 'Missiya və Məqsəd', path: 'mission' },
    { name: 'Keyfiyyət siyasəti', path: 'quality' },
    { name: 'Keyfiyyətə nəzarət', path: 'control' },
    { name: 'Sertifikatlar', path: 'certs' },
    { name: 'Beynəlxalq Əməkdaşlıq', path: 'intl' },
    { name: 'Mərkəzlərimiz', path: 'centers' },
    { name: 'Həkimlərimiz', path: 'doctors' },
    { name: 'Məmnunluq anketi', path: 'survey' },
  ];

  const filteredDoctors = useMemo(() => 
    DOCTORS.filter(doc => 
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]
  );

  return (
    <div className="bg-bgLight min-h-screen py-16 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">
        <aside className="w-full lg:w-1/4 space-y-2 sticky top-28 h-fit">
          <div className="bg-white/40 backdrop-blur-md rounded-3xl p-2 border border-white/60">
            {sidebarLinks.map((link, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveCategory(link.name)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-soft group ${
                  activeCategory === link.name 
                    ? 'sidebar-item-active' 
                    : 'text-gray-500 hover:text-primary'
                }`}
              >
                <span className="text-sm tracking-tight">{link.name}</span>
                <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${activeCategory === link.name ? 'text-primary' : 'text-gray-300'}`} />
              </button>
            ))}
          </div>
        </aside>

        <main className="w-full lg:w-3/4">
          <div className="bg-white rounded-3xl p-6 shadow-sm mb-10 border border-gray-100/50 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <input 
                type="text" 
                placeholder="Həkimin Adı, Soyadı və ya İxtisası" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border-none rounded-2xl py-4.5 px-6 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium placeholder:text-gray-400"
              />
              <Search className="w-5 h-5 absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <button className="bg-gray-50 p-4.5 rounded-2xl text-gray-400 hover:text-primary hover:bg-white border border-transparent hover:border-primary/20 transition-all hidden md:block">
              <Filter className="w-5 h-5" />
            </button>
          </div>

          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredDoctors.map((doc) => (
                <DoctorCard key={doc.id} doctor={doc} onClick={onDoctorClick} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-[40px] p-20 text-center border border-dashed border-gray-200">
              <Search className="w-12 h-12 text-gray-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-400">Heç bir həkim tapılmadı</h3>
              <p className="text-gray-400 text-sm mt-2">Axtarış sözünü dəyişməyi yoxlayın</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DoctorsList;
