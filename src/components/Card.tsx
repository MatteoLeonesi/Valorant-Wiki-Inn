import { Agent } from '../types/agentTypes'

const Card = (props: { agent: Agent }): any => {
    return (

        <div className=" overflow-hidden shadow-lg  shadow-gray-500/50 grid max-w-[3/4vw] sm:max-w-[360px] rounded-lg	 ">
            {props.agent.fullPortrait &&
                <img
                    className='max-w-40 w-full flex'
                    src={props.agent.fullPortrait!}
                    alt={`${props.agent.displayName}Portrait`}
                />
            }
            <div className="px-6 pt-4 pb-2 text-center  font-semibold  font-mono ">
                {props.agent.fullPortrait &&
                    <span className=' text-center'>{props.agent.displayName}</span>
                }
            </div>






        </div>
    );
}

export default Card;