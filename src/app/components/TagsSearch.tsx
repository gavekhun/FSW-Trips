import React from 'react'
import {LiaHotelSolid} from 'react-icons/lia'

const TagsSearch = () => {
  return (
    <div className='container mx-auto p-5 '>
        <div className='flex items-center'>
            <div className='w-full h-[1px] bg-secondaryLightGray'></div>
            <h2 className='px-5 font-medium text-secondaryGray whitespace-nowrap'>Tente pesquisar por</h2>
            <div className='w-full h-[1px] bg-secondaryLightGray'></div>
        </div>
        <div className="flex w-full justify-between mt-5">
            <div className="flex flex-col items-center gap-1">

                <LiaHotelSolid size={41} className='text-secondaryGray'/>
                <p className='text-sm text-secondaryGray'>Hotel</p>

            </div>
            <div className="flex flex-col items-center gap-1">

                <LiaHotelSolid size={41} className='text-secondaryGray'/>
                <p className='text-sm text-secondaryGray'>Chalés</p>

            </div>
            <div className="flex flex-col items-center gap-1">

                <LiaHotelSolid size={41} className='text-secondaryGray'/>
                <p className='text-sm text-secondaryGray'>Pousadas</p>

            </div>
            <div className="flex flex-col items-center gap-1">

                <LiaHotelSolid size={41} className='text-secondaryGray'/>
                <p className='text-sm text-secondaryGray'>Resorts</p>

            </div>
        </div>

    </div>
  )
}

export default TagsSearch