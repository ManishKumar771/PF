import React from 'react';
import { Code, Database, Brain, Cloud, TestTube, Monitor, Wrench, Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'R']
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: ['Git', 'Docker', 'VS Code', 'Jupyter', 'Postman', 'Linux']
    },
    {
      icon: Monitor,
      title: 'Web Frameworks',
      skills: ['React', 'Node.js', 'Express', 'FastAPI', 'Streamlit', 'Flask']
    },
    {
      icon: Brain,
      title: 'ML Libraries',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      icon: Database,
      title: 'Backend',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
      icon: TestTube,
      title: 'Testing',
      skills: ['Jest', 'Pytest', 'Unit Testing', 'Integration Testing', 'TDD', 'CI/CD']
    },
    {
      icon: Cloud,
      title: 'Deployment',
      skills: ['AWS', 'Heroku', 'Vercel', 'GitHub Actions', 'Firebase', 'Netlify']
    },
    {
      icon: Cpu,
      title: 'OS',
      skills: ['Windows', 'Linux', 'macOS', 'Ubuntu', 'CentOS', 'Docker']
    }
  ];

  return (
    <section className="py-20 bg-[#10101a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cyan-400 neon-text mb-4">Skills & Expertise</h2>
          <p className="text-xl text-cyan-200 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern AI solutions and scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-[#181824] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-1.5 bg-[#232336] rounded-lg text-sm text-cyan-200 hover:bg-cyan-950 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
