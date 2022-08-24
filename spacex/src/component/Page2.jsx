import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


export const Page2 = () => {
 const [data,setData] =useState([]);
  useEffect(() => {
     fetch(`https://api.spacexdata.com/v4/launchpads/5e9e4501f509094ba4566f84`)
     .then((res) => res.json())
     .then((res) =>{
      setData(res);
    //  console.log(res);
     })
  },[]);

  return (
    <>
     <div className="main" key={data.id}>
        
          <div>
            <h1>{data.name}</h1>
            <img width="100%" src={data.images.large[0] } alt=""/>
            <h1>{data.full_name}</h1>
            <h3>{data.details}</h3>
             <h4>{data.timezone}</h4>
             
          </div>
  </div>
   </>
  )
}
