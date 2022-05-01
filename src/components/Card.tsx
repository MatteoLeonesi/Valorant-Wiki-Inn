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

      <span className='text-black dark:text-white text-sm font-rokkitt font-bold'>
        {/* {props.agent.displayName} */}
        {/* {`url(${props.agent.fullPortrait})`} */}
      </span>
    </div>
  );
};

export default Card;
