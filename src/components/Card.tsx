import { Agent } from '../types/agentTypes'

const Card = (props: { agent: Agent }): any => {
    <li key={props.agent.uuid} className='grid max-w-[3/4vw] sm:max-w-[360px]'>
        <img
            className='max-w-40 w-full flex'
            src={props.agent.fullPortrait!}
            alt={`${props.agent.displayName}Portrait`}
        />{' '}
        <span className='border text-center'>{props.agent.displayName}</span>
    </li>
}

export default Card;