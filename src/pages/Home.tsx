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
        <>
            <ul>
                {agents &&
                    agents.map((agent: Agent, index: number) => {
                        return <Card agent={agent} />
                    })}
            </ul>
        </>
    );
};

export default Home;
