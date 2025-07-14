
import React from 'react';
import { ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto px-6 w-full relative z-10">
        <div className="relative flex flex-col items-center md:items-start">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 cosmic-border shadow-2xl cosmic-glow mb-4 md:mb-0 md:mr-8 bg-black flex items-center justify-center">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(1.1) contrast(1.1)' }}
            />
            <div
              className="absolute inset-0 rounded-full pointer-events-none animate-pulse"
              style={{ boxShadow: '0 0 40px 10px #00eaff44' }}
            ></div>
          </div>
        </div>
        <div className="text-center md:text-left w-full">
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:gap-6 justify-center md:justify-start">
            <h1 className="text-5xl md:text-7xl font-bold cosmic-text mb-2 md:mb-0">
              Manish Kumar
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium nebula-text mb-6">
            AI Developer & Data Scientist
          </h2>
          <p className="text-lg md:text-xl text-cyan-200 max-w-2xl mx-auto leading-relaxed cosmic-glass p-6 rounded-lg">
            I am Here to Give my Best — Turning Ideas Into Intelligent Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
            <button className="neon-btn">
              <span className="font-medium">View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="neon-outline">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Cosmic aurora effect */}
      <div className="absolute inset-0 aurora-bg opacity-30"></div>
      {/* Stellar background */}
      <div className="absolute inset-0 stellar-bg opacity-20"></div>
    </section>
  );
};
