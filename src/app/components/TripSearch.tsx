"use client"

import Button from '@/components/Button'
import DataPicker from '@/components/DataPicker'
import Input from '@/components/Input'
import React from 'react'
import CurrencyInput from 'react-currency-input-field'

const TripSearch = () => {
  return (
    <div className='container mx-auto justify-center p-5 bg-search-bg bg-cover bg-center bg-no-repeat'>
        <h1 className='font-semibold text-xl text-primaryDark text-center'>Encontre sua próxima <span className='text-primary'>viagem!</span></h1>
        <div className="flex flex-col gap-4 mt-4">
            <Input placeholder='Onde você quer ir?'/>

            <div className="flex gap-4">
                <DataPicker placeholderText='Data de ida' onChange={() => {}} className='w-full'/>
                <CurrencyInput prefix='R$' placeholder='Orçamento' className='rounded-lg border shadow-sm bg-white p-2 text-sm font-normal text-primaryDark placeholder-black placeholder-opacity-20 outline-none transition-all focus:ring-1 focus:ring-primary'/>
            </div>
            <Button>Buscar</Button>
        </div>
    </div>
  )
}

export default TripSearch