import React from 'react'
import Image from 'next/image'

export default function InvestmentDetailSection() {
  return (
    <section className='bg-customLightBlue w-full h-[500px] mt-14 relative flex items-center justify-center'>
      {/* Left side background image */}
      <div className='absolute left-0 bottom-0'>
        <Image
          src="/asset/images/1.svg"
          alt="Background decoration"
          width={500}
          height={500}
        />
      </div>

      {/* Top right small image */}
      <div className='absolute right-36 top-0'>
        <Image
          src="/asset/images/14.svg"
          alt="Decorative element"
          width={120}
          height={80}
        />
      </div>

      {/* Bottom right small image */}
      <div className='absolute right-36 bottom-28'>
        <Image
          src="/asset/images/15.svg"
          alt="Decorative element"
          width={30}
          height={25}
        />
      </div>

      {/* Content container */}
      <div className='absolute flex items-center justify-center w-full px-4'>
        <div className='flex items-center space-x-8 max-w-6xl'>
          <div className='flex flex-col items-start space-y-4'>
            <Image
              src="/asset/images/Subtract.svg"
              alt="Subtract icon"
              width={30}
              height={25}
            />
            <div>
              <h1 className='text-3xl font-bold mb-4'>
                $7M+ paid out to <br /> investors 
              </h1>
              <p className='text-base text-gray-400'>
                Next Invest has already paid over $7M in cash <br />
                returns to investors. Earn potential cash payments <br />
                through unique revenue-share and debt financing <br />
                investments.
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/asset/images/16.svg"
              alt="Investment illustration"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  )
}