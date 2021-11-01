import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Context } from '../tools/ReferenceDataContext';
import { postData } from './api';

export default function Search() {
   const history = useHistory();
   const { vehicles, planets, setStatus } = useContext(Context);

   async function doPost(url, payload) {
      const result = await postData(url, payload);
      setStatus(result);
   }

   const setPayload = () => {
      let vehicle_names = vehicles.map((vehicle) => {
         return vehicle.name;
      });

      let planet_names = planets.map((planet) => {
         return planet.name;
      });

      return { planet_names, vehicle_names };
   };

   const startSearch = () => {
      let payload = setPayload();

      doPost('find', payload);

      history.push('/Queen-AI-Falcone/result');
   };
   return (
      <div>
         <Button
            variant='contained'
            className='start-search'
            onClick={startSearch}
         >
            Find Falcone!
         </Button>
      </div>
   );
}
