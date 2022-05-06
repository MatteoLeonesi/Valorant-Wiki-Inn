import React from 'react'
import {useLocation} from "react-router-dom"

function SingleWeapon(props: any) {

    const location = useLocation()
    const {description, displayIcon, displayName}: any = location.state

    return (
        <div className=" rounded-lg p-10 verflow-hidden shadow-lg  dark:shadow-indigo-500/50 pt-30 ">
            < div className="flex flex-col gap-1 text-center items-center  ">
                <div className="  flex items-center justify-cente   ">
                    <div className=" text-center ">
                        <div className=" flex h-screen w-screen items-center justify-center bg-gradient-to-bl  ">
                            <div
                                className=" w-100 m-2 cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                                <div className="-mb-20 -translate-y-1/2 transform">
                                    <img src={displayIcon} alt="Kobe Bryant" title="Kobe Bryant"
                                         className=" mx-auto h-64 rounded-full"/>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-center text-4xl font-bold">{displayName}</h3>
                                </div>
                                <div className="font-medium max-w-2xl text-center text-xl p-2">
                                    {description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ div>
        </div>
    )
}

export default SingleWeapon;