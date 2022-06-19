import React, {useState } from "react";
import SelectTemplate from "./SelectTemplate";

export const CountriesStatesCities = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  
  return (
    <div>
      <h1>Countries States Cities</h1>
      <SelectTemplate title={"country"} handleChange={(e)=>setCountry(e.target.value)}/>
      {country && <SelectTemplate title={"state"} handleChange={(e)=>setState(e.target.value)}/>}
      {state && <SelectTemplate title={"city"} handleChange={(e)=>setCity(e.target.value)}/>}
    </div>
  );
};
