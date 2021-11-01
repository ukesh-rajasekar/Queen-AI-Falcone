import React, { useContext, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Context } from '../tools/ReferenceDataContext';

export default function TimeTaken() {
   const { distance, speed } = useContext(Context);
   const [timeTaken, setTimeTaken] = useState(0);

   const calculateTravelTime = () => {
      let travelTime = 0;

      for (var i = 1; i < 5; i++) {
         if (distance[i] !== '' && speed[i] !== '') {
            travelTime += distance[i] / speed[i];
         }
      }

      setTimeTaken(travelTime);
   };

   useEffect(() => {
      calculateTravelTime();
   }, [distance, speed]);

   return <Typography variant='h4'>Time Taken: {timeTaken}</Typography>;
}
