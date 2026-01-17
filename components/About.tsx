
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-[#fcfdfe]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Nəyə görə Lor Hospital?</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Lor Hospital - 2013-cü ildən fəaliyyət göstərən, Azərbaycanın eləcə də Qafqazın ilk və yeganə ixtisaslaşmış Qulaq Burun Boğaz və Baş-Boyun Mərkəzidir.
            </p>
            <p>
              Azərbaycanda ilk Qulaq-Burun-Boğaz və Baş-Boyun Mərkəzi olmaqla yanaşı vermiş olduğu məsuliyyət ilə poliklinika, laboratoriya, funksional diaqnostika müayinələrindən sonra pasiyentlərimizə daha dəqiq diaqnoz qoyularaq lazımi müalicələr aparılır.
            </p>
            <p>
              Qüsursuz xidmət anlayışını əsas tutaraq Avropa standartlarına uyğun müasir müalicə və diaqnostika üsulları ilə xidmətlərimizin yüksək keyfiyyətini təmin edirik.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <div className="relative z-10 rounded-[1rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,162,232,0.2)]">
            <img 
              src="../public/image/Niyə görə lor.png" 
              alt="Lor Hospital Internal View" 
              className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

