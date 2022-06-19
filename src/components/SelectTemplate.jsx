import React, {useState, useEffect} from "react";
import axios from 'axios';

// import { useFetch } from "../hooks/useFetch";
// import Loader from "./Loader";
// import Message from "./Message";

const SelectTemplate = ({ title, handleChange }) => {
  
  const [data, setData] = useState(null);

  //if (!data) return null; //avoid innecesary renders
  // if(error){
  //   return <Message mgs={`Error ${error.status}: ${error.statusText}`} />
  // }

  let id = Date.now();
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options={};

  useEffect(() => {
    switch(title){
      case 'country':
         options = {
          method: 'GET',
          url: 'https://countries-states-cities-dataset.p.rapidapi.com/list-countries',
          headers: {
            'X-RapidAPI-Key': '88035dfe4fmsh1ec63c9abbef4b2p175d8fjsn2a1ff9f2f8dc',
            'X-RapidAPI-Host': 'countries-states-cities-dataset.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function (response) {
          console.log(response.data);
          setData(response.data);
          console.log(data);
        }).catch(function (error) {
          console.error(error);
        });
        break;
  
      // case 'state':
      //    options = {
      //     method: 'GET',
      //     url: 'https://referential.p.rapidapi.com/v1/state',
      //     params: {fields: 'iso_a2', name: 'tex', iso_a2: 'us', lang: 'en', limit: '250'},
      //     headers: {
      //       'X-RapidAPI-Key': '88035dfe4fmsh1ec63c9abbef4b2p175d8fjsn2a1ff9f2f8dc',
      //       'X-RapidAPI-Host': 'referential.p.rapidapi.com'
      //     }
      //   };      
      //   axios.request(options).then(function (response) {
      //     console.log(response.data);
      //     setData(response.data);
      //   }).catch(function (error) {
      //     console.error(error);
      //   });
      //   break;
  
      // case 'city':
      //   options = {
      //     method: 'GET',
      //     url: 'https://referential.p.rapidapi.com/v1/city',
      //     params: {
      //       fields: 'iso_a2,state_code,state_hasc,timezone,timezone_offset',
      //       iso_a2: 'us',
      //       lang: 'en',
      //       state_code: 'US-CA',
      //       prefix: 'san fr',
      //       limit: '250'
      //     },
      //     headers: {
      //       'X-RapidAPI-Key': '88035dfe4fmsh1ec63c9abbef4b2p175d8fjsn2a1ff9f2f8dc',
      //       'X-RapidAPI-Host': 'referential.p.rapidapi.com'
      //     }
      //   };      
      //   axios.request(options).then(function (response) {
      //     console.log(response.data);
      //     setData(response.data);
      //   }).catch(function (error) {
      //     console.error(error);
      //   });
      //   break;
    };  
  }, [title])  

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {/* {loading && <Loader />} */}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Choice {title}</option>
        {data && data.data.result.data.map(el=> <option key={el.id} value={el.id}>{el.name}</option>)}
      </select>
    </>
  );
};

export default SelectTemplate;


