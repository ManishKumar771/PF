import React, { useState } from 'react';
import { Home, User, Code, Briefcase, Award, BookOpen, Mail, Menu, X, Download } from 'lucide-react';
<<<<<<< HEAD
=======
import profileImg from '../assets/profile.jpg';

// Minimal, light starfield for sidebar background
const SidebarStarfield: React.FC = () => {
  // Use a simple canvas with a few faint stars
  React.useEffect(() => {
    const canvas = document.getElementById('sidebar-starfield') as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = 320, height = window.innerHeight;
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
    <canvas id="sidebar-starfield" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} />
  );
};
>>>>>>> 80b276d (v1)

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

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);

<<<<<<< HEAD
  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsOpen(false);
=======
  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    closeSidebar();
>>>>>>> 80b276d (v1)
  };

  return (
    <>
<<<<<<< HEAD
      {/* Mobile hamburger button */}
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

      {/* Sidebar */}
      <nav
        className={`fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:translate-x-0 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Profile Section */}
        <div className="p-8 border-b border-gray-200 dark:border-gray-700 text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold border-4 border-white dark:border-gray-800 shadow-lg">
            MK
          </div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Manish Kumar</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">AI Developer</p>
        </div>

        <div className="flex flex-col justify-between h-full pb-6">
          <div className="px-6 py-6">
=======
      {/* Minimized vertical bar with menu button */}
      {!isOpen && (
        <div className="fixed right-0 top-0 h-full w-12 flex flex-col items-center justify-center z-50 bg-transparent">
          <button
            onClick={openSidebar}
            className="mt-4 p-2 rounded-full bg-[#181824] shadow-lg border border-cyan-700 hover:bg-cyan-900 transition"
            aria-label="Open sidebar"
          >
            <Menu className="w-7 h-7 text-cyan-400" />
          </button>
        </div>
      )}

      {/* Overlay for mobile/fullscreen */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar popout */}
      <nav
        className={`fixed right-0 top-0 h-full w-80 bg-[#181824] shadow-xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col items-center ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ boxShadow: isOpen ? '0 0 32px #00eaff22' : undefined }}
      >
        {/* Minimal starfield background */}
        {isOpen && <SidebarStarfield />}
        {/* Close button */}
        {isOpen && (
          <button
            onClick={closeSidebar}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-cyan-900 transition"
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6 text-cyan-400" />
          </button>
        )}
        {/* Profile image with animated border */}
        {isOpen && (
          <div className="relative flex flex-col items-center mt-16 mb-8 z-10">
            <span className="relative inline-block">
              <span className="absolute inset-0 rounded-full border-4 border-transparent animate-spin-slow" style={{
                background: 'conic-gradient(from 0deg, #00eaff 10%, #fff 30%, #00eaff 60%, #fff 90%, #00eaff 100%)',
                WebkitMaskImage: 'radial-gradient(circle, white 60%, transparent 100%)',
                maskImage: 'radial-gradient(circle, white 60%, transparent 100%)',
                zIndex: 1,
                pointerEvents: 'none',
                filter: 'blur(1px)'
              }}></span>
              <img
                src={profileImg}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-[#181824] relative z-10"
                style={{ boxShadow: '0 0 0 4px #181824' }}
              />
            </span>
          </div>
        )}
        {/* Navigation */}
        {isOpen && (
          <div className="flex flex-col w-full px-8 z-10">
>>>>>>> 80b276d (v1)
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
<<<<<<< HEAD
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left mb-2 ${
                    activeSection === item.id
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
=======
                  className={`neon-nav w-full mb-2 ${activeSection === item.id ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md' : 'text-cyan-200'}`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
>>>>>>> 80b276d (v1)
                </button>
              );
            })}
          </div>
<<<<<<< HEAD

          <div className="px-8">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg">
=======
        )}
        {/* Resume button */}
        {isOpen && (
          <div className="px-8 mt-auto mb-8 w-full z-10">
            <button className="neon-btn w-full flex items-center justify-center gap-2">
>>>>>>> 80b276d (v1)
              <Download className="w-4 h-4" />
              <span className="font-medium">Resume</span>
            </button>
          </div>
<<<<<<< HEAD
        </div>
      </nav>
    </>
  );
};
=======
        )}
      </nav>
    </>
  );
};

// Custom animation for running lights
// Add to global CSS:
// @keyframes spin-slow { 100% { transform: rotate(360deg); } }
>>>>>>> 80b276d (v1)
