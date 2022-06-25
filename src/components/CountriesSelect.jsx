import React, {useState, useEffect} from "react";
import axios from 'axios';

// import Loader from "./Loader";
// import Message from "./Message";

export const CountriesSelect = ({ title, handleChange, setCity }) => {
  
  const [data, setData] = useState(null); 
  
  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1); 
  
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://countriesnow.space/api/v0.1/countries',
      //url: 'https://api.hybridgfx.com/api/list-countries-states-cities',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json'
      },
    };
    
    const connect = async (options)=>{
      await axios.request(options)      
      .then(function (response) {         
        console.log(response.data);
        setData(response.data);
        console.log(data);
      }).catch(function (error) {
        console.error(error);
      });
    }
    connect(options);
    
  }, []);  
  
  if (!data) return null; //avoid innecesary renders
  
  return (
    <div id="countries-div">
      <label>{label}</label>
      {/* {loading && <Loader />} */}
      <select name={id} id={id} onClick={()=>setCity(null)} onChange={handleChange}>
        <option value="">Choice {title}</option>
        {data && data.data.map((el, index)=> <option key={index}>{el[title]}</option>)}
      </select>
    </div>
  );
};



