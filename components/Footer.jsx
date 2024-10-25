import React from 'react';
import Image from 'next/image';
import linkedin from '../public/IcLinkedin.svg';
import facebook from '../public/IcFacebook.svg';
import telegran from '../public//IcTelegram.svg';
import twitter from '../public/IcTwitter.svg';

const Footer = () => {
  return (
    <div className='bg-[#0F0F0F] mx-auto px-0 2xl:px-4'>
        <div className="container">
            <div className='flex justify-between items-center'>
                <div> webdevindo©Copyright 2023</div>
                <div className="socmed flex justify-end items-center gap-0">
                    <a href="#"><Image src={linkedin} alt="linkedin"/></a>
                    <a href="#"><Image src={telegran} alt="telegram"/></a>
                    <a href="#"><Image src={twitter} alt="twitter"/></a>
                    <a href="#"><Image src={facebook} alt="fb"/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
 