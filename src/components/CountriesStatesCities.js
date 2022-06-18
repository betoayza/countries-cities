import React, { useEffect } from 'react'
import SelectTemplate from './SelectTemplate';

export const CountriesStatesCities = () => {
    const [data, setData] = useState("");

    const options = {
        method: 'GET',
        url: 'https://referential.p.rapidapi.com/v1/country',
        params: {
          fields: 'currency,currency_num_code,currency_code,continent_code,currency,iso_a3,dial_code',
          limit: '250'
        },
        headers: {
          'X-RapidAPI-Key': '88035dfe4fmsh1ec63c9abbef4b2p175d8fjsn2a1ff9f2f8dc',
          'X-RapidAPI-Host': 'referential.p.rapidapi.com'
        }
      };
      
      useEffect(() => {            
        const connection = async (opt) => {
            await axios.request(opt)
            .then((response)=>{
                console.log(response.data);
                setData(response.data);
            }).catch((error)=>{
                console.error(error);
            });
        }
        connection(options);
      }, [options])
      


  return (
    <div>
        <h1>Countries States Cities</h1>
        <SelectTemplate />
        

    </div>
  )
}
