import React from 'react'
import { useLocation } from "react-router-dom"
import { Abilities } from "../types/valorant"

function SingleAgent(props: any) {

    const location = useLocation()
    const { displayName, description, displayIcon, developerName, abilities, role }: any = location.state

    console.log(abilities);

    //


    return (
        <div className=" rounded-lg p-10 verflow-hidden shadow-lg  dark:shadow-indigo-500/50 pt-40 ">
            < div className="flex flex-col gap-1 text-center items-center  " >
                <div className="  flex items-center justify-cente   ">
                    <div className=" text-center ">
                        <div className=" flex h-screen w-screen items-center justify-center bg-gradient-to-bl  ">
                            <div className=" w-100 m-2 cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                                <div className="-mb-20 -translate-y-1/2 transform">
                                    <img src={displayIcon} alt="Kobe Bryant" title="Kobe Bryant" className=" mx-auto h-64 rounded-full" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-center text-4xl font-bold">{displayName}</h3>
                                    <span className="text-sm">{role}</span>
                                </div>
                                <ul className="mt-16 mb-20 flex justify-center text-center text-2xl">
                                    {
                                        abilities.map((a: Abilities, index: number) => {


                                            return (
                                                <li className="mx-6 flex flex-col"><span className="font-bold"></span>{a.displayName}</li>
                                            );
                                            //
                                        })}
                                </ul>
                                <div className="font-medium max-w-2xl text-center text-xl p-2">
                                    {description}
                                </div>
                                <li className="mx-6 pt-10 pb-10 justify-center flex flex-row font-mono"><span className="font-semibold mr-3">Developer Name:</span> {developerName}</li>
                            </div>
                        </div>
                    </div>
                </div>
            </ div>
        </div >
    )
}

export default SingleAgent;