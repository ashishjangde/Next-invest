import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ChevronRight, ChevronUp } from 'lucide-react';
import { Input } from '../ui/input';

export default function Footer() {
  return (
    <footer className="bg-[#ECECEC] text-gray-800 py-12 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="space-y-4 text-center md:text-left">
          <h1 className='text-3xl font-semibold text-gray-800 dark:text-gray-100'>NextInvest</h1>
          <p className='text-xs text-gray-600'>
            Copyright © {new Date().getFullYear()} NextInvest. All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <nav>
            <ul className="">
              <li>
                <Link href="/services/email-marketing">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/campaigns">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link href="/services/branding">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/services/offline">
                  Offline
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">About</h4>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link href="/about/our-story">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about/benefits">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/about/team">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about/careers">
                  Careers
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <Link href="#top" className="mb-6">
            <Button 
              aria-label="Scroll to top" 
              className='bg-emraldGreen hover:bg-emraldGreen hover:opacity-80 rounded-full w-12 h-12 flex items-center justify-center'
            >
              <ChevronUp />
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto   mt-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex flex-col items-center space-y-4 w-full md:w-auto">
            <p className="text-center font-sans text-xl fongt-bold">Subscribe to our newsletter</p>
            <div className='flex items-center'>
            <Input 
              placeholder="Email Address" 
              className="rounded-r-none min-w-60 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
              <Button 
                className='bg-rosePink hover:bg-rosePink hover:opacity-80 rounded-l-none flex items-center justify-center'
              >
                <ChevronRight />
              </Button>
            </div>
          </div>

          <div className="flex space-x-4 mt-6 md:mt-0">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
              <Image
                src="/asset/icons/001-facebook.svg"
                alt="Facebook"
                width={10}
                height={10}
              />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
              <Image
                src="/asset/icons/003-twitter.svg"
                alt="Twitter"
                width={20}
                height={20}
              />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
              <Image
                src="/asset/icons/004-instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}