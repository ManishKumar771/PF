import React from 'react';
import { Calendar, Clock, ArrowRight, Lightbulb } from 'lucide-react';

export const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Automation',
      excerpt: 'Exploring how artificial intelligence is revolutionizing automation across industries and what it means for developers.',
      date: 'March 10, 2025',
      readTime: '5 min read',
      category: 'AI Insights',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Building Scalable Backend Systems',
      excerpt: 'Best practices for designing and implementing robust backend architectures that can handle growing user demands.',
      date: 'March 5, 2025',
      readTime: '8 min read',
      category: 'Backend Development',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Science Project Workflow',
      excerpt: 'A comprehensive guide to structuring data science projects from data collection to model deployment.',
      date: 'February 28, 2025',
      readTime: '12 min read',
      category: 'Data Science',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
<<<<<<< HEAD
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog & Knowledge</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
=======
    <section className="py-20 bg-[#10101a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cyan-400 neon-text mb-4">Blog & Knowledge</h2>
          <p className="text-xl text-cyan-200 max-w-2xl mx-auto">
>>>>>>> 80b276d (v1)
            Sharing insights, learnings, and perspectives on AI, development, and technology trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={index}
<<<<<<< HEAD
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
=======
              className="bg-[#181824] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
>>>>>>> 80b276d (v1)
            >
              <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <Lightbulb className="w-16 h-16 text-white opacity-80" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white bg-opacity-20 text-white rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
<<<<<<< HEAD
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
=======

              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 hover:text-cyan-300 transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-cyan-200 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-cyan-300 mb-4">
>>>>>>> 80b276d (v1)
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
                
                <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium">
=======

                <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition-colors duration-200 font-medium">
>>>>>>> 80b276d (v1)
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
<<<<<<< HEAD
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg font-medium">
=======
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 shadow-lg font-medium">
>>>>>>> 80b276d (v1)
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};