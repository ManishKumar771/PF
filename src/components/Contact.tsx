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
<<<<<<< HEAD
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
=======
    <section className="py-20 bg-[#10101a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cyan-400 neon-text mb-4">Get In Touch</h2>
          <p className="text-xl text-cyan-200 max-w-2xl mx-auto">
>>>>>>> 80b276d (v1)
            Let's connect and explore opportunities to work together on exciting AI projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
<<<<<<< HEAD
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            
=======
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Contact Information
            </h3>

>>>>>>> 80b276d (v1)
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
<<<<<<< HEAD
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
=======
                    className="flex items-center gap-4 p-4 bg-[#181824] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
>>>>>>> 80b276d (v1)
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
<<<<<<< HEAD
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {contact.label}
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
=======
                      <p className="text-sm font-medium text-cyan-300">
                        {contact.label}
                      </p>
                      <p className="text-lg font-semibold text-cyan-200 hover:text-cyan-400 transition-colors duration-200">
>>>>>>> 80b276d (v1)
                        {contact.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="pt-6">
<<<<<<< HEAD
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg">
=======
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 shadow-lg">
>>>>>>> 80b276d (v1)
                <Download className="w-4 h-4" />
                <span className="font-medium">Download Resume</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
<<<<<<< HEAD
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
=======
          <div className="bg-[#181824] rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-cyan-300 mb-2">
>>>>>>> 80b276d (v1)
                  Name
                </label>
                <input
                  type="text"
<<<<<<< HEAD
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
=======
                  className="w-full px-4 py-3 border border-cyan-700 bg-[#232336] text-cyan-200 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-cyan-300 mb-2">
>>>>>>> 80b276d (v1)
                  Email
                </label>
                <input
                  type="email"
<<<<<<< HEAD
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
=======
                  className="w-full px-4 py-3 border border-cyan-700 bg-[#232336] text-cyan-200 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-cyan-300 mb-2">
>>>>>>> 80b276d (v1)
                  Subject
                </label>
                <input
                  type="text"
<<<<<<< HEAD
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
=======
                  className="w-full px-4 py-3 border border-cyan-700 bg-[#232336] text-cyan-200 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-cyan-300 mb-2">
>>>>>>> 80b276d (v1)
                  Message
                </label>
                <textarea
                  rows={5}
<<<<<<< HEAD
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200"
                  placeholder="Tell me about your project or how we can work together..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg font-medium"
=======
                  className="w-full px-4 py-3 border border-cyan-700 bg-[#232336] text-cyan-200 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200"
                  placeholder="Tell me about your project or how we can work together..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 shadow-lg font-medium"
>>>>>>> 80b276d (v1)
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