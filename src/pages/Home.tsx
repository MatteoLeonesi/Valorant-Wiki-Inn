import { assertValidExecutionArguments } from 'graphql/execution/execute';
import React, { useState } from 'react'
import axios from "axios";


const defaultEndpoint = "https://valorant-api.com/v1/agents"


const Home = () => {
    const [agents, setAgents] = React.useState(null);

    React.useEffect(() => {
        axios.get(defaultEndpoint).then((response) => {
            setAgents(response.data);
        });
    }, []);

    console.log(agents);

    if (!agents) return null;
    const { data = [] } = agents;


    return (
        <>
            <main >
                {data.map(i => {
                    const { uuid, displayName, fullPortrait } = i;
                    return (
                        <li key={uuid}>
                            <a href="https://nextjs.org/docs">
                                {fullPortrait && <h1>{displayName}</h1>}
                            </a>
                        </li>
                    )
                })}


            </main >

        </>

    )
}

export default Home