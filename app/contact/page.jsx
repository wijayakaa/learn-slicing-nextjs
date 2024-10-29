import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google';


const poppins  = Poppins({subsets: ['latin'], weight: "600"});
const poppinsLight  = Poppins({subsets: ['latin'], weight: "400"});

const Contact = () => {
  return (
    <div className="container mx-auto my-10 px-40">
      <div className='flex gap-10 items-center'>
        <div className='flex-1 w-full h-[728px] relative'>
          <Image src={'/contact.png'} alt='contact' fill={true} />
        </div>
        <div className={`flex-1`}>
          <h2 className={`title-section mb-5 !text-left ${poppins.className}`}>Contact Us</h2>
          <p className={`${poppinsLight.className}`}>Tim kami akan membalas pesan anda dalam waktu 3 hari kerja</p>
          <form className='mt-10 flex flex-col gap-5'>
            <input type='text' placeholder='Nama' className='px-6 w-full py-4 rounded-md outline-none text-black' />
            <input type='email' placeholder='Email' className='px-6 w-full py-4 rounded-md outline-none text-black' />
            <textarea placeholder='Pesan' className='w-full h-[207px] rounded-md outline-none px-6 py-4' />
            <button className='px-4 py-4 rounded-md text-white bg-[#C10505] max-w-max'>kirim pesan</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
