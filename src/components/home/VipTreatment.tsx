import { treatments } from '../../lib/constants'
import { T_BasicSomething } from '../../lib/types'
import Image from 'next/image'
import React from 'react'


const VipTreatment = () => {
    return (
        <div className='space-y-20 py-24'>
            <h2 className='text-customBlue text-center text-4xl md:text-6xl'>Your car deserves <span className='text-primary'>THE VIP TREATMENT</span></h2>

            <div className='flex justify-between items-center gap-5 flex-col lg:flex-row lg:w-4/5 lg:mx-auto'>
                <Image
                    src={"/home/vip-treatment.png"}
                    alt='Man spray washing car'
                    width={400}
                    height={300}
                    className='rounded-xl'
                />

                <ul className='lg:w-7/12 flex flex-col justify-between'>
                    {treatments.map(treatment => (<VipTreatmentCard key={treatment.title} treatment={treatment} />))}
                </ul>
            </div>
        </div>
    )
}

interface VipTreatmentCardProps {
    treatment: T_BasicSomething,
}

const VipTreatmentCard: React.FC<VipTreatmentCardProps> = ({
    treatment
}) => {
    const {
        imageUrl,
        title,
        description,
    } = treatment;

    return (
        <li className='rounded-xl px-5 md:px-0 py-5 flex flex-col text-center lg:flex-row lg:text-left gap-2 items-center'>
            {/* <Image
                src={imageUrl!}
                alt={description}
                width={150}
                height={150}
            /> */}
            <div>
                <h3 className='text-customBlue font-semibold lg:text-2xl'>{title}</h3>
                <p>{description}</p>
            </div>
        </li>
    );
}

export default VipTreatment
