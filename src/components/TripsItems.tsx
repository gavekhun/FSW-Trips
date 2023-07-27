import { Trip } from '@prisma/client'
import React from 'react'
import Image from 'next/image'
import ReactCountryFlag from 'react-country-flag'

interface TripItemsProps {
    trip: Trip

}

const TripsItems = ({trip}: TripItemsProps) => {
  return (
    <div className="flex flex-col gap-1 mt-4">
        <div className="relative h-[280px] w-[280px]">
        <Image src={trip.coverImage}  className='rounded-lg shadow-md' style={{objectFit: "cover"}} fill alt={trip.name}/>
        </div>
        <h3 className='text-primaryDark font-medium text-sm mt-2'>{trip.name}</h3>
        <div className="flex items-center gap-2 my-1">
            <ReactCountryFlag countryCode={trip.countryCode} svg/>
            <p className='text-xs text-secondaryGray'>{trip.location}</p>            
        </div>
        <p className='text-xs text-secondaryGray'><span className='text-primary'>R${trip.pricePerDay.toString()}</span> por dia</p>
    </div>

  )
}

export default TripsItems