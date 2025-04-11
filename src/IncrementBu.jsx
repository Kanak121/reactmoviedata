import React, { useState } from 'react'

const IncrementBu = () => {
  const[setData,setNewData] = useState([ {name:"Kanak" ,age :21},
    {name:"Janak" ,age :19},
    {name:"Tanak" ,age :26},
    {name:"Lanak",age :99},
  ])
console.log(setData)
const userCount = setData.length;

  return (
 <>
    <div>
      <h1>hey</h1>
      <ul>
      {setData.map((CurElem,index)=>{
        return(
            <li>
             Name:{CurElem.name} - Age:{CurElem.age}  
                         </li>
            
     );
    
     }) }
</ul>
   
    </div>
    
    <p>Totalcount:{userCount}</p>
    </>
   )
}

export default IncrementBu;