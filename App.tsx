
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Stages from './components/Stages';
import Activities from './components/Activities';
import ScoutingIntro from './components/ScoutingIntro';
import Library from './components/Library';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="py-20 bg-white">
          <About />
        </section>

        <section id="intro" className="py-20 bg-gray-50">
          <ScoutingIntro />
        </section>

        <section id="stages" className="py-20 bg-white">
          <Stages />
        </section>

        <section id="achievements" className="py-20 bg-gray-50">
          <Achievements />
        </section>

        <section id="activities" className="py-20 bg-white">
          <Activities />
        </section>

        <section id="library" className="py-20 bg-gray-50">
          <Library />
        </section>

        <section id="contact" className="py-20 bg-white border-t border-gray-100">
          <Contact />
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} مجموعات منطي الكشفية و الإرشادية
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-green-400 transition-colors">فيسبوك</a>
            <a href="#" className="hover:text-green-400 transition-colors">تويتر</a>
            <a href="#" className="hover:text-green-400 transition-colors">إنستجرام</a>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;
