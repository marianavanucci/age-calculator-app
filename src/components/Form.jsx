
const Form = () => {
  return (
    <form className=" py-12 pl-6 flex flex-col content-center items-center " >
        <div className="flex flex-row">
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
                                                pl-4"></input>
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
                                               pl-4"></input>
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
                                               pl-4"></input>
            </div>
        </div>
        <div>
            <button type="submit" className="bg-violet-600
                                            rounded-full
                                            border-current
                                            m-auto
                                            text-white
                                            w-14
                                            h-14
                                            my-8">&#9660;</button>
        </div>
    </form>
  )
}

export default Form