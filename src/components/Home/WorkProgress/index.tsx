'use client'
import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

// Data for Tech Stack
const TechStack = [
  { name: 'ESP', icon: '/images/tech/esp32.png' },
  { name: 'Arduino IDE', icon: '/images/tech/arduino.png' },
  { name: 'MicroPython', icon: '/images/tech/micropython.png' },
  { name: 'MQTT', icon: '/images/tech/mqtt.png' },
  { name: 'Firebase', icon: '/images/tech/firebase.png' },
  { name: 'Ultralytics YOLO', icon: '/images/tech/ultralytics.png'},
  { name: 'React.js', icon: '/images/tech/react.png' },
]

const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section
      className={`scroll-mt-25 ${isColorMode
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
        }`}
      id='about'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 items-center gap-7'>
          <div className='md:col-span-6'>
            <Image
              src={getImgPath('/images/work-progress/progress-work.png')}
              alt='logo'
              width={375}
              height={0}
              quality={100}
              style={{ width: '100%', height: 'auto' }}
              className='md:block hidden'
            />
          </div>
          <div
            className='md:col-span-6'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <div className='flex gap-2 items-center'>
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-midnight_text text-sm dark:text-white/50 uppercase tracking-widest'>
                THE ENGINEERING TOOLKIT
              </span>
            </div>
            <h2 className='pt-9 pb-8 text-midnight_text font-bold dark:text-white text-4xl'>
              Building Scalable IoT Ecosystems from Hardware to Cloud
            </h2>
            <p className='text-gray dark:text-white/70 text-base font-semibold'>
              I leverage a robust set of modern technologies to build end-to-end
              IoT solutions. From low-level firmware optimization on ESP32 to
              real-time data visualization on React dashboards.
            </p>

            <div className='grid grid-cols-3 sm:grid-cols-4 gap-8 pt-12 items-center'>
              {TechStack.map((item, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center justify-center group gap-2'>
                  <div className='relative w-16 h-16 transition-transform duration-300 transform group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100'>
                    <Image
                      src={getImgPath(item.icon)}
                      alt={item.name}
                      fill
                      className='object-contain'
                    />
                  </div>
                  <span className='text-sm font-medium text-midnight_text dark:text-white/70 group-hover:text-primary transition-colors'>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progresswork
