"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/logo.png';
import Link from 'next/link';
import { menu } from '@/data/menu';
import { HiOutlineX, HiOutlineMenuAlt3 } from "react-icons/hi";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentPage = usePathname();
  const newUrl = currentPage.split('/');
  console.log(newUrl);
  const [show, setShow] = useState(false)

  return (
    <section className={`${currentPage !== '/' ? 'border-b-[1px] border-white' : ''}`}>
        <div className="container mx-auto px-4 2xl:px-0">
          <div className='py-10  flex justify-between items-center'>
            <Image src={Logo} alt='Logo' priority />

            <HiOutlineMenuAlt3
              className='text-white cursor-pointer lg:hidden'
              size={30}
              onClick={(prev) => setShow(!prev.show)}
            />

            <div className={`fixed lg:relative bg-black lg:bg-transparent top-0 w-full h-screen lg:h-auto ${show ? 'right-0' : '-right-full'} lg:right-0 flex gap-10 flex-col lg:flex-row justify-center lg:justify-end items-center transition-all duration-300 top_nav`}>

              <HiOutlineX
                className='text-white absolute top-7 right-7 cursor-pointer lg:hidden'
                size={30}
                onClick={(prev) => setShow(prev.show)}
              />

              {menu.map((item, i) => {
                return (
                  <Link
                    className={`/${newUrl[1]}` == item.url ? "active" : ""}
                    key={i}
                    href={item.url}>
                    {item.label}
                  </Link>
                )
              })}

            </div>
          </div>
        </div>
      </section>
  )
}

export default Navbar
