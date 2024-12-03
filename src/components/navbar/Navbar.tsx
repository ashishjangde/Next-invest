import React from 'react'
import Link from 'next/navigation'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from '../ui/button'

export default function Navbar() {
  return (
    <nav className='flex justify-around items-center bg-white h-20 shadow-md '>
      <div>    
         <Image 
         src="/asset/images/4.svg"
         height={170}  
         width={170}
         alt="logo"
      />
      </div>
      
      <div className='flex justify-around items-center gap-4'>
        <div>
        <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
          <NavigationMenuTrigger>Investment Opportunity</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <NavigationMenuTrigger>How it works</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <div className='bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none'>About Us</div>
          </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        </div>
        <div className='flex justify-center items-center gap-2'>
         <Button className='bg-[#128C76] rounded-none w-24 h-11 hover:bg-[#128C76] hover:opacity-[0.8]'>Login</Button>
         <Button className="border border-pink-600 text-pink-600 bg-white rounded-none w-24 h-11 hover:bg-pink-500 hover:text-white">
          Register
        </Button>

        </div>
      </div>
    </nav>
  )
}
