import React, {useState } from "react";
import {CountriesSelect} from './CountriesSelect';
import {CitiesSelect} from './CitiesSelect';

export const CountriesStatesCities = () => {
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  
  return (
    <div id="main-div">
      <h1>Countries States Cities</h1>
      <CountriesSelect title={"country"} setCountry={setCountry} setCity={setCity} handleChange={(e)=>setCountry(e.target.value)}/>
      {country && <CitiesSelect title={"cities"} country={country} handleChange={(e)=>setCity(e.target.value)}/>}
      {city && <label id="result-label">{`${country}-${city}`}</label>}
    </div>
  );
};
