import React from 'react';
import Image from 'next/image';
import ProductCard from '../product-card/ProductCard';
import { CardType } from '../product-card/ProductCard';
import { Button } from '../ui/button';

const products : CardType[] = [
 {
    id : '1',
    name : 'Oxalis',
    location : 'Brooklyn, NY',
    description : 'A recognized leader in language immersion & early education, opening second school.',
    tags : ['HOUSE', 'FAMILY BUISNESS'],
    cardImage : '/asset/images/10.svg',
    getPrice : 574920,
    totalPrice : 1000000,
    securityType: 'Revenue Sharing Note',
    investMentMultiple : 1.4,
    maturity : 48,
    minInvestment : 100
 },
 {
    id : '2',
    name : 'Oxalis',
    location : 'Brooklyn, NY',
    description : 'A recognized leader in language immersion & early education, opening second school.',
    tags : ['HOUSE', 'FAMILY BUISNESS'],
    cardImage : '/asset/images/10.svg',
    getPrice : 574920,
    totalPrice : 1000000,
    securityType: 'Revenue Sharing Note',
    investMentMultiple : 1.4,
    maturity : 48,
    minInvestment : 100
 },
 {
    id : '3',
    name : 'Oxalis',
    location : 'Brooklyn, NY',
    description : 'A recognized leader in language immersion & early education, opening second school.',
    tags : ['HOUSE', 'FAMILY BUISNESS'],
    cardImage : '/asset/images/10.svg',
    getPrice : 574920,
    totalPrice : 1000000,
    securityType: 'Revenue Sharing Note',
    investMentMultiple : 1.4,
    maturity : 48,
    minInvestment : 100
 },
 {
    id : '4',
    name : 'Oxalis',
    location : 'Brooklyn, NY',
    description : 'A recognized leader in language immersion & early education, opening second school.',
    tags : ['HOUSE', 'FAMILY BUISNESS'],
    cardImage : '/asset/images/10.svg',
    getPrice : 574920,
    totalPrice : 1000000,
    securityType: 'Revenue Sharing Note',
    investMentMultiple : 1.4,
    maturity : 48,
    minInvestment : 100
 },
 {
    id : '5',
    name : 'Oxalis',
    location : 'Brooklyn, NY',
    description : 'A recognized leader in language immersion & early education, opening second school.',
    tags : ['HOUSE', 'FAMILY BUISNESS'],
    cardImage : '/asset/images/10.svg',
    getPrice : 574920,
    totalPrice : 1000000,
    securityType: 'Revenue Sharing Note',
    investMentMultiple : 1.4,
    maturity : 48,
    minInvestment : 100
 },
 {
    id : '6',
    name : 'Oxalis',
    location : 'Brooklyn, NY',
    description : 'A recognized leader in language immersion & early education, opening second school.',
    tags : ['HOUSE', 'FAMILY BUISNESS'],
    cardImage : '/asset/images/10.svg',
    getPrice : 574920,
    totalPrice : 1000000,
    securityType: 'Revenue Sharing Note',
    investMentMultiple : 1.4,
    maturity : 48,
    minInvestment : 100
 },
];

export default function ProductSection() {
  return (
    <div className="relative flex">
     
      <div className="absolute left-8 top-[500px] h-full w-1/4">
        <Image 
          src="/asset/images/Shape.svg"
          alt="background shape"
          width={150}   
          height={150}
        />
      </div>

      {/* Content Section */}
      <div className="w-full pl-[15%] pr-[15%]">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-4 mt-16">
          <h1 className="text-gray-800 font-bold text-4xl">
            Offerings open for investment
          </h1>
          <div className="flex justify-center">
            <p className="text-gray-400 text-lg font-normal font-sans text-center">
              Explore pre-vetted investment opportunities available in a growing 
              <br />
              number of industry categories
            </p>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className='mt-16 flex flex-col items-center justify-center gap-24'>
        <div className="container mx-auto mt-16">
          <ProductCard data={products} />
        </div>
        <Button className='border border-rosePink text-rosePink bg-white rounded-none w-40 h-11 hover:bg-rosePink hover:text-white'>
            View All Projects
            </Button>
        </div>
      </div>
    </div>
  );
}
