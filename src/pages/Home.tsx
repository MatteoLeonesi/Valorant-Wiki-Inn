import React, { useState } from 'react'
import axios from "axios";
import { Agents } from '../types/agentTypes'
import Card from "../components/Card"

const defaultEndpoint = "https://valorant-api.com/v1/agents"

const Home = () => {
    const [agents, setAgents] = React.useState<Agents | null>(null);

    React.useEffect(() => {
        axios.get(defaultEndpoint).then((response) => {
            setAgents(response.data);
        });
    }, []);

    console.log(agents);

    if (!agents) return null;
    const { data = [] } = agents;


    return (
        <div className="bg-blue-200 ... m-6 p-10 rounded-lg">
            <main >
                {data.map(i => {
                    const { uuid, displayName, fullPortrait } = i;
                    return (
                        <li key={uuid}>
                            <a href='#'>
                                {fullPortrait && <Card displayName={displayName} fullPortrait={fullPortrait} />}
                            </a>
                        </li>
                    )
                })}
            </main >
        </div>

    )
}

export default Home