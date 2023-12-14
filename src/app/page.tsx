'use client';

import Weather from '@/components/frontpage-components/Weather';
import Navbar from '@/components/frontpage-components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-[100dvh] bg-homepage-background bg-cover flex flex-col items-center">
      <Weather />
      <Image
        className="absolute top-[28%]"
        src="/assets/house.png"
        alt="house image"
        width={390}
        height={390}
      ></Image>
      <Navbar />
    </main>
  );
}
