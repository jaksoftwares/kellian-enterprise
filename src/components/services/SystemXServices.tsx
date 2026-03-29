import { ceramicCoatingServices, systemXInteriorCoatingServices } from '@/lib/constants'
import { T_SystemXInteriorCoatingService } from '@/lib/types'
import { Check } from 'lucide-react'
import React from 'react'
import SectionTitleWithRedUnderline from './SectionTitleWithRedUnderline'

const SystemXServices = () => {
    return (
        <div id='system-x-services'>
            <div className='text-center'>
                <SectionTitleWithRedUnderline title='System X Services' />
            </div>

            <div className='flex justify-between flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-10'>
                <SystemXServiceCard
                    variant='ceramic'
                    title='Ceramic Coating'
                    description='We provide System X services, giving your car high levels of slickness, gloss, durability, and chemical resistance.'
                    items={ceramicCoatingServices}
                />

                <SystemXServiceCard
                    variant='system'
                    title='System X Interior Coating'
                    description='We provide System X services, giving your car high levels of slickness, gloss, durability, and chemical resistance.'
                    items={systemXInteriorCoatingServices}
                />
            </div>
        </div>
    )
}


interface SystemXServiceCardProps {
    title: string,
    description: string,
    items: T_SystemXInteriorCoatingService[],
    variant: "ceramic" | "system",
}

const SystemXServiceCard: React.FC<SystemXServiceCardProps> = ({
    title,
    description,
    items,
    variant,
}) => {

    return (
        <div className='bg-gray-200 p-5 rounded-lg space-y-4'>
            <h4 className='text-customBlue text-2xl font-semibold'>{title}</h4>
            <p>{description}</p>
            <ul>
                {items.map((item, index) => {
                    return (
                        <li key={index} className='flex gap-x-2'>
                            <Check />
                            {variant === "ceramic"
                                ?
                                <>
                                    <span>{item.title}.</span>
                                </>
                                :
                                <div>
                                    <span className='font-semibold'>{item.title}: </span>
                                    <span>{item.description}.</span>
                                </div>
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SystemXServices
