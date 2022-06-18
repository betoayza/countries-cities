import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelectTemplate = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);
  console.log(data, error, loading);

  if (!data) return null; //avoid innecesary renders
  if(error){
    return <Message mgs={`Error ${error.status}: ${error.statusText}`} />
  }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options=data.response[title];
  console.log(options);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Seleccione {title}</option>
        {data && options.map(el=> <option value={el}>{el}</option>)}
      </select>
    </>
  );
};

export default SelectTemplate;
