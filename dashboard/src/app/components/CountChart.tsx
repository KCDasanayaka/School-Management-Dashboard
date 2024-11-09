'use client'
import Image from 'next/image';
import more from '../../../public/more.png'
import gender from '../../../public/maleFemale.png'



import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import { count } from 'console';

const data = [
   {
        name: 'Total',
        count: 130,
        fill: 'white',
   }, 
  {
    name: 'Girls',
    count: 65,
    fill: '#fae27c',
  },
  {
    name: '25-29',
    count: 60,
    fill: '#c3ebfa',
  }
];



const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Student</h1>
            <Image src={more} alt='' width={20} height={20}/>
        </div>
        <div className='relative w-full h-[75%]'>
            <ResponsiveContainer>
                <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                <RadialBar
                    background
                    dataKey="count"
                />
                </RadialBarChart>
            </ResponsiveContainer>
            <Image src={gender} alt='' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
        </div>
        <div className='flex justify-center gap-10 mx-1'>
            <div className='flex flex-col gap-1 items-center'>
                <div className='w-5 h-5 bg-lamaSky rounded-full'/>
                <h3 className='font-bold text-black'>1,234</h3>
                <h6 className='text-gray-700'>Boys(55%)</h6>
                
            </div>
            <div className='flex flex-col gap-1 items-center '>
                <div className='w-5 h-5 bg-lamaYellow rounded-full'/>
                    <h3 className='font-bold text-black'>1,234</h3>
                    <h6 className='text-gray-700'>Girls(55%)</h6>
                
            </div>
        </div>
      
    </div>
  )
}

export default CountChart
