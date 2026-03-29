import Image from 'next/image';
import React from 'react'

const AboutKellian = () => {
    return (
        <div className='flex flex-col justify-between lg:flex-row gap-2 lg:gap-0'>
            <div className='lg:w-3/5 space-y-2 lg:space-y-5'>
                <h2 className='text-primary md:text-xl'>ABOUT KELLIAN ENTERPRISES</h2>
                <p className='text-customBlue text-4xl md:text-6xl'>We are a garage that is focused on your needs</p>
                <p>
                    At Kellian Auto Garage, we pride ourselves on delivering top-notch automotive solutions to our customers.
                    Located in Nairobi, Kenya, we are your trusted partner in ensuring that your vehicle performs at its best
                    every time you hit the road. With a team of highly skilled professionals and years of industry experience,
                    we offer a range of services to meet all your car maintenance and repair needs.
                </p>
            </div>

            <Image
                src={"/home/about-us.png"}
                alt='Man fixing engine'
                width={500}
                height={200}
                className='rounded-xl'
            />

        </div>
    )
}


export default AboutKellian;
