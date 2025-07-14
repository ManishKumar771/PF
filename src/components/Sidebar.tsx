import React, { useState, useEffect } from 'react';
import {
  Home, User, Code, Briefcase, Award, BookOpen, Mail, Menu, X, Download
} from 'lucide-react';
import profileImg from '../assets/profile.jpg';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'blog', label: 'Blog', icon: BookOpen },
  { id: 'contact', label: 'Contact', icon: Mail },
];

// Optional: Background starfield for sidebar
const SidebarStarfield: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('sidebar-starfield') as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const width = 320, height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    const stars = Array.from({ length: 24 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.3,
      o: Math.random() * 0.3 + 0.1
    }));
    ctx.clearRect(0, 0, width, height);
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(200,220,255,${star.o})`;
      ctx.shadowColor = '#e0eaff';
      ctx.shadowBlur = 4;
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  }, []);
  return (
    <canvas id="sidebar-starfield"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-lg md:hidden"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <nav className={`fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:translate-x-0 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Optional Starfield */}
        {isOpen && <SidebarStarfield />}

        {/* Profile Section */}
        <div className="p-8 border-b border-gray-200 dark:border-gray-700 text-center z-10 relative">
          <img
            src={profileImg}
            alt="Profile"
            className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
          />
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Manish Kumar</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">AI Developer</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col justify-between h-full pb-6">
          <div className="px-6 py-6 z-10 relative">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left mb-2 ${activeSection === id
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>

          {/* Resume Button */}
          <div className="px-8 z-10 relative">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg">
              <Download className="w-4 h-4" />
              <span className="font-medium">Resume</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
