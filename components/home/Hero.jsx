import Link from 'next/link';
import React from 'react';
import { Poppins, Passion_One,Inter } from 'next/font/google';


const fontPoppins = Poppins({subsets: ['latin'], weight: "400"});
const fontPassionOne = Passion_One({subsets: ['latin'], weight: "400"});
const FontInter = Inter({subsets: ['latin'], weight: "700"});

const Hero = () => {
  return (
    <div className="py-[200px] lg:py-[300px] bg-[url('/hero.png')] bg-right bg-no-repeat">
        <div className="container mx-auto px-4 xl:px-0">
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-10 xl:col-span-7">
                    <div className={`bg-gradient-to-r from-[#C10505] to-[#045EE1] max-w-max rounded-md py-2 px-[30px] text-[24px] ${fontPoppins.className} mb-[30px]`}>Welcome to Kuantum</div>
                    <h1 className={`text-[50px] leading-[45px] md:text-[60px] md:leading-[65px] xl:text-[80px] xl:leading-[75px] ${fontPassionOne.className} mb-7`}>Profesional IT Solution</h1>
                    <Link className={`px-[32px] py-[11px] bg-[#045EE1] rounded-[5px] ${FontInter.className} hover:bg-gradient-to-br from-[#045EE1] to-[#C10505]`} href="/contact">Hire Me</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
