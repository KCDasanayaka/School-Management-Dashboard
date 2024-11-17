'use client'
import Image from 'next/image';
import more from '../../../public/moreDark.png'
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
 
}

export default CountChart
