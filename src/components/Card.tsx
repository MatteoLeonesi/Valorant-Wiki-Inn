import { useState } from 'react';
import { Agent } from '../types/agentTypes';

const Card = (props: { agent: Agent }): any => {
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  //https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png
  return (
    <div
      className='glass dark:bg-neutral-900 rounded-lg cursor-pointer relative w-full min-h-[320px] overflow-hidden'
      onClick={() => setOpenPopUp(!openPopUp)}>
      {/* <img
        className='absolute w-full h-full'
        src={props.agent.fullPortrait!}
        alt={`${props.agent.displayName}Portrait`}
      /> */}
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

      {/* <p
          className={`whitespace-pre-wrap bg-clip-text shadow-lg p-4 glass border rounded-lg border-[#a8a8a8]/20
        transition-all duration-300
          ${openPopUp ? '' : 'opacity-0'}
          `}>
          {props.agent.description}
        </p> */}

      <span className='absolute bottom-4 left-3 text-white drop-shadow dark:text-white text-3xl font-raleway font-black uppercase'>
        {props.agent.displayName}
      </span>
    </div>
  );
};

export default Card;
