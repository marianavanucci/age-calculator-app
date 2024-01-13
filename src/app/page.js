import Image from 'next/image'

import Form from '@/components/Form'

export default function Home() {
  return (
    <>
    <h1 className='text-red-500'>Welcome!</h1>
    <div className="bg-white w-96 pb-20
                      rounded-tl-[20px]
                      rounded-tr-[20px]
                      rounded-br-[120px]
                      rounded-bl-[20px]">
      <Form></Form>
      <div className='ml-6
                      text-6xl
                      font-black'>
        <p><span className='text-violet-600'>- -</span> years</p>
        <p><span className='text-violet-600'>- -</span> months</p>
        <p><span className='text-violet-600'>- -</span> days</p>
      </div>
    </div>
    </>
  )
}
