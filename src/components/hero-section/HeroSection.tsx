import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";


export default function HeroSection() {
  return (
    <div className="relative">
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
            width={400}
            height={400}
          />
        
          <div className="absolute top-[100px] px-[110px] ">
            <div className="flex flex-col gap-8">
                <h1 className="text-white font-semibold text-5xl top-1/3 ">Meaningful Investments in
                   <br /> Main Street businesses</h1>
                <p className="text-white text-base ">Browse vetted investment offerings in <br />
                   communities all over the US.
                </p>
                <Button className='bg-emraldGreen my-4 rounded-none px-[94px]  h-[50px]  hover:bg-emraldGreen hover:opacity-[0.9]  w-28'>GET STARTED</Button>
            </div>
          </div>
        </div>
       <div className="absolute right-1 top-[210px]">
          <Image 
            src="/asset/images/6.svg"
            alt="image"
            width={400}
            height={400}
          />
        </div>
    </div>
  );
}
