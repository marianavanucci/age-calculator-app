"use client"; 

import { useState } from 'react'


const Form = () => {

    const [day, setDay] = useState("");
    const [errors, setErrors] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("cancelei envio automático do form")

        console.log(day)


        const validateNumber = (number) => {
            return number <= 31;
        }

        const validateDay = validateNumber(day)
        console.log(validateDay)

        const errors =  (error) => {
            if(!validateDay) {
                setErrors("Must be a valid day")
            } else {
                return console.log("deu bom!")
            }
    }


        setDay("")

    }


  return (
    <form className=" pt-12 pl-6 flex flex-col content-center items-center" onSubmit={handleSubmit} >
        <div className="flex flex-row">
            <div className="w-1/3">
                    <label className="text-xs
                                text-slate-500
                                font-semibold
                                tracking-widest">DAY</label>
                    <input type="number" min="1" className="border-neutral-300
                                                border-2
                                                rounded-md
                                                w-24
                                                h-14
                                                font-black
                                                text-lg
                                                pl-4" value={day} onChange={(e) => setDay(e.target.value)}></input>
                </div>
            <div className="w-1/3">
                <label className="text-xs
                            text-slate-500
                            font-semibold
                            tracking-widest">MONTH</label>
                <input type="number" className="border-neutral-300
                                               border-2
                                               rounded-md
                                               w-24
                                               h-14
                                               font-black
                                               text-lg
                                               pl-4"></input>
            </div>
            <div className="w-1/3">
                <label className="text-xs
                            text-slate-500
                            font-semibold
                            tracking-widest">YEAR</label>
                <input type="name" max="2" className="border-neutral-300
                                               border-2
                                               rounded-md
                                               w-24
                                               h-14
                                               font-black
                                               text-lg
                                               pl-4"></input>
            </div>
        </div>
        <div>
            <button type="submit" className="bg-violet-600
                                            rounded-full
                                            border-current
                                            m-auto
                                            text-white
                                            text-3xl
                                            w-16
                                            h-16
                                            my-8">↓</button>
        </div>

    
    </form>
  )
}

export default Form