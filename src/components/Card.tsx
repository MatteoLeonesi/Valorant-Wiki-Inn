import { Agent } from '../types/agentTypes'

const Card = (props: Agent): any => {
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a>
            <img className="rounded-t-lg" src={props.fullPortrait || ''} alt={props.displayName} />
        </a>
        <div className="p-5">
            <p>{props.displayName}</p>
        </div>
    </div>
}

export default Card;