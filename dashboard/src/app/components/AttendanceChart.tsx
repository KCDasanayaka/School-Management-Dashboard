"use client"
import Image from 'next/image';
import React from 'react'
import moreDark from '../../../public/moreDark.png'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,
  },
  {
    name: 'Tue',
    present: 70,
    absent: 60,
  },
  {
    name: 'Wed',
    present: 90,
    absent: 75,
  },
  {
    name: 'Thu',
    present: 90,
    absent: 75,
  },
  {
    name: 'Fri',
    present: 65,
    absent: 55,
  }
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full '>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold text-black'>Attendence</h1>
        <Image src={moreDark} alt='' width={20} height={20}/>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={{fill:"#ddd"}}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={{fill:"#ddd"}}/>
          <Tooltip contentStyle={{borderRadius:'10px',borderColor:'lightgray'}}/>
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"20px"}}/>
          <Bar dataKey="present" fill="#fae27c" activeBar={<Rectangle fill="pink" stroke="blue" />} legendType='circle' radius={[5,5,0,0]}/>
          <Bar dataKey="absent" fill="#c3ebfa" activeBar={<Rectangle fill="gold" stroke="purple" />} legendType='circle' radius={[5,5,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart
