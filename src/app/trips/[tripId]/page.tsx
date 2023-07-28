import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import React from 'react'
import { ReactCountryFlag } from 'react-country-flag';
import TripHeader from './components/TripHeader';

async function getTripDetails(tripId: string) {
  const trips = await prisma.trip.findUnique({
    where:{
      id: tripId,
    },
    include:{
      reservations: true
    }
  })

  return trips;
}

const TripDetails = async ({params}: {params:{tripId: string}}) => {
  const trips = await getTripDetails(params.tripId)

  if(!trips) return null
  return (
    <div className='container mx-auto'>
      <TripHeader trips={trips} /> 

    </div>
    
  )
}

export default TripDetails;