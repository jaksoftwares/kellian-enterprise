import { servicesButtons } from '@/lib/constants'
import { T_ServiceButton } from '../../lib/types'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const ServicesButtons = () => {
    return (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {servicesButtons.map((service, index) => (
                <ServiceButton key={index} service={service} />
            ))}
        </ul>
    )
}

interface ServiceButtonProps {
    service: T_ServiceButton,
}

const ServiceButton: React.FC<ServiceButtonProps> = ({
    service
}) => {
    const {
        text,
        sectionId,
    } = service;

    return (
        <li>
            <Button
                variant="outline"
                className="min-w-[140px] border-customBlue text-customBlue hover:bg-customBlue hover:text-white duration-300 text-lg"
                asChild
            >
                <Link href={`#${sectionId}`}>
                    {text}
                </Link>
            </Button>
        </li>
    )
}

export default ServicesButtons
