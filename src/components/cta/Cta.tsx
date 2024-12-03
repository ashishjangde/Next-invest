import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

export default function Cta() {
  return (
    <div className='bg-white w-full h-[380px] relative flex items-center mt-16 justify-center'>
        <div className='flex items-center justify-between w-full pl-[15%] pr-[15%]'>
            <div className='flex flex-col gap-6'>
                
                <h1 className='text-gray-800 font-bold text-4xl leading-tight'>Looking to raise capital <br />
                for your growing <br />
                business?
                </h1>
                
                <p className='text-gray-600  font-normal font-sans'>
                   Whether expanding your or opening a brand-new <br />
                   concept, we make it easy to raise money from <br />
                   thousands of local investors. 
                </p>
                <Button className='bg-emraldGreen rounded-none w-48 h-11 hover:bg-emraldGreen hover:opacity-[0.8]'>APPLY ONLINE</Button>
            </div>
            <div>
                <Image
                    src="/asset/images/2.svg"
                    alt="Background decoration"
                    width={400} 
                    height={400} 
                />
            </div>
        </div>
    </div>
  )
}
