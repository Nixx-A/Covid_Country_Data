import { useStateContext } from "../contexts/StateContextProvider"
import { useState } from "react"
import ShowData from "./ShowData"

const FormSearch = () => {
    const { covidData } = useStateContext()
    const [search, setSearch] = useState('')
    const [country, setCountry] = useState('')
    const [confirmed, setConfirmed] = useState('')
    const [critical, setCritical] = useState('')
    const [deaths, setDeaths] = useState('')
    const [recovered, setRecovered] = useState('')

    

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const onSubmit = async(e) => {
        e.preventDefault()
        /* console.log(search) */
        const data = await covidData(search)
        setCountry(data[0]?.country)
        setConfirmed(data[0]?.confirmed)
        setCritical(data[0]?.critical)
        setDeaths(data[0]?.deaths)
        setRecovered(data[0]?.recovered)
        /* console.log(data) */
    }

        
    
    return(
        <>
        <div className='flex flex-wrap justify-center mt-10 '>
            <form onSubmit={onSubmit}>
            <input className='border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:text-black rounded-md' type='text' placeholder='ej: it' onChange={onChange}></input>
            <button className='btn-indigo '>Get data</button>
            </form>
        </div>
        <div className=''>
            <ShowData country={country} confirmed={confirmed} critical={critical} deaths={deaths} recovered={recovered}/>
        </div>
        </>
    )
}

export default FormSearch