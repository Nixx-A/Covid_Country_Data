import { AiFillGithub } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <div className='flex items-center justify-center flex-row m-3 pt-6 text-xl '>
            <a href='https://github.com/Nixx-A' className='mr-4' target='_blank' rel='noreferrer'><AiFillGithub /></a>
            <a href='https://www.instagram.com/nicolas.ayan/?hl=es' className='mr-4' target='_blank' rel='noreferrer'><AiFillInstagram /></a>
            <a href='https://twitter.com/Nicolas_Ayan_' className='mr-4' target='_blank' rel='noreferrer'> <AiFillTwitterCircle /></a>
            <a href='https://www.linkedin.com/in/nicolas-ayan-88229b213/' className='mr-4' target='_blank' rel='noreferrer'> <AiFillLinkedin /></a>
            </div>
            <div className='flex justify-center '>
                <p className='dark:text-white text-black font-bold hover:text-gray-700 text-base'>By Nixx</p>
            </div>
        </footer>
    )
}

export default Footer