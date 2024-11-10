"use client"
import Image from 'next/image'
import React from 'react'
import more from "../../../public/moreDark.png"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expence: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expence: 1398,
  },
  {
    name: 'Mar',
    income: 2000,
    expence: 9800,
  },
  {
    name: 'Apr',
    income: 2780,
    expence: 3908,
  },
  {
    name: 'May',
    income: 1890,
    expence: 4800,
  },
  {
    name: 'Jun',
    income: 2390,
    expence: 3800,
  },
  {
    name: 'Jul',
    income: 3490,
    expence: 4300,
  },
  {
    name: 'Aug',
    income: 4000,
    expence: 2400,
  },
  {
    name: 'Sep',
    income: 3000,
    expence: 1398,
  },
  {
    name: 'Oct',
    income: 2000,
    expence: 9800,
  },
  {
    name: 'Nov',
    income: 2780,
    expence: 3908,
  },
  {
    name: 'Dec',
    income: 1890,
    expence: 4800,
  }
];

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold text-black'>Finance</h1>
            <Image src={more} alt='' width={20} height={20}/>
        </div>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      
    </div>
  )
}

export default FinanceChart