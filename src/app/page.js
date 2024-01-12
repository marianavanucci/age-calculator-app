import Image from 'next/image'

import Form from '@/components/Form'

export default function Home() {
  return (
    <>
    <h1 className='text-red-500'>Welcome!</h1>
    <div className="bg-white w-96
                      rounded-tl-[20px]
                      rounded-tr-[20px]
                      rounded-br-[40px]
                      rounded-bl-[20px]">
      <Form></Form>
      <div>
        <p><span>- -</span>years</p>
        <p><span>- -</span>months</p>
        <p><span>- -</span>days</p>
      </div>
    </div>
    </>
  )
}
