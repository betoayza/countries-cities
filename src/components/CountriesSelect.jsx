import React, {useState, useEffect} from "react";
import axios from 'axios';


// import { useFetch } from "../hooks/useFetch";
// import Loader from "./Loader";
// import Message from "./Message";

export const CountriesSelect = ({ title, handleChange }) => {
  
  const [data, setData] = useState(null);

  //if (!data) return null; //avoid innecesary renders
  // if(error){
  //   return <Message mgs={`Error ${error.status}: ${error.statusText}`} />
  // }

  let id = Date.now();
  let label = title.charAt(0).toUpperCase() + title.slice(1); 

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://countriesnow.space/api/v0.1/countries',
      //url: 'https://api.hybridgfx.com/api/list-countries-states-cities',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
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
  

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {/* {loading && <Loader />} */}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Choice {title}</option>
        {data && data.data.map((el, index)=> <option key={index}>{el[title]}</option>)}
      </select>
    </div>
  );
};



