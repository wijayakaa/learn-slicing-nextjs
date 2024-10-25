import Image from 'next/image';
import React from 'react';
import banner from '../../public/about/banner.png';
import { Poppins } from 'next/font/google';


const poppins  = Poppins({subsets: ['latin'], weight: "600"});
const About = () => {
  return (
    <div>
      <div className="banner-page">
        <Image src={banner} alt="banner" className='w-full' />
      </div>
      <div className="container mx-auto px px-4 py-16 2xl:px-0">
        <article>
          <h2 className={`title-page ${poppins.className}`}>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in euismod ipsum, sagittis condimentum ex. Sed aliquam tellus malesuada nunc semper pulvinar. Mauris ac metus vel neque venenatis cursus ac mollis orci. Mauris auctor nec dui vel suscipit. Mauris varius massa ut tellus pretium fermentum. Sed lobortis mattis lorem, eu viverra est. Quisque non aliquam mi, non finibus arcu. Sed maximus odio nibh, et elementum mauris varius at. Nam congue nibh tortor. Etiam iaculis ante eu iaculis ultrices. Aliquam sed magna magna. Aliquam tellus justo, egestas et erat vitae, mattis molestie augue.
          </p>
          <p>
            Fusce egestas eget leo nec dapibus. Morbi feugiat mi nec tellus faucibus, dignissim feugiat lectus interdum. Sed dolor libero, mollis cursus convallis quis, ullamcorper eget felis. Suspendisse sit amet dolor diam. Pellentesque venenatis vulputate urna a scelerisque. Donec id tortor et ipsum ultrices bibendum. Sed laoreet volutpat odio. Proin a lobortis quam, vel malesuada nulla. Proin nec molestie sem. Duis sed nisi faucibus, molestie tortor sed, ullamcorper dolor. Ut at purus et nibh pretium eleifend non vitae mi. Donec vulputate eu nunc nec fermentum. Aenean nec fermentum purus. Phasellus ac quam lacus. Nam bibendum porttitor neque, quis molestie ante ullamcorper vel. In hac habitasse platea dictumst.
          </p>
          <p>
            Suspendisse vestibulum non lectus in mollis. Nulla interdum vulputate sem, ut finibus leo tristique tincidunt. Duis non lectus a purus suscipit faucibus ut vel turpis. Integer et cursus metus. Duis sodales posuere purus at facilisis. Donec ac mi non mi sodales efficitur sed nec tortor. Mauris ultricies molestie tortor vitae scelerisque. Aliquam vulputate libero a velit accumsan vehicula.
          </p>
        </article>
      </div>
    </div>
  )
}

export default About
