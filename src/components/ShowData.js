import { useStateContext } from "../contexts/StateContextProvider"
import { Loading } from './Loading'

const ShowData = (props) => {
    const { loading } = useStateContext()

    if (loading) return <Loading />

    return (
        <div className=' flex justify-center flex-col items-center'>
            <p className='card'>Country: {props.country}</p>
            <p className='card'>Confirmed: {props.confirmed}</p>
            <p className='card'>Critical: {props.critical}</p>
            <p className='card'>Deaths: {props.deaths}</p>
            <p className='card'>Recovered: {props.recovered}</p>
        </div>
    )
}

export default ShowData