import React, { createContext, useState } from 'react';

export const Context = createContext();

export function ReferenceDataContext({ children }) {
   const referenceDataContext = SetData();

   return (
      <Context.Provider value={referenceDataContext}>
         {children}
      </Context.Provider>
   );
}

function SetData() {
   const [distance, setDistance] = useState({
      1: '',
      2: '',
      3: '',
      4: '',
   });

   const [speed, setSpeed] = useState({
      1: '',
      2: '',
      3: '',
      4: '',
   });

   const [vehicles, setVehicles] = useState(0);

   const [planets, setPlanets] = useState(0);

   const [status, setStatus] = useState(0);

   return {
      distance,
      setDistance,
      speed,
      setSpeed,
      vehicles,
      setVehicles,
      planets,
      setPlanets,
      status,
      setStatus,
   };
}
