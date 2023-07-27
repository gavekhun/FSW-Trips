import TripsItems from '@/components/TripsItems'
import { prisma } from '@/lib/prisma'
import { Trip } from '@prisma/client'
import React from 'react'


const RecommendedTrips = async () => {
    const data = await fetch("http://localhost:3000/hello").then(res => res.json())
  return (
    <div className='container mx-auto p-5'>
        <div className='flex items-center'>
            <div className='w-full h-[1px] bg-secondaryLightGray'></div>
            <h2 className='px-5 font-medium text-secondaryGray whitespace-nowrap'>Recomendados</h2>
            <div className='w-full h-[1px] bg-secondaryLightGray'></div>
        </div>
        <div className="flex flex-col items-center mt-5 gap-3">
        {data.map((trip: Trip) => (<TripsItems key={trip.id} trip={trip}/>))}
        </div>

    </div>
  )
}

export default RecommendedTrips