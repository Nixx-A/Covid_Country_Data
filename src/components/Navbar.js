import { BsLightbulb } from 'react-icons/bs'
import  {MdOutlineDarkMode } from 'react-icons/md'

const Navbar = ({ setDarkTheme, darkTheme}) => {

    return (
        <>
        <div className='dark:text-white'>
            <h1 className= ' flex justify-center font-extrabold text-xl'>Country covid data</h1>
                <button type="button" onClick={() => setDarkTheme(!darkTheme)} className=" absolute top-0 right-0 m-3 p-1 text-base dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full  hover:shadow-lg">{darkTheme ? <BsLightbulb />   : <MdOutlineDarkMode />}</button>
        </div>
        </>
    )
}

export default Navbar