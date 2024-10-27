import React from 'react';
import Image from 'next/image';
import banner from '../../public/about/banner.png';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { blog } from '@/data/blog';


const poppins  = Poppins({subsets: ['latin'], weight: "600"});
const Blog = () => {
  return (
    <section>
      <div>
        <div className="banner-page">
          <Image src={banner} alt="banner" className='w-full' />
        </div>
        <div className="container mx-auto px px-4 py-16 2xl:px-0">
          <h2 className={`title-page ${poppins.className}`}>About Us</h2>
            <div className="grid grid-cols-3 gap-y-8 gap-x-4">
              {blog.map((item, i) => {
                return (
                  <div key={i} className="item-blog">
                    <div className="thumb w-100 h-[261px] relative mb-[20px]">
                      <Image src={item.thumbnail} alt="thumbnail" fill/>
                    </div>
                    <h2 className={`text-[30px] font-bold ${poppins.className} leading-[35px] mb-4`}>{item.title}</h2>
                    <p className='text-[16px]'>{item.desc}</p>
                    <div className='text-right mt-4'>
                      <Link href={item.url} className='underline'> Read More </Link>
                    </div>
                  </div>
                )})}
            </div>

          <div className="mt-8">
              <ul className='pagination flex justify-center items-center'>
                <li className=''>
                  <Link className='' href="#">1</Link>
                </li>
                <li>
                  <Link href="#">2</Link>
                </li>
                <li>
                  <Link href="#" className='text-black font-bold'>3</Link>
                </li>
                <li>
                  <Link href="#">4</Link>
                </li>
                <li>
                  <Link href="#">5</Link>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
