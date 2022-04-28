// import { assertValidExecutionArguments } from 'graphql/execution/execute';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Agent, Agents } from '../types/valorant';

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
            return (
              <li key={agent.uuid}>
                <div className='grid max-w-[3/4vw] sm:max-w-[360px]'>
                  <img
                    className='max-w-40 w-full flex'
                    src={agent.fullPortrait!}
                    alt={`${agent.displayName}Portrait`}
                  />{' '}
                  <span className='border text-center'>
                    {agent.displayName}
                  </span>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Home;
