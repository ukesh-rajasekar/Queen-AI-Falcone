import React, { useEffect, useState } from 'react';
import { Context } from '../tools/ReferenceDataContext';
import { getData } from './api';
import { useContext } from 'react';

import DropDown2 from './DropDown2';
import { Box } from '@mui/system';

export default function SelectVehicles() {
   const { distance, speed, setSpeed, vehicles, setVehicles } =
      useContext(Context);

   const [saveVehicles, setSaveVehicles] = useState(0);

   console.log(vehicles, 'vehicles');

   const setDisable = (data) => {
      const tempList = [];
      data.map((item) => {
         const tempObj = item;
         tempObj['disable'] = false;
         tempList.push(tempObj);
      });
      return tempList;
   };

   const checkSelectedVehicles = (data) => {
      const tempList = [];
      data.map((item) => {
         const tempObj = item;
         tempObj.disable = false;
         for (var i = 1; i < 5; i++) {
            if (speed[i] === tempObj.speed) {
               if (tempObj.total_no == 0) {
                  tempObj.disable = true;
                  tempList.push(tempObj);
               } else {
                  tempObj.total_no = tempObj.total_no - 1;

                  if (tempObj.total_no == 0) {
                     tempObj.disable = true;
                     tempList.push(tempObj);
                  }
               }
            }
         }
         if (tempObj.disable === false) tempList.push(tempObj);
      });
      setVehicles(tempList);
   };

   async function doFetch(url) {
      const data = await getData(url);
      setSaveVehicles(data);
      const alteredVehicles = setDisable(data);
      setVehicles(alteredVehicles);
   }

   useEffect(() => {
      doFetch('vehicles');
   }, []);

   useEffect(() => {
      var tempVehicles = JSON.parse(JSON.stringify(saveVehicles));
      if (tempVehicles) checkSelectedVehicles(tempVehicles);
   }, [distance, speed]);

   if (!vehicles) return <>...</>;

   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '3rem',
            width: '100%',
         }}
      >
         <h2>Select the vehicle:</h2>

         {[1, 2, 3, 4].map((item) => {
            return (
               <DropDown2
                  key={item}
                  items={vehicles}
                  vehicleNum={item}
                  speed={speed}
                  setSpeed={setSpeed}
                  distance={distance[item]}
               />
            );
         })}
      </Box>
   );
}
