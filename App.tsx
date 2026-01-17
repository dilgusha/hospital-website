
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import DoctorsList from './pages/DoctorsList';
import DoctorDetail from './pages/DoctorDetail';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeDoctorId, setActiveDoctorId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, activeDoctorId]);

  const navigate = (page: string, id?: number) => {
    if (id) {
      setActiveDoctorId(id);
      setCurrentPage('doctor-detail');
    } else {
      setActiveDoctorId(null);
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onNavigate={navigate} />
      
      <main className="flex-grow">
        {currentPage === 'home' && <Home />}
        {currentPage === 'doctors' && (
          <DoctorsList onDoctorClick={(id) => navigate('doctor-detail', id)} />
        )}
        {currentPage === 'doctor-detail' && activeDoctorId && (
          <DoctorDetail 
            doctorId={activeDoctorId} 
            onBack={() => navigate('doctors')} 
          />
        )}
      </main>

      <Footer />
      
    </div>
  );
}

export default App;
