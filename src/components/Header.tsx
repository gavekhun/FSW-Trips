'use client'
import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'

const Header = () => {
    const [menuIsOpen , setMenuIsOpen ] = React.useState(false)
    const logClick = () => signIn()
    const {status, data} = useSession()
    const menuClick = () => setMenuIsOpen(!menuIsOpen)
    const logoutClick = () => {
      setMenuIsOpen(false)
      signOut()
    }

  return <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center shadow-sm">
    <div className="relative h-[32px] w-[183px]">
    <Image  src="/Logo.png" alt='Logo' fill/>
    </div>
     

    {status == 'unauthenticated' && (<button className='text-primary text-sm font-medium' onClick={logClick}>Login</button>)} 

    {status == 'authenticated' && data.user && (
        <div className='flex items-center gap-2 rounded-3xl shadow-sm border border-solid p-2 relative'> 
            <BiMenu size={24} onClick={menuClick} className='cursor-pointer'/>
            <Image className='rounded-full shadow-sm' height={28} width={28} src={data.user.image!} alt={data.user.name!}/>
            {menuIsOpen && (
              <div className='absolute top-12 left-1 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center'>
                <button className='text-primary text-xs font-medium' onClick={logoutClick} >
                  Logout
                </button>

              </div>
            )}            
        </div>
        
          
        )}
   
  </div>
}

export default Header