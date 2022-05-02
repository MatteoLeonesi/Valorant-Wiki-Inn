import React from 'react'
import { useLocation } from "react-router-dom"

//already have it as part of the path, so you can extract it from useHistory/useLocation

function SingleWeapon(props: any) {

    // const location = useLocation()
    // const { name }: any = location.state

    return (
        <div>
            <h1>test</h1>
            {/* <h1>{name}</h1> */}
        </div >
    )
}

export default SingleWeapon;