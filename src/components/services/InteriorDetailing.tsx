import React from 'react'
import SectionTitleWithRedUnderline from './SectionTitleWithRedUnderline'
import Image from 'next/image'
import { T_BasicSomething } from '@/lib/types'
import { interiorDetailings } from '@/lib/constants'

const InteriorDetailing = () => {
    return (
        <div id='interior-detailing'>
            <SectionTitleWithRedUnderline title='Interior Detailing' />

            <div className='flex justify-between flex-col lg:flex-row lg:px-36 lg:gap-y-0 gap-y-4'>

                <ul className='justify-between flex gap-y-4 flex-col'>
                    {interiorDetailings.map((idr, index) => (<InteriorDetailingRow key={index} idr={idr} />))}
                </ul>

                <Image
                    src={"/home/vip-treatment.png"}
                    alt='Man spray washing car'
                    width={500}
                    height={100}
                    className='rounded-xl h-96'
                />
            </div>
        </div>
    )
}


interface InteriorDetailingRowProps {
    idr: T_BasicSomething,
}

const InteriorDetailingRow: React.FC<InteriorDetailingRowProps> = ({
    idr,
}) => {
    const {
        imageUrl,
        title,
        description,
    } = idr;

    return (
        <li className='flex items-center gap-x-4'>
            <Image
                src={imageUrl!}
                alt={title}
                width={50}
                height={50}
            />

            <div>
                <h4 className='font-semibold text-lg'>{title}</h4>
                <p>{description}</p>
            </div>

        </li>
    )
}

export default InteriorDetailing
