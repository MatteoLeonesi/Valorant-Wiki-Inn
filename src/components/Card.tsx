
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Agent } from '../types/valorant';

const Card = (props: { agent: Agent }): any => {
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);


  return (
    <div
      className='glass dark:bg-neutral-900 rounded-lg cursor-pointer relative w-full min-h-[320px] overflow-hidden 	shadow-xl'
      onClick={() => setOpenPopUp(!openPopUp)}>
      <span className='absolute -translate-x-8 inset-0 text-white dark:text-white font-raleway font-black uppercase opacity-25 select-none'>
        <span className='whitespace-nowrap space-x-2'>
          <span className=' text-3xl'>{props.agent.displayName}</span>
          <span className=' text-6xl'>{props.agent.displayName}</span>
        </span>
        <p className=' text-8xl'>{props.agent.displayName}</p>
        <p className=' text-4xl'>{props.agent.displayName}</p>
        <p className=' text-6xl'>{props.agent.displayName}</p>
        <p className=' text-7xl'>{props.agent.displayName}</p>
      </span>

      <div
        className='w-full h-full bg-origin-content bg-cover scale-150 -translate-x-[18%] translate-y-[15%] md:translate-y-[18%] transition-all duration-300'
        style={{
          backgroundImage: `url(${props.agent.fullPortrait})`,
        }}
      />


      <span className=' animate-pulse  absolute bottom-1 left-1 text-white drop-shadow dark:text-white text-3xl font-raleway font-black uppercase'>
        <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={{ pathname: `/${props.agent.displayName}` }}
          state={{
            displayName: props.agent.displayName,
            description: props.agent.description,
            developerName: props.agent.developerName,
            displayIcon: props.agent.displayIcon,
            abilities: props.agent.abilities
          }}
          key={props.agent.uuid}
        >
          {props.agent.displayName}
        </Link>
      </span>

    </div>
  );
};

export default Card;
