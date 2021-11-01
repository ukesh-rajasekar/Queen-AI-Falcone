import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Context } from '../tools/ReferenceDataContext';
import { getData } from './api';
import { useContext } from 'react';

import DropDown from './DropDown';

export default function SelectPlanets() {
   const { distance, setDistance, speed, planets, setPlanets } =
      useContext(Context);

   const setDisable = (data) => {
      const tempList = [];
      data.map((item) => {
         const tempObj = item;
         tempObj['disable'] = false;
         tempList.push(tempObj);
      });
      return tempList;
   };

   const checkSelectedPlanets = (data) => {
      const tempList = [];
      data.map((item) => {
         const tempObj = item;
         tempObj.disable = false;
         for (var i = 1; i < 5; i++) {
            if (distance[i] === tempObj.distance) {
               tempObj.disable = true;
               tempList.push(tempObj);
            }
         }
         if (tempObj.disable === false) tempList.push(tempObj);
      });
      setPlanets(tempList);
   };

   async function doFetch(url) {
      const data = await getData(url);

      const alteredPlanets = setDisable(data);

      setPlanets(alteredPlanets);
   }

   useEffect(() => {
      doFetch('planets');
   }, []);

   useEffect(() => {
      if (planets) checkSelectedPlanets(planets);
   }, [distance, speed]);

   if (!planets) return <>Loading...</>;

   return (
      <Paper elevation={3}>
         <h2>Select planets you want to search in:</h2>
         {[1, 2, 3, 4].map((item) => {
            return (
               <DropDown
                  key={item}
                  items={planets}
                  selectedDestination={setDistance}
                  destinationNum={item}
                  distance={distance}
                  setPlanets={setPlanets}
               />
            );
         })}
      </Paper>
   );
}
