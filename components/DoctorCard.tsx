
import React from 'react';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
  onClick: (id: number) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onClick }) => {
  return (
    <div 
      onClick={() => onClick(doctor.id)}
      className="bg-white rounded-[32px] p-6 shadow-sm hover:shadow-xl transition-soft cursor-pointer group flex flex-col border border-gray-50"
    >
      <div className="h-[320px] mb-6 overflow-hidden rounded-2xl relative">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-full h-full object-cover  group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <h3 className="text-2xl font-black text-secondary mb-1 leading-tight group-hover:text-primary transition-colors">
        {doctor.name}
      </h3>
      <p className="text-gray-500 text-sm font-medium leading-relaxed mb-4">
        {doctor.specialty}
      </p>
      <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-primary text-sm font-bold">Profilə bax</span>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
