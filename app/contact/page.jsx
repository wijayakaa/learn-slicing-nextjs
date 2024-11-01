"use client";
import React from 'react'
import Image from 'next/image'
import { useRef } from 'react'
import { Poppins } from 'next/font/google';
import emailjs from '@emailjs/browser';
import { useState } from 'react';


const poppins = Poppins({ subsets: ['latin'], weight: "600" });
const poppinsLight = Poppins({ subsets: ['latin'], weight: "400" });

const Contact = () => {
  const formRef = useRef();
  const [loading,setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState({
    nama: '',
    email: '',
    pesan: ''
  })
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        formRef.current,
        process.env.PUBLIC_KEY,
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            setMessage('Pesan berhasil terkirim');
            setInputValue(
              {
                ...inputValue,
                nama: '',
                email: '',
                pesan: ''
              }
            );
            setLoading(false);
            setTimeout(() => {
              setMessage('');
            },3000)
          }
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }
  return (
    <div className="container mx-auto my-10 px-10 xl:px-40">
      <div className='flex gap-10 items-center'>
        <div className='hidden lg:block flex-1 w-full h-[728px] relative'>
          <Image src={'/contact.png'} alt='contact' fill={true} sizes='100%'/>
        </div>
        <div className={`flex-1`}>
          <h2 className={`title-section mb-5 !text-left ${poppins.className}`}>Contact Us</h2>
          <p className={`${poppinsLight.className}`}>Tim kami akan membalas pesan anda dalam waktu 3 hari kerja</p>
          <form onSubmit={handleSubmit} ref={formRef} className='mt-10 flex flex-col gap-5'>
            <input type='text' placeholder='Nama' name='nama' className='px-6 w-full py-4 rounded-md outline-none text-black' value={inputValue.nama} onChange={(e) => setInputValue({ ...inputValue, nama: e.target.value })} />
            <input type='email' placeholder='Email' name='email' className='px-6 w-full py-4 rounded-md outline-none text-black' value={inputValue.email} onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })} />
            <textarea placeholder='Pesan' name='pesan' className='w-full text-black h-[207px] rounded-md outline-none px-6 py-4' value={inputValue.pesan} onChange={(e) => setInputValue({ ...inputValue, pesan: e.target.value })} />
            <button className='px-4 py-4 rounded-md text-white bg-[#C10505] max-w-max'>{loading? "Processing..." : "Kirim Pesan"}</button>
            {message &&
              <div className="p-5 bg-green-300 text-white rounded-md text-center">
                {message}
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;