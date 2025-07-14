import React from 'react';
import { Mail, Phone, Linkedin, Github, MessageCircle, Send, Download } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '6376209814',
      href: 'tel:6376209814',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'manishbissau04@gmail.com',
      href: 'mailto:manishbissau04@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/manish-kumar-1820852bb/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'ManishKumar771',
      href: 'https://github.com/ManishKumar771',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: MessageCircle,
      label: 'Discord',
      value: 'manishkumar77_17063',
      href: '#',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-[#10101a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cyan-400 neon-text mb-4">Get In Touch</h2>
          <p className="text-xl text-cyan-200 max-w-2xl mx-auto">
            Let's connect and explore opportunities to work together on exciting AI projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center gap-4 p-4 bg-[#181824] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-cyan-300">{contact.label}</p>
                      <p className="text-lg font-semibold text-cyan-200 hover:text-cyan-400 transition-colors duration-200">{contact.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="pt-6">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 shadow-lg">
                <Download className="w-4 h-4" />
                <span className="font-medium">Download Resume</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#181824] rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-cyan-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-cyan-700 bg-[#232336] text-cyan-200 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-cyan-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-cyan-700 bg-[#232336] text-cyan-200 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-cyan-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-cyan-700 bg-[#232336] text-cyan-200 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200"
                  placeholder="Project Collaboration"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-cyan-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-cyan-700 bg-[#232336] text-cyan-200 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200"
                  placeholder="Tell me about your project or how we can work together..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 shadow-lg font-medium"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
