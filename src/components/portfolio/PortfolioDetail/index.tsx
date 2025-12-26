import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PortfolioDetail = () => {
  return (
    <section className='md:py-24 py-16 dark:bg-darkmode bg-white'>
      <div className='container mx-auto max-w-6xl px-4'>

        {/* Header Section */}
        <div className='mb-16 border-b border-gray-200 dark:border-gray-700 pb-8'>
          <h1 className='text-3xl md:text-5xl font-bold text-midnight_text dark:text-white mb-6'>
            Smart Portable Dehumidifier
          </h1>

          <div className='flex flex-wrap gap-2 mb-8'>
            {['ESP32', 'C++', 'React Native', 'Gemini API', 'MQTT'].map((tech) => (
              <span key={tech} className='bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium'>
                {tech}
              </span>
            ))}
          </div>

          <div className='flex gap-4'>
            <a href='#' className='bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition'>
              View on GitHub
            </a>
            <a href='#' className='bg-transparent border border-gray-300 dark:border-gray-600 text-midnight_text dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-3 rounded-md font-medium transition'>
              Live Demo
            </a>
          </div>
        </div>

        {/* Content Section: Challenge & Solution */}
        <div className='grid md:grid-cols-2 gap-12 mb-16'>
          <div>
            <h2 className='text-2xl font-bold text-midnight_text dark:text-white mb-4'>The Challenge</h2>
            <p className='text-lg text-grey dark:text-white/70 leading-relaxed'>
              Regulating humidity in portable environments efficiently. Traditional dehumidifiers are often bulky and lack intelligent control, leading to inefficient energy usage and poor air quality management in small, mobile spaces.
            </p>
          </div>
          <div>
            <h2 className='text-2xl font-bold text-midnight_text dark:text-white mb-4'>The Solution</h2>
            <p className='text-lg text-grey dark:text-white/70 leading-relaxed'>
              An ESP32-based controller integrated with Gemini AI for intelligent air quality recommendations. The system monitors environmental data in real-time and autonomously adjusts operation modes while providing actionable insights to the user via a mobile app.
            </p>
          </div>
        </div>

        {/* Architecture Section */}
        <div className='mb-16'>
          <h2 className='text-2xl font-bold text-midnight_text dark:text-white mb-8'>The Architecture & Hardware</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {/* Left: Schematic */}
            <div className='bg-gray-100 dark:bg-darklight rounded-xl overflow-hidden min-h-[400px] flex items-center justify-center border border-gray-200 dark:border-gray-700'>
              <div className='text-center p-8'>
                <div className='w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center'>
                  <svg className="w-10 h-10 text-gray-500 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <p className='text-gray-500 dark:text-gray-400 font-medium'>Schematic Diagram Placeholder</p>
              </div>
            </div>

            {/* Right: Real Device */}
            <div className='bg-gray-100 dark:bg-darklight rounded-xl overflow-hidden min-h-[400px] flex items-center justify-center border border-gray-200 dark:border-gray-700'>
              <div className='text-center p-8'>
                <div className='w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center'>
                  <svg className="w-10 h-10 text-gray-500 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                </div>
                <p className='text-gray-500 dark:text-gray-400 font-medium'>Prototype Photo Placeholder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className='bg-gray-50 dark:bg-darklight rounded-2xl p-8 md:p-12'>
          <h2 className='text-2xl font-bold text-midnight_text dark:text-white mb-6'>Key Features</h2>
          <ul className='grid md:grid-cols-2 gap-4'>
            {[
              'Intelligent humidity control with ESP32',
              'Real-time air quality monitoring',
              'Gemini AI integration for smart recommendations',
              'Remote control via Mobile App (React Native)',
              'Efficient MQTT messaging protocol',
              'Low power consumption design'
            ].map((feature, idx) => (
              <li key={idx} className='flex items-start gap-3'>
                <span className='w-6 h-6 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5'>
                  <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </span>
                <span className='text-lg text-grey dark:text-white/80'>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default PortfolioDetail
