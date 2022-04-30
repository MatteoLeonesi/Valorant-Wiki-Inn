import { ReactNode, useState } from 'react';
import { Agent } from '../types/agentTypes'

const Card = (props: { agent: Agent }): any => {

    const [openPopUp, setOpenPopUp] = useState<boolean>(false);

    return (

        <div className=" overflow-hidden shadow-lg  grid max-w-[3/4vw] sm:max-w-[360px] rounded-lg	 ">
            {props.agent.fullPortrait &&
                <img
                    className='max-w-40 w-full flex'
                    src={props.agent.fullPortrait!}
                    alt={`${props.agent.displayName}Portrait`}
                />
            }
            <div className="px-6 pt-4 pb-2 text-center  font-semibold  font-mono ">
                {props.agent.fullPortrait &&
                    <button onClick={() => setOpenPopUp(!openPopUp)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        {props.agent.displayName}
                    </button>
                }
            </div>
            <div>

            </div>
        </div>
    );
}

export default Card;