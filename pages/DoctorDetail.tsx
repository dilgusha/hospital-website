import React, { useState } from 'react';
import { Doctor } from '../types';
import { DOCTORS } from '../constants';
import { Check, Star, Users, Clock, ArrowLeft, Share2, Printer, Copy } from 'lucide-react';

interface DoctorDetailProps {
  doctorId: number;
  onBack: () => void;
}

const DoctorDetail: React.FC<DoctorDetailProps> = ({ doctorId, onBack }) => {
  const doctor = DOCTORS.find(d => d.id === doctorId);
  const [activeTab, setActiveTab] = useState('info');

  if (!doctor) return null;

  const StatBox = ({ icon: Icon, value, label, isRating }: { icon: any, value: string | number, label: string, isRating?: boolean }) => (
    <div className="p-4 flex flex-col items-center justify-center flex-1 min-w-[120px]">
      <div className="flex items-center gap-2 mb-1">
        {!isRating && <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />}
        <span className="text-2xl font-bold text-gray-700 tracking-tighter">{value}</span>
        {isRating && <Star className="w-6 h-6 text-primary fill-primary" />}
      </div>
      <div className="text-gray-400 text-[11px] font-medium whitespace-nowrap uppercase tracking-wider">{label}</div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen pb-20 font-sans">
      <div className=" max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-8">
          <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-primary transition-all font-semibold group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Siyahıya qayıt</span>
          </button>
          <div className="flex gap-2">
            {[Share2, Printer, Copy].map((Icon, i) => (
              <button key={i} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        <div className="relative mb-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-10">
            <div className="w-full max-w-[420px] lg:w-1/3">
              <div className="rounded-[20px] overflow-hidden shadow-2xl bg-gray-50">
                <img src={doctor.image} alt={doctor.name} className="w-full aspect-[4/5] object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-2/3 lg:pt-8 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-black text-primary mb-4 tracking-tight">{doctor.name}</h1>
              <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed font-semibold">
                {doctor.specialty}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 max-w-2xl border p-6 rounded-[15px]">
                <StatBox icon={Clock} value={doctor.experience} label="Təcrübə" />
                <StatBox icon={Users} value={doctor.patients || "1k+"} label="Pasiyent" />
                <StatBox icon={Star} value={doctor.reviews || 0} label="Rəylər" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center border-b border-gray-100 mb-12">
          {['Məlumat', 'Həkimin məqalələri', 'Rəylər'].map((label, i) => {
            const id = ['info', 'articles', 'reviews'][i];
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-10 pb-6 text-xl font-bold transition-all relative ${activeTab === id ? 'text-gray-800' : 'text-gray-300 hover:text-gray-500'
                  }`}
              >
                {label}
                {activeTab === id && (
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-primary rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto space-y-2">
          {activeTab === 'info' && (
            <>
              <div className="flex flex-col md:flex-row bg-[#F8FAF9] rounded-2xl min-h-[60px] items-center">
                <div className="w-full md:w-64 px-8 py-4 font-bold text-gray-700 text-lg">Vəzifə</div>
                <div className="flex-1 px-8 py-4 text-gray-500 font-medium text-lg">{doctor.specialty}</div>
              </div>

              <div className="flex flex-col md:flex-row bg-white min-h-[60px] items-center">
                <div className="w-full md:w-64 px-8 py-4 font-bold text-gray-700 text-lg">Mərkəz</div>
                <div className="flex-1 px-8 py-4 text-gray-500 font-medium text-lg">{doctor.center || "Başgicəllənmə Mərkəzi"}</div>
              </div>

              <div className="flex flex-col md:flex-row bg-[#F8FAF9] rounded-2xl py-6 min-h-[60px]">
                <div className="w-full md:w-64 px-8 font-bold text-gray-700 text-lg pt-1">Təhsil</div>
                <div className="flex-1 px-8 space-y-4">
                  {doctor.education.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-3 h-3 text-white stroke-[4px]" />
                      </div>
                      <span className="text-gray-500 font-medium leading-relaxed text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row bg-white py-6 min-h-[60px]">
                <div className="w-full md:w-64 px-8 font-bold text-gray-700 text-lg pt-1">
                  Müayinə və müalicə istiqamətləri
                </div>
                <div className="flex-1 px-8 grid grid-cols-1 gap-4">
                  {doctor.focusAreas.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-3 h-3 text-white stroke-[4px]" />
                      </div>
                      <span className="text-gray-500 font-medium leading-relaxed text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;