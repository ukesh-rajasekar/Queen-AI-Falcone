import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown(props) {
   const { items, selectedDestination, destinationNum, distance } = props;
   const [list, setList] = React.useState([]);

   const handleChange = (event) => {
      setList(event.target.value);
      selectedDestination({
         ...distance,
         [destinationNum]: event.target.value,
      });
   };

   //for testing
   let selectId = `select-planet-${destinationNum}`;

   React.useEffect(() => {}, [items]);

   return (
      <Box sx={{ minWidth: 120 }}>
         <FormControl fullWidth>
            <InputLabel id='select-planet-label'>
               Planet - {destinationNum}
            </InputLabel>
            <Select
               labelId='select-planet-label'
               id={selectId}
               value={list}
               label={list}
               onChange={handleChange}
               sx={{ color: 'white' }}
            >
               {items.map((item) => {
                  return (
                     <MenuItem
                        id={item.name}
                        disabled={item.disable}
                        value={item.distance}
                        key={item.name}
                     >
                        {item.name}
                     </MenuItem>
                  );
               })}
            </Select>
         </FormControl>
      </Box>
   );
}
