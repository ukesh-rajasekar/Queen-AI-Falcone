import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown(props) {
   const { items, vehicleNum, speed, setSpeed, distance } = props;

   const [list, setList] = React.useState([]);

   const handleChange = (event) => {
      setList(event.target.value);
      setSpeed({
         ...speed,
         [vehicleNum]: event.target.value,
      });
   };

   let selectId = `select-vehicle-${vehicleNum}`;

   var newVehicles = JSON.parse(JSON.stringify(items));
   newVehicles.map((vehicle) => {
      if (vehicle.max_distance < distance) {
         vehicle.disable = true;
      }
   });

   return (
      <Box sx={{ minWidth: 120 }}>
         <FormControl fullWidth>
            <InputLabel id='select-vehicle-label'>
               Vehicle - {vehicleNum}
            </InputLabel>
            <Select
               labelId='select-vehicle-label'
               id={selectId}
               value={list}
               label={list}
               onChange={handleChange}
               sx={{ color: 'white' }}
            >
               {newVehicles.map((item) => {
                  return (
                     <MenuItem
                        id={item.speed}
                        disabled={item.disable}
                        value={item.speed}
                        key={item.name}
                     >
                        {item.name} - ({item.total_no})
                     </MenuItem>
                  );
               })}
            </Select>
         </FormControl>
      </Box>
   );
}
