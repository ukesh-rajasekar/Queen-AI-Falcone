import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function NavBar() {
   return (
      <Box sx={{ flexGrow: 1, paddingBottom: '5px' }}>
         <AppBar position='static'>
            <Toolbar>
               <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                  Finding Falcone!
               </Typography>
               <Button color='inherit' component={Link} to='/'>
                  Read Rules
               </Button>
               <Button color='inherit' component={Link} to='/find'>
                  Find
               </Button>
            </Toolbar>
         </AppBar>
      </Box>
   );
}
