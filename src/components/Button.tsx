import '@/app/globals.css';
import React from 'react';
import Image from 'next/image';
import ellipseBlur from '@/assets/ellipse-blur.svg';
import ellipseMask from '@/assets/mask.png';
import plus from '@/assets/plus.svg';

export default function Button() {
  return (
    <div className="relative w-[64px] h-[64px] bg-white rounded-[32px] blur-[1px] [background:linear-gradient(180deg,rgba(0,0,0,0.4)_0%,rgba(255,255,255,0.3)_100%)]">
      <div className="absolute w-[104px] h-[111px] top-[-20px] left-[-20px] bg-[100%_100%] bg-image-plus">
        <Image
          className="absolute w-[58px] h-[58px] top-[23px] left-[23px]"
          alt="Ellipse blur"
          src={ellipseBlur}
        />
        <Image
          className="absolute w-[44px] h-[44px] top-[30px] left-[30px]"
          alt="Plus"
          src={plus}
        />
      </div>
    </div>
  );
}
