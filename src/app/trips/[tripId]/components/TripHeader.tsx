import { prisma } from '@/lib/prisma';
import { Trip } from '@prisma/client';
import Image from 'next/image';
import React from 'react'
import { ReactCountryFlag } from 'react-country-flag';

interface TripHeaderProps {
    trips: Trip
}

const TripHeader = ({trips}: TripHeaderProps) => {
  return (
    <div className='flex flex-col'>
      <div className='relative h-[300px] w-full'>
        <Image src={trips?.coverImage} fill style={{objectFit: 'cover'}}alt={trips.name} />

      </div>
      <div className="flex flex-col p-5">
        <h1 className='font-semibold text-xl text-primaryDark'>{trips.name}</h1>
        <div className="flex items-center gap-2 my-1">
            <ReactCountryFlag countryCode={trips.countryCode} svg/>
            <p className='text-xs text-secondaryGray underline'>{trips.location}</p>            
        </div>
        <p className='text-xs text-secondaryGray '>
          <span className='text-primary font-medium'>R${trips.pricePerDay.toString()}</span> por dia
        </p>
      </div>
      
    </div>
  )
}

export default TripHeader