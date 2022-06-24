import React, {useState } from "react";
import {CountriesSelect} from './CountriesSelect';
import {CitiesSelect} from './CitiesSelect';

export const CountriesStatesCities = () => {
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  
  return (
    <div>
      <h1>Countries States Cities</h1>
      <CountriesSelect title={"country"} handleChange={(e)=>setCountry(e.target.value)}/>
      {country && <CitiesSelect title={"cities"} country={country} handleChange={(e)=>setCity(e.target.value)}/>}
      {/* {state && <SelectTemplate title={"cities"} levelUpSelected={} handleChange={(e)=>setCity(e.target.value)}/>} */}
      {city && `${country}-${city}`}
    </div>
  );
};
