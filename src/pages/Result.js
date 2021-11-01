import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Context } from '../tools/ReferenceDataContext';

export default function Result() {
   const { status, setPlanets, setVehicles, setDistance, setSpeed } =
      useContext(Context);

   const history = useHistory();
   const goFind = () => {
      history.push('/find');
   };

   useEffect(() => {
      setDistance({
         1: '',
         2: '',
         3: '',
         4: '',
      });

      setSpeed({
         1: '',
         2: '',
         3: '',
         4: '',
      });
      setPlanets(0);
      setVehicles(0);
   }, []);

   console.log(status);

   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '3rem',
            flexWrap: 'wrap',
         }}
      >
         {status.status == 'success' && (
            <>
               <Typography variant='h4'>
                  You found Falcone! King Shan is pleased :)
               </Typography>
               <Typography variant='h6'>
                  Planet - {status.planet_name}
               </Typography>
            </>
         )}
         {status.status == 'false' && (
            <>
               <Typography variant='h4'>
                  Sorry!You cannot find Falcone :(
               </Typography>
            </>
         )}

         <Button variant='contained' onClick={goFind}>
            Search again!
         </Button>
      </Box>
   );
}
