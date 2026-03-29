import React from 'react'


interface SectionTitleWithRedUnderlineProps {
    title: string,
}

const SectionTitleWithRedUnderline: React.FC<SectionTitleWithRedUnderlineProps> = ({
    title,
}) => {

    return (
        <h2 className='text-customBlue text-4xl underline decoration-4 decoration-primary my-5 font-semibold'>
            {title}
        </h2>
    )
}

export default SectionTitleWithRedUnderline
