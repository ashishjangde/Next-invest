import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";


export default function HeroSection() {
  return (
    <div className="relative">
      {/* Base Full-Width Image (3.svg) */}
      <Image 
        src="/asset/images/3.svg"
        alt="background-image"
        width={1920}
        height={1080}
        className="object-cover z-0"
      />
          <div className="absolute w-full px-48 top-16 ">
          <Image 
            src="/asset/images/5.svg"
            alt="image"
            width={430}
            height={430}
          />
        
          <div className="absolute top-32 px-[100px] ">
            <div className="flex flex-col gap-8">
                <h1 className="text-white font-semibold text-5xl top-1/3 ">Meaningful Investments in
                   <br /> Main Street businesses</h1>
                <p className="text-white ">Browse vetted investment offerings in <br />
                   communities all over the US.
                </p>
                <Button className='bg-[#128C76] rounded-none px-[94px]  h-[50px]  hover:bg-[#128C76] hover:opacity-[0.8]  w-28'>Get Started</Button>
            </div>
          </div>
        </div>
       <div className="absolute right-1 top-80">
          <Image 
            src="/asset/images/6.svg"
            alt="image"
            width={300}
            height={300}
          />
        </div>
    </div>
  );
}
