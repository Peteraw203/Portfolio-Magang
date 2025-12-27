import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Footer: FC = () => {
  return (
    <footer className='bg-darkmode relative z-1 border-t border-dark_border px-6'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 sm:grid-cols-12'>
          <div className='md:col-span-4 sm:col-span-6 col-span-12 sm:border-r border-b border-solid border-dark_border flex items-center sm:border-b-0 sm:min-h-25 py-10 shrink-0 '>
            <div className='sm:content-normal sm:text-start text-center content-center sm:w-auto w-full'>
              <Link href='/' className='md:block flex justify-center'>
                <h3 className='text-2xl font-bold text-white'>
                  My Portfolio
                </h3>
              </Link>

            </div>
          </div>
          <div className='md:col-span-4 sm:col-span-6 col-span-12 sm:flex items-center sm:min-h-25 py-10 justify-center shrink-0 md:border-r border-b sm:border-b-0 border-solid border-dark_border'>
            <div className='flex flex-col md:items-start items-center'>
              <span className='text-lg font-bold text-white pb-4 inline-block'>
                Support
              </span>
              <div className='pb-5 sm:block flex'>
                <p className='text-base font-bold text-white'>Phone</p>
                <Link
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                  className='text-2xl text-white/50 hover:text-white'>
                  {process.env.NEXT_PUBLIC_PHONE_NUMBER}
                </Link>
              </div>
              <div className='sm:block flex items-center gap-3'>
                <p className='text-base font-bold text-white'>Email</p>
                <Link
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
                  className='text-2xl text-white/50 hover:text-white'>
                  {process.env.NEXT_PUBLIC_EMAIL_ADDRESS}
                </Link>
              </div>
              <div>
                <ul className='flex items-center gap-3 mt-[1.875rem]'>
                  <li className='group'>
                    <Link href='https://www.linkedin.com/in/peter-abednego-wijaya/' className='text-2xl text-white/50 hover:text-white'>
                      Peter Abednego Wijaya
                      <svg
                        width='22'
                        height='23'
                        viewBox='0 0 22 23'
                        fill='#A3BBD1'
                        xmlns='http://www.w3.org/2000/svg'
                        className='group-hover:fill-primary'>
                        <g clipPath='url(#clip0_1_347)'>
                          <path d='M20.4133 0H1.58665C0.710327 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.710327 23 1.58665 23H20.4133C21.2897 23 22 22.2574 22 21.3412V1.65878C22 0.742615 21.2897 0 20.4133 0ZM7.80353 17.3848H5.12453V8.95858H7.80353V17.3848ZM6.46411 7.80798H6.44666C5.54767 7.80798 4.96625 7.161 4.96625 6.35241C4.96625 5.52557 5.56546 4.89648 6.4819 4.89648C7.39835 4.89648 7.96231 5.52557 7.97977 6.35241C7.97977 7.161 7.39835 7.80798 6.46411 7.80798ZM17.4634 17.3848H14.7848V12.877C14.7848 11.7441 14.3969 10.9715 13.4276 10.9715C12.6875 10.9715 12.2468 11.4926 12.0531 11.9957C11.9822 12.1758 11.965 12.4274 11.965 12.6792V17.3848H9.28612C9.28612 17.3848 9.3212 9.7491 9.28612 8.95858H11.965V10.1516C12.321 9.57748 12.9579 8.76082 14.3793 8.76082C16.1418 8.76082 17.4634 9.96511 17.4634 12.5532V17.3848Z' />
                        </g>
                        <defs>
                          <clipPath id='clip0_1_347'>
                            <rect width='22' height='23' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='text-center gap-4 md:gap-0 flex-wrap p-7 border-t border-solid border-dark_border'>
        <div>
          <ul className='flex justify-center mb-4 items-center sm:gap-7 gap-3'>
            <li className='text-base text-white/50'>
              <Link href='/#about' className='hover:text-primary'>
                About
              </Link>
            </li>

            <li className='text-base text-white/50'>
              <Link href='/portfolio' className='hover:text-primary'>
                Portfolio
              </Link>
            </li>


          </ul>
        </div>
        <div>
          <p className='text-base text-white/50'>
            © 2025 All rights reserved. Made by Peter modified from GetNextjs
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
