"use client"; 

import { useState } from 'react'

import { calculate } from '../../utils/calculate'


const Form = ({addDay}) => {

    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");


    const errorDay = ( ) => console.log(`Must be a valid day!`)  

    const validateDay = (list, number)  => {
        if (list.includes(number)) {
            addDay(day)
        } else {
            errorDay()
        }
    }

    const daysPossible = Array.from({ length: 31 }, (_, index) => index + 1);

    const errorMonth = ( ) => console.log(`Must be a valid month!`) 

    const validateMonth = (list, number)  => {
        if (list.includes(number)) {
            addDay(month)
        } else {
            errorMonth()
        }
    }

    const monthsPossible = Array.from({ length: 12 }, (_, index) => index + 1);

    const errorYear = ( ) => console.log(`Must be in the past!`) 

    const validateYear = (year)  => {
        if (year <= 2025) {
            addDay(year)
        } else {
            errorYear()
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!day || !month || !year) return
        console.log("cancelei envio automático do form", day, month, year)

        const validateDayNumber = parseInt(day)

        validateDay(daysPossible, validateDayNumber)

        const validateMonthNumber = parseInt(month)

        validateMonth(monthsPossible, validateMonthNumber)

        const validateYearNumber = parseInt(year)

        validateYear(validateYearNumber)

        const currentDate = new Date();

        const birthday = new Date(year, month, day)
        console.log(birthday)

        const dateDiference = currentDate - birthday

        const anos = Math.floor(dateDiference / (365.25 * 24 * 60 * 60 * 1000));
        const meses = Math.floor((dateDiference % (365.25)) / (30.44)); 
        const dias = Math.floor((dateDiference % 30.44));

        console.log("Idade: " + anos + " anos, " + meses + " meses e " + dias + " dias.");



        // addDay(day)

        setDay("") //zera os campos
        setMonth("")
        setYear("")

 
    }


  return (
    <form className=" pt-12 pl-6 flex flex-col content-center items-center" onSubmit={handleSubmit} >
        <div className="flex flex-row">
            <div className="w-1/3">
                    <label className="text-xs
                                text-slate-500
                                font-semibold
                                tracking-widest">DAY</label>
                    <input type="name" className="border-neutral-300
                                                border-2
                                                rounded-md
                                                w-24
                                                h-14
                                                font-black
                                                text-lg
                                                pl-4"  value={day} onChange={(e) => setDay(e.target.value)} ></input>
                </div>
            <div className="w-1/3">
                <label className="text-xs
                            text-slate-500
                            font-semibold
                            tracking-widest">MONTH</label>
                <input type="name" className="border-neutral-300
                                               border-2
                                               rounded-md
                                               w-24
                                               h-14
                                               font-black
                                               text-lg
                                               pl-4" value={month} onChange={(e) => setMonth(e.target.value)}></input>
            </div>
            <div className="w-1/3">
                <label className="text-xs
                            text-slate-500
                            font-semibold
                            tracking-widest">YEAR</label>
                <input type="name" className="border-neutral-300
                                               border-2
                                               rounded-md
                                               w-24
                                               h-14
                                               font-black
                                               text-lg
                                               pl-4" value={year} onChange={(e) => setYear(e.target.value)}></input>
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