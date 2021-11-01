import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';

export default function About() {
   const history = useHistory();
   const goFind = () => {
      history.push('/find');
   };
   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
         }}
      >
         <Typography className='home-heading' variant='h4'>
            About
         </Typography>

         <ul>
            <li>
               <Typography variant='h6'>
                  The story is about the planet of Lengaburu in the distant
                  galaxy of Tara B. After the recent war with neighbouring
                  planet Falicornia, King Shan has exiled the Queen of
                  Falicornia for 15 years.
               </Typography>
            </li>

            <li>
               <Typography variant='h6'>
                  Queen Al Falcone is now in hiding. But if King Shan can find
                  her before the years are up, she will be exiled for another 15
                  years.
               </Typography>
            </li>

            <li>
               <Typography variant='h6'>
                  King Shan has received intelligence that Al Falcone is hiding
                  in one of these 6 planets - DonLon, Enchai, Jebing, Sapir,
                  Lerbin & Pingasor. However he has limited resources at his
                  disposal & can send his army to only 4 of these planets.
               </Typography>
            </li>
         </ul>
         <Box
            sx={{
               display: 'flex',
               textAlign: 'left',
               justifyContent: 'space-around',
               flexDirection: 'row-reverse',
               padding: '3rem',
            }}
         >
            <Box>
               <Typography className='home-heading' variant='h4'>
                  Potential Hideouts
               </Typography>

               <ol>
                  <li>
                     <Typography variant='h6'>DONLON</Typography>
                     <Typography variant='h6'>
                        Distance: 100 megamiles
                     </Typography>
                  </li>
                  <li>
                     <Typography variant='h6'>ENACHI</Typography>
                     <Typography variant='h6'>
                        Distance: 200 megamiles
                     </Typography>
                  </li>
                  <li>
                     <Typography variant='h6'>JEBING</Typography>
                     <Typography variant='h6'>
                        Distance: 300 megamiles
                     </Typography>
                  </li>
                  <li>
                     <Typography variant='h6'>SAPIR</Typography>
                     <Typography variant='h6'>
                        Distance: 400 megamiles
                     </Typography>
                  </li>
                  <li>
                     <Typography variant='h6'>LERBIN</Typography>
                     <Typography variant='h6'>
                        Distance: 500 megamiles
                     </Typography>
                  </li>
                  <li>
                     <Typography variant='h6'>PINGASOR</Typography>
                     <Typography variant='h6'>
                        Distance: 600 megamiles
                     </Typography>
                  </li>
               </ol>
            </Box>
            <Box>
               <Typography className='home-heading' variant='h4'>
                  Available Vehicles
               </Typography>

               <ol>
                  <li>
                     <Typography variant='h6'>SPACE POD</Typography>
                     <Typography variant='h6'>Units: 2</Typography>
                     <Typography variant='h6'>
                        Speed: 2 megamiles/hour
                     </Typography>
                  </li>
                  <li>
                     <Typography variant='h6'>SPACE ROCKET</Typography>
                     <Typography variant='h6'>Units: 1</Typography>
                     <Typography variant='h6'>
                        Max-distance: 300 megamiles
                     </Typography>

                     <Typography variant='h6'>
                        Speed: 4 megamiles/hour
                     </Typography>
                  </li>
                  <li>
                     <Typography variant='h6'>SPACE SHUTTLE</Typography>
                     <Typography variant='h6'>Units: 1</Typography>
                     <Typography variant='h6'>
                        Max-distance: 400 megamiles
                     </Typography>

                     <Typography variant='h6'>
                        Speed: 5 megamiles/hour
                     </Typography>
                  </li>
                  <li>
                     <Typography variant='h6'>SPACE SHIP</Typography>
                     <Typography variant='h6'>Units: 2</Typography>
                     <Typography variant='h6'>
                        Max-distance: 600 megamiles
                     </Typography>

                     <Typography variant='h6'>
                        Speed: 10 megamiles/hour
                     </Typography>
                  </li>
               </ol>
            </Box>
         </Box>
         <Button
            className='help-falcone'
            variant='contained'
            style={{ width: '20%', alignSelf: 'center' }}
            onClick={goFind}
         >
            Help Falcone!
         </Button>
      </Box>
   );
}
