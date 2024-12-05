'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';

export interface CardType {
  id: string;
  name: string;
  location: string;
  description: string;
  tags: string[];
  cardImage: string;
  getPrice: number;
  totalPrice: number;
  securityType: string;
  investMentMultiple: number;
  maturity: number;
  minInvestment: number;
}

export default function ProductCard({ data }: { data: CardType[] }) {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const hoverDetailsVariants = {
    initial: { opacity: 0, height: 0 },
    animate: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        type: "tween"
      }
    }
  };

  return (
    <div className="grid grid-cols-3 gap-8">
      {data.slice(0, 6).map((card) => { 
        const progressPercentage = (card.getPrice / card.totalPrice) * 100;
        const isHovered = hoveredCardId === card.id;
        
        return (
          <motion.div 
            key={card.id} 
            className="flex"
            onMouseEnter={() => setHoveredCardId(card.id)}
            onMouseLeave={() => setHoveredCardId(null)}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Card className="w-[300px] h-[370px] rounded-none flex flex-col relative overflow-hidden shadow-xl">
              {!isHovered && (
                <CardHeader className="p-0">
                  <div className="relative w-full h-48">
                    <div className="absolute z-10 top-2 left-2 flex gap-2">
                      {card.tags.slice(0, 2).map((tag) => ( 
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="bg-white text-gray-800 text-xs font-medium px-2.5 py-1.5"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <Image
                      src={card.cardImage}
                      alt={card.name}
                      height={200}
                      width={300}
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
              )}
              <CardContent className="flex flex-col flex-grow">
                <div className="flex flex-col justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold">{card.name}</h2>
                    <p className="text-sm text-gray-600">{card.location}</p>
                  </div>
                  <p className="text-[12.1px] font-semibold text-gray-700">
                    {card.description}
                  </p>
                  <div>
                    <Progress
                      className="h-2 bg-gray-200 rounded-none"
                      value={progressPercentage}
                      color="#128B76"
                    />
                    <p className="text-[14px] font-semibold text-gray-700">
                      <span className="text-emraldGreen text-base font-bold">
                        ${card.getPrice.toLocaleString('en-US')}
                      </span>{" "}
                      raised of ${card.totalPrice.toLocaleString('en-US')}
                    </p>
                  </div>
                </div>
                
                <AnimatePresence>
                  {isHovered && (
                    <motion.div 
                      className="mt-5 flex flex-col gap-2"
                      variants={hoverDetailsVariants}
                      initial="initial"
                      animate="animate"
                      exit="initial"
                    >
                      <Separator/>
                      <div className='flex flex-col gap-1 mt-4'>
                        <p className='flex justify-between text-sm'>
                          <span>Security Type</span>
                          <span className='font-medium'>{card.securityType}</span>
                        </p>
                        <p className='flex justify-between text-sm'>
                          <span>Investment Multiple</span>
                          <span className='font-medium'>{card.investMentMultiple}</span>
                        </p>
                        <p className='flex justify-between text-sm'>
                          <span>Maturity</span>
                          <span className='font-medium'>{card.maturity}</span>
                        </p>
                        <p className='flex justify-between text-sm'>
                          <span>Min Investment</span>
                          <span className='font-medium'>{card.minInvestment}</span>
                        </p>
                      </div>
                      <Button 
                        className="w-full bg-rosePink hover:bg-rosePink rounded-none h-11 absolute bottom-0 left-0"
                      >
                        View
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
