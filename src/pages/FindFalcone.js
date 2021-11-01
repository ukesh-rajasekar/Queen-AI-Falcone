import { Box } from '@mui/system';
import { Paper } from '@mui/material';

import React, { useContext, useEffect, useState } from 'react';
import Search from '../Components/Search';
import SelectPlanets from '../Components/SelectPlanets';
import SelectVehicles from '../Components/SelectVehicles';
import TimeTaken from '../Components/TimeTaken';
import { Context } from '../tools/ReferenceDataContext';

export default function FindFalcone() {
   const { distance, speed } = useContext(Context);

   const [show, setShow] = useState(false);

   const checkSelection = () => {
      let count = 0;
      for (var i = 1; i < 5; i++) {
         if (distance[i] !== '' && speed[i] !== '') {
            count = count + 1;
         }
      }
      if (count === 4) setShow(true);
      else setShow(false);
   };

   useEffect(() => {
      checkSelection();
   }, [speed, distance]);

   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'space-around',
            width: '100%',
         }}
      >
         <Paper elevation={3}>
            <SelectPlanets />
            <SelectVehicles />
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  padding: '3rem',
               }}
            >
               <TimeTaken />
               {show && <Search />}
            </div>
         </Paper>
      </Box>
   );
}
