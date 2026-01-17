import React from 'react';
import { Award, Calendar, Users } from 'lucide-react';

const Features: React.FC = () => {
  const items = [
    {
      icon: <Award className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      title: "Qafqazın ilk və tək",
      desc: "ixtisaslaşmış mərkəzi"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      title: "12 illik +",
      desc: "təcrübəli tibbi personal"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      title: "Pasiyent",
      desc: "yönümlü xidmət anlayışı"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-30 font-sans">
      <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,162,232,0.1)] py-10 px-10 grid grid-cols-1 md:grid-cols-3 gap-12 border border-white transition-all duration-500 hover:-translate-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 group">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-6 transition-transform group-hover:rotate-12 group-hover:scale-110 duration-300" />
              <div className="relative bg-white p-5 rounded-2xl shadow-sm border border-gray-50 transition-transform group-hover:-rotate-2 duration-300">
                {item.icon}
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[1.2rem] font-bold text-gray-800 leading-[1.2] tracking-tight group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 font-light text-[0.95rem] mt-0.5 tracking-wide leading-relaxed">
                {item.desc}
              </p>
            </div>

            {idx < items.length - 1 && (
              <div className="hidden lg:block h-12 w-[1px] bg-gray-100 ml-auto self-center" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
