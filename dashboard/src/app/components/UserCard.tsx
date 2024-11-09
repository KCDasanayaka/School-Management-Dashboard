import React from 'react'
import more from "../../../public/more.png"
import Image from 'next/image'

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl min-w-130px odd:bg-lamaPurple even:bg-lamaYellow p-4  text-black flex-1'>
     <div className="flex justify-between items-center">
        <span className='text-10px bg-white px-2 py-0.5 rounded-full text-green-500 p-2 my-1'>2024/25</span>
        <Image src={more} alt="" width={20} height={20}/>
     </div>
     <h1 className='text-2xl font-semibold my-2'>1,234</h1>
     <h2 className='capitalize text-sm font-medium text-gray-500'>{type}</h2>
    </div>
  )
}

export default UserCard
