import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext()
const baseUrl = 'https://covid-19-data.p.rapidapi.com/country/code?code='

export const StateContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false)

    const covidData = async (url) => {
        setLoading(true)

        const res = await fetch(`${baseUrl}${url}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        }
    })
    const data = await res.json()
    /* console.log(data) */
    setLoading(false)
    return data
}

return (
    <StateContext.Provider value={{ covidData, loading, }}>
      {children}
    </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);