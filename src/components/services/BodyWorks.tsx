import { bodyWorks } from '@/lib/constants'
import { T_BasicSomething } from '@/lib/types'
import Image from 'next/image'
import React from 'react'
import SectionTitleWithRedUnderline from './SectionTitleWithRedUnderline'

const BodyWorks = () => {
    return (
        <div className='space-y-10 bg-gray-200 px-5 py-10 lg:px-32 lg:py-24' id='body-work'>
            <SectionTitleWithRedUnderline title="Body Work" />
            <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {bodyWorks.map((bw, index) => <BodyWork key={index} bw={bw} />)}
            </ul>
        </div>
    )
}


interface BodyWorkProps {
    bw: T_BasicSomething,
}

const BodyWork: React.FC<BodyWorkProps> = ({
    bw,
}) => {
    const {
        imageUrl,
        title,
        description,
    } = bw;
    return (
        <li className='border-2 border-black rounded-lg flex flex-col items-center justify-center px-10 py-5'>
            <Image
                src={imageUrl!}
                alt={title}
                width={100}
                height={100}
            />

            <h4 className='text-xl text-customBlue font-semibold'>{title}</h4>
            <p className='text-lg'>{description}</p>
        </li>
    )
}

export default BodyWorks
