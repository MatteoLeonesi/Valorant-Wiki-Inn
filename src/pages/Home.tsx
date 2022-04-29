// import { assertValidExecutionArguments } from 'graphql/execution/execute';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Agent, Agents } from '../types/valorant';
import Card from "../components//Card"

const defaultEndpoint = 'https://valorant-api.com/v1/agents';

const Home = () => {
    const [agents, setAgents] = useState<Agent[]>();

    useEffect(() => {
        axios.get(defaultEndpoint).then((response) => {
            const _data: Agents = response.data;
            setAgents(_data.data);
        });
    }, []);

    return (
        <div className=' mr-10 ml-10 mt-5 p-10 rounded-md '>
            <div className='grid grid-cols-1 gap-10  lg:grid-cols-4  md:grid-cols-2 ' >
                {agents &&
                    agents.map((agent: Agent, index: number) => {
                        return <Card agent={agent} />
                    })
                }
            </div >
        </div >
    );
};

export default Home;
