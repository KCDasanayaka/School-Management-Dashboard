import Image from 'next/image'
import React from 'react'

const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
      <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold text-black my-4'>Announcements</h1>
            <span className='text-sm text-gray-400'>View All</span>
            
        </div>
        <div className='flex flex-col gap-4'>
            <div className='bg-lamaSkyLight rounded-md p-4'>
                <div className='flex items-center justify-between'>
                    <h1>Announcement 01</h1>
                    <span className='text-sm text-gray-400 bg-white rounded-md px-2 py-1 font-medium'>2025-11-10</span>
                </div>
                <p className='text-sm text-gray-600 mt-2'>This is a default announcement. Stay tuned for updates!</p>
            </div>
            <div className='bg-lamaPurple rounded-md p-4'>
                <div className='flex items-center justify-between'>
                    <h1>Announcement 01</h1>
                    <span className='text-sm text-gray-400 bg-white rounded-md px-2 py-1 font-medium'>2025-11-10</span>
                </div>
                <p className='text-sm text-gray-600 mt-2'>This is a default announcement. Stay tuned for updates!</p>
            </div>
            <div className='bg-lamaSkyLight rounded-md p-4'>
                <div className='flex items-center justify-between'>
                    <h1>Announcement 01</h1>
                    <span className='text-sm text-gray-400 bg-white rounded-md px-2 py-1 font-medium'>2025-11-10</span>
                </div>
                <p className='text-sm text-gray-600 mt-2'>This is a default announcement. Stay tuned for updates!</p>
            </div>
            <div className='bg-lamaPurple rounded-md p-4'>
                <div className='flex items-center justify-between'>
                    <h1>Announcement 01</h1>
                    <span className='text-sm text-gray-400 bg-white rounded-md px-2 py-1 font-medium'>2025-11-10</span>
                </div>
                <p className='text-sm text-gray-600 mt-2'>This is a default announcement. Stay tuned for updates!</p>
            </div>
        </div>
        
    </div>
  )
}

export default Announcements
