import React from 'react'
import { useLocation } from "react-router-dom"
//already have it as part of the path, so you can extract it from useHistory/useLocation

function SingleAgent(props: any) {

    const location = useLocation()
    const { displayName, description, displayIcon, developerName, abilities }: any = location.state


    //TODO map abiliteis

    return (
        <div className=" rounded-lg p-10 m-20 verflow-hidden shadow-lg  dark:shadow-indigo-500/50	">
            < div className="flex flex-col gap-1 text-center items-center " >
                <img className="h-32 w-32 bg-white p-2 rounded-full shadow mb-4" src={displayIcon} alt={displayIcon} />
                <p className="font-mono capitalize text-2xl ...">{displayName}</p>

                <div className=" pt-10 flex items-center justify-center">
                    <div className=" text-center">
                        <div className="font-medium max-w-xl text-xl">
                            {description}
                        </div>
                        <div className="mt-5">
                            <span className="text-gray-500 font-medium">Developer : </span><span className="font-semi-bold font-mono">{developerName}</span>
                        </div>

                    </div>
                </div>


            </ div>




        </div >


    )
}

export default SingleAgent;