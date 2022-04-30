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
    <div className=' mr-10 ml-10 mt-5 p-10 rounded-lg shadow-gray-400/80 overflow-hidden shadow-lg '>
      {loading ? (
        <Spinner />
      ) : (
        <div className='grid grid-cols-1 gap-10  lg:grid-cols-4  md:grid-cols-2 '>
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
