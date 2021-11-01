import { Typography } from '@mui/material';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

export default function Footer() {
   return (
      <Box sx={{ flexGrow: 1, paddingTop: '5px' }}>
         <AppBar position='static'>
            <Typography variant='subtitle2'>
               Finding Falcone, a challenge by Geektrust
            </Typography>
         </AppBar>
      </Box>
   );
}
