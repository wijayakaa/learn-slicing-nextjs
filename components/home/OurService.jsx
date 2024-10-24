import React from 'react';
import { services } from '@/data/services';
import Image from 'next/image';
import { Poppins } from 'next/font/google';


const   poppins  = Poppins({subsets: ['latin'], weight: "600"});
const OurService = () => {
  return (
    <div>
      <section className="py-16 bg-[#0F0F0F]">
        <div className="container mx-auto px-4 2xl:px-0">
            <h2 className={`title-section ${poppins.className}`}>Our Awesome Service </h2>
            <p className='text-center max-w-[514px] mx-auto'>There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration.</p>
            <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                {services.map((service, i) => {
                    return  (
                        <div className="item-service py-[30px] px-[38px] bg-black rounded-[24px] " key={i}>
                            <div className="logo-service relative w-[60px] h-[60px] mb-4">
                                <Image src={service.logo} alt={service.title} fill/>
                            </div>
                            <h3 className={`${poppins.className} text-[25px] leading-[37px] mb-3`}>{service.title}</h3>
                            <p className='text-[#6B6B6B]'>{service.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>
    </div>
  )
}

export default OurService
