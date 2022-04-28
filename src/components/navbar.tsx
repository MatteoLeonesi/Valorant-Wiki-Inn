import { Link } from "react-router-dom";
import React from 'react'
import { useState } from "react"


function Navbar() {

    const [active, setActive] = useState<boolean>(false);

    const handleClick = () => {
        setActive(!active);
        console.log("clicked");

    };

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 flex ..." >
            <div className="container mx-auto px-6 py-2 flex justify-between items-center grow  ">
                <a className="font-bold text-2xl lg:text-4xl">
                    Valorant Wiki
                </a>
                <div className="block lg:hidden">
                    <button onClick={handleClick} className="flex items-center  px-3 py-2  rounded   appearance-none focus:outline-none">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button >
                </div>
                <div className={`${active ? '' : 'hidden'
                    } lg:block`}>
                    <ul className="inline-flex">
                        <Link to='/'>
                            <a className="px-4 hover:text-gray-800">
                                Home
                            </a>
                        </Link>
                        <Link to='/abouts'>
                            <a className="px-4 hover:text-gray-800">
                                Abouts
                            </a>
                        </Link>
                        <Link to='/'>
                            <a className="px-4 hover:text-gray-800">
                                Agents
                            </a>
                        </Link>
                        <Link to='/'>
                            <a className="px-4 hover:text-gray-800">
                                Weapons
                            </a>
                        </Link>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
