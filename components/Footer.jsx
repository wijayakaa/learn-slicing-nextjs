import React from 'react';
import Image from 'next/image';
import linkedin from '../public/IcLinkedin.svg';
import facebook from '../public/IcFacebook.svg';
import telegran from '../public//IcTelegram.svg';
import twitter from '../public/IcTwitter.svg';

const Footer = () => {
  return (
    <div className='bg-[#0F0F0F]'>
        <div className="container mx-auto px-4 2xl:px-0">
            <div className='flex flex-col justify-center items-center md:flex-row md:justify-between gap-[15px] py-[50px]'>
              <div>Kuanta 2023</div>
                <div className="socmed flex justify-end items-center gap-[12px]">
                    <a href="#"><Image src={facebook} alt="fb"/></a>
                    <a href="#"><Image src={telegran} alt="telegram"/></a>
                    <a href="#"><Image src={twitter} alt="twitter"/></a>
                    <a href="#"><Image src={linkedin} alt="linkedin"/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
 