import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';
import { ChevronUp } from 'lucide-react';
export default function Footer() {
  return (
    <div className="bg-[#ECECEC] text-gray-800 py-6 mt-12">

  
    <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="space-y-4 text-center md:text-left">
      <h1 className='text-3xl font-semibold text-gray-800 dark:text-gray-100'>NextInvest</h1>
        <p className='text-xs'>
       Copyright © 2020 NextInvest. All Rights Reserved.
        </p>
      </div>
      <div className="space-y-4 text-center md:text-left">
        <h4 className="text-lg font-semibold">Services</h4>
        <ul className="space-y-2">
          <li><Link href="/">Email Marketing</Link></li>
          <li><Link href="/">Campaigns</Link></li>
          <li><Link href="/">Branding</Link></li>
          <li><Link href="/">Offline</Link></li>
        </ul>
      </div>
      <div className="space-y-4 text-center md:text-left">
        <h4 className="text-lg font-semibold">About</h4>
        <ul className="space-y-2">
          <li><Link href="/">Our Story</Link></li>
          <li><Link href="/">Benifits</Link></li>
          <li><Link href="/">Team</Link></li>
          <li><Link href="/">Careers</Link></li>
        </ul>
      </div>
      <div>
        <Link href="/">
        <Button className='bg-emraldGreen hover:bg-emraldGreen hover:opacity-[0.8] rounded-full w-12 h-12 flex items-center justify-center'>
      <ChevronUp />
    </Button>
        </Link>
      </div>
    </div>  
    <div>
    <div className="container mx-auto mt-12 flex items-center justify-center">
    <div>
      <p>Subscribe to our newsletter</p>
    </div>
    <div>
      <input></input>
      </div>
    </div>
    </div>
  </div>
  )
}
