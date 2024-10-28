import Image from 'next/image';
import React from 'react';
import banner from '../../../public/about/banner.png';
import { Poppins } from 'next/font/google';


const poppins = Poppins({ subsets: ['latin'], weight: "600" });
const page = () => {
    return (
        <div>
            <div className="banner-page">
                <Image src={banner} alt="banner" className='w-full' />
            </div>
            <div className="container mx-auto px px-4 py-16 2xl:px-0">
                <article>
                    <h2 className={`title-page ${poppins.className}`}>Lorem ipsum dolor sit amet,<br /> consectetur</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non magna a nunc consequat ullamcorper non vel risus. Vivamus in enim non lectus gravida porta vel at metus. Vestibulum vel molestie ligula. Nunc ut nisi malesuada, finibus nulla in, volutpat sem. Nullam malesuada ut ipsum at lacinia. Morbi mollis, enim eget aliquet scelerisque, augue nisi fringilla elit, id convallis odio metus vel mauris. Fusce commodo lacus in lacus efficitur tristique. Nullam nisl justo, lobortis vel nisl iaculis, posuere posuere lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique ut magna a semper. Quisque dictum aliquet dui at commodo. Suspendisse dictum velit pretium ultrices ullamcorper.
                    </p>
                    <p>
                        Vivamus vitae diam id metus auctor interdum. Etiam vitae arcu euismod, pulvinar lacus tempor, dapibus lacus. Praesent vitae venenatis augue. Integer iaculis, est vitae consequat finibus, tellus quam dapibus nunc, a egestas lorem orci ut nisi. Vivamus ut ornare nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam blandit, massa ac imperdiet vestibulum, eros arcu facilisis dolor, euismod pellentesque dui justo at nunc. Etiam tincidunt porttitor urna vitae iaculis. In vel sem eget lorem consequat pulvinar non quis libero. Aliquam ullamcorper bibendum velit in suscipit. Suspendisse ut sem a lorem venenatis lobortis. In pretium vestibulum lectus, vel condimentum erat lacinia sit amet. Sed ultricies vestibulum enim sed sagittis. Sed quis dui sed arcu elementum pretium.
                    </p>
                    <p>
                        Proin euismod ligula iaculis ligula sodales, ac placerat metus ornare. Maecenas sed gravida nisi. Nam sed est nunc. Quisque egestas urna et nunc pulvinar dictum. Quisque tincidunt leo sit amet est gravida viverra. Cras volutpat lectus vitae gravida rhoncus. Nunc aliquam aliquam dui, id scelerisque orci rhoncus ut. Proin pellentesque massa nec pretium congue. In maximus ex massa, vitae congue libero sollicitudin sit amet. Nulla porta hendrerit eros, id facilisis dolor tincidunt et. Suspendisse eu magna auctor diam accumsan gravida. Nam orci ante, tincidunt sit amet finibus fringilla, rutrum non turpis. Nunc nec ipsum orci. Aenean ultricies ac ligula eget imperdiet.
                    </p>
                    <p>
                        Sed et nisi sed sapien euismod lobortis quis nec urna. Proin dapibus lacus dolor. Maecenas sem nibh, condimentum id aliquam at, pretium quis metus. Etiam pellentesque convallis mauris, ut imperdiet odio mollis in. Nullam non nisi ornare, consectetur metus vel, rutrum quam. Duis dolor enim, pellentesque non tellus in, dictum ultrices purus. Nunc blandit lacinia tortor molestie ultricies. Maecenas sodales orci vel neque posuere, ut luctus elit vulputate. Vestibulum feugiat elit vel est congue luctus.
                    </p>
                </article>
            </div>
        </div>
    )
}

export default page
