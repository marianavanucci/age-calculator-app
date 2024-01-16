"use client"; 

import { useState } from 'react'

import Form from '@/components/Form'

export default function Home() {

  const [datas, setDatas] = useState([{
    day: '- -',
    month: '- -',
    year: '- -',
  }])

  const addDay = (day, month, year) => {
      const newData = [...datas, {
        day,
        month,
        year,
      }
    ];

    setDatas(newData)
  }

  return (
    <>
    <h1 className='text-red-500'>Welcome!</h1>
    <div className="bg-white w-96 pb-20
                      rounded-tl-[20px]
                      rounded-tr-[20px]
                      rounded-br-[120px]
                      rounded-bl-[20px]">
      <Form addDay={addDay}></Form>

    <div className='ml-6
                    text-6xl
                     font-black'>
      <p><span className='text-violet-600'>- -</span> years</p>
      <p><span className='text-violet-600'>- -</span> months</p>
      <p><span className='text-violet-600'>- -</span> days</p>
    </div>
    <div className=''>
    {datas.map((data, index) => (
            <div key={index}>
              <p>{data.day} days</p>
              <p>{data.month} months</p>
              <p>{data.year} years</p>
            </div>
          ))} 
    </div>
    </div>
    </>
  )
}


