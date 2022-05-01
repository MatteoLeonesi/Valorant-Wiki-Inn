import { useEffect, useState } from 'react';
import axios from 'axios';
import { Weapon, Weapons } from '../types/valorant';
import Spinner from '../components/Spinner';
import CardWeapons from '../components/CardWeapons';

const defaultEndpoint = 'https://valorant-api.com/v1/weapons';


const WeaponsPage = () => {
  const [weapons, setWeapons] = useState<Weapon[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getWeapons = async () => {
      const result = await axios(defaultEndpoint);
      const _data: Weapons = result.data;
      setWeapons(_data.data);
      setLoading(false); //stop loading when data is fetched
    };
    getWeapons();
  }, []);


  return (
    <div className='breakpoints-default py-6 lg:py-10 px-4 lg:px-8 overflow-hidden '>
      {loading ? (
        <Spinner />
      ) : (
        <div className='grid gap-8 grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
          {weapons &&
            weapons.map((weapon: Weapon, index: number) => {

              return (
                <CardWeapons weapon={weapon} key={`${index}_card_${index}`} />
              );
              //
            })}
        </div>
      )}
    </div>
  );
};

export default WeaponsPage;
