import React from 'react';
import { GraduationCap, Code, Brain, Rocket, Download } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'BTech AI & Data Science Student',
      description: 'Currently pursuing specialized education in AI and Data Science'
    },
    {
      icon: Brain,
      title: 'AI Enthusiast',
      description: 'Passionate about artificial intelligence and machine learning applications'
    },
    {
      icon: Code,
      title: 'Backend Developer',
      description: 'Building robust automation systems and backend solutions'
    },
    {
      icon: Rocket,
      title: 'Problem Solver',
      description: 'Project-focused learner exploring Docker, GitHub, and AI deployment'
    }
  ];

  return (
<<<<<<< HEAD
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
=======
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold cosmic-text mb-4">About Me</h2>
          <p className="text-xl nebula-text max-w-2xl mx-auto">
>>>>>>> 80b276d (v1)
            A passionate AI developer and data scientist dedicated to building intelligent solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
<<<<<<< HEAD
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As a BTech AI & Data Science student, I'm deeply passionate about exploring the intersection of artificial intelligence, 
              backend development, and automation. I believe in the power of technology to solve real-world problems and am constantly 
              seeking new challenges that push the boundaries of what's possible.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in AI and data science has been driven by curiosity and a desire to create meaningful impact. I'm particularly 
              interested in building intelligent systems that can automate complex processes and provide valuable insights from data.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg">
=======
            <div className="cosmic-glass p-8 rounded-xl">
              <p className="text-lg text-cyan-200 leading-relaxed mb-6">
                As a BTech AI & Data Science student, I'm deeply passionate about exploring the intersection of artificial intelligence,
                backend development, and automation. I believe in the power of technology to solve real-world problems and am constantly
                seeking new challenges that push the boundaries of what's possible.
              </p>

              <p className="text-lg text-cyan-200 leading-relaxed">
                My journey in AI and data science has been driven by curiosity and a desire to create meaningful impact. I'm particularly
                interested in building intelligent systems that can automate complex processes and provide valuable insights from data.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="neon-btn flex items-center gap-2">
>>>>>>> 80b276d (v1)
                <Download className="w-4 h-4" />
                <span className="font-medium">Download Resume</span>
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
<<<<<<< HEAD
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
=======
                  className="cosmic-glass p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:cosmic-glow group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 cosmic-pulse">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold cosmic-text mb-2 group-hover:nebula-text transition-all duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-cyan-200 text-sm">
>>>>>>> 80b276d (v1)
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======

      {/* Cosmic aurora effect */}
      <div className="absolute inset-0 aurora-bg opacity-20"></div>
>>>>>>> 80b276d (v1)
    </section>
  );
};