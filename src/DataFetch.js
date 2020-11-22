import React,{ useState , useEffect } from 'react';
import axios from 'axios';

export default function DataFetch() {
 const[data,setDate]=useState([]);

 useEffect(()=>{
   axios.get('https://api.covid19api.com/total/country/india')
   .then(res =>{
     console.log(res);
     setDate(res.data)     
   }).catch(err=>{
     console.log(err)
   })
 })

  return(
    <div>
       <table class="table table-sm table-dark">
         <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Lat</th>
            <th scope="col">Lon</th>
            <th scope="col">Confirmed</th>
            <th scope="col">Deaths</th>
            <th scope="col">Recovered</th>
            <th scope="col">Active</th>
            <th scope="col">Date</th>
           </tr>
         </thead>
         <tbody>
          
         {
           data.map(data=>  
          <tr>
           <td key={data.id}>{data.Country}</td>
            <td>{data.Lat}</td>
            <td>{data.Lon}</td>
            <td>{data.Confirmed}</td>
            <td>{data.Deaths}</td>
            <td>{data.Recovered}</td>
            <td>{data.Active}</td>
            <td>{data.Date}</td>
          </tr>  
           )} 
         </tbody> 
        </table>
     </div>
  )
}