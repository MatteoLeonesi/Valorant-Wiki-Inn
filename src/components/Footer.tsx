import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="p-4 bg-white rounded-lg  md:flex md:items-center md:justify-between md:p-6 mt-10 mr-10 ml-10 dark:bg-gray-800" >
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://github.com/MatteoLeonesi" className="hover:underline">Github Repository</a>
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <Link to='/about'>
                    <span className='px-4 hover:text-gray-800'>About Us 🍺 </span>
                </Link>

            </ul>
        </footer>
    )
}

export default Footer