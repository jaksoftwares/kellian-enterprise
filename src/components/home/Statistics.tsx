"use client";
import { statistics } from '../../lib/constants';
import React from 'react'
import CountUp from 'react-countup'


const Statistics = () => {
    return (
        <ul className='flex justify-between flex-col gap-4 md:flex-row'>
            {statistics.map(({ name, value }) => {
                return (
                    <li key={name} className='lg:w-64'>
                        <div className='text-4xl md:text-4xl lg:text-7xl flex flex-col items-center'>
                            <span className="text-sm md:text-lg lg:text-xl">{name}</span>
                            <div>
                            <CountUp
                                end={value}
                                duration={5}
                                enableScrollSpy={true}
                            />+
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}


export default Statistics;
