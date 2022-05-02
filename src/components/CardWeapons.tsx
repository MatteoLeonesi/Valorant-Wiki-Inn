import { useState } from 'react';
import { Link } from "react-router-dom";
import { Weapon } from '../types/valorant';

const CardWeapons = (props: { weapon: Weapon }): any => {


    const [openPopUp, setOpenPopUp] = useState<boolean>(false);

    return (
        <div
            className='glass dark:bg-neutral-900 rounded-lg cursor-pointer relative w-full min-h-[320px] overflow-hidden 	shadow-xl'
            onClick={() => setOpenPopUp(!openPopUp)}>

            <span className='absolute -translate-x-8 inset-0 text-white dark:text-white font-raleway font-black uppercase opacity-25 select-none'>
                <span className='whitespace-nowrap space-x-2'>
                    <span className=' text-3xl'>{props.weapon.displayName}</span>
                    <span className=' text-6xl'>{props.weapon.displayName}</span>
                </span>
                <p className=' text-8xl'>{props.weapon.displayName}</p>
                <p className=' text-4xl'>{props.weapon.displayName}</p>
                <p className=' text-6xl'>{props.weapon.displayName}</p>
                <p className=' text-7xl'>{props.weapon.displayName}</p>
            </span>

            <div
                className='w-full h-full bg-origin-content bg-cover scale-100   transition-all duration-300'
            // style={{
            //     backgroundImage: `url(${props.weapon.displayIcon})`,
            // }}
            />




            <span className=' animate-pulse absolute bottom-1 left-1 text-white drop-shadow dark:text-white text-3xl font-raleway font-black uppercase'>
                <Link
                    style={{ display: "block", margin: "1rem 0" }}
                    to={{ pathname: `${props.weapon.displayName}` }}
                    state={{ name: props.weapon.displayName }}
                    key={props.weapon.uuid}
                >
                    {props.weapon.displayName}
                </Link>
            </span>

        </div>
    );
};

export default CardWeapons;
