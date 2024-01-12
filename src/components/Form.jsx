
const Form = () => {
  return (
    <form className="px-6" >
        <div className="flex flex-row">
            <div className="w-1/3">
                <label>DAY</label>
                <input type="name" className="border-neutral-300
                                               border-2
                                               rounded-md
                                               w-8"></input>
            </div>
            <div>
                <label>MONTH</label>
                <input type="name"></input>
            </div>
            <div>
                <label>YEAR</label>
                <input type="namer"></input>
            </div>
        </div>
        <div>
            <button type="submit">&#9660;</button>
        </div>
    </form>
  )
}

export default Form