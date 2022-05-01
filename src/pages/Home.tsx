// import { assertValidExecutionArguments } from 'graphql/execution/execute';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Agent, Agents } from '../types/valorant';
import Card from '../components/Card';
import Spinner from '../components/Spinner';

const defaultEndpoint = 'https://valorant-api.com/v1/agents';

const Home = () => {
  const [agents, setAgents] = useState<Agent[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAgents = async () => {
      const result = await axios(defaultEndpoint);
      const _data: Agents = result.data;
      setAgents(_data.data);
      setLoading(false); //stop loading when data is fetched
    };
    getAgents();
  }, []);

  return (
    <div className='breakpoints-default py-6 lg:py-10 px-4 lg:px-8 overflow-hidden '>
      {loading ? (
        <Spinner />
      ) : (
        <div className='grid gap-8 grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
          {agents &&
            agents.map((agent: Agent, index: number) => {
              // TODO duplicated data in the /agents api, 2 sova.
              /* // TODO: use the Riot Api instead. -jb */
              return (
                agent.displayName !== 'Sova' && (
                  <Card agent={agent} key={`${agent}_card_${index}`} />
                )
              );
              //
            })}
        </div>
      )}
    </div>
  );
};

export default Home;
