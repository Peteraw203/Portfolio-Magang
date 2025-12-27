import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/components/Home/Counter'
import Progresswork from '@/components/Home/WorkProgress';

import Portfolio from '@/components/SharedComponent/portfollio'



export const metadata: Metadata = {
  title: "My Portfolio",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      <Progresswork isColorMode={false} />

      <Portfolio />



    </main>
  )
}
