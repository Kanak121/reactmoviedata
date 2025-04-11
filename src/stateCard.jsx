import React from 'react'
import{useState} from 'react';



const StateCard = (props) => {
  const[showDetails,setShowDetails]= useState(false);

  const handleImageClick =()=>{
      setShowDetails(!showDetails);
  }
  const{id,img,name,rating,summary,watch}= props.data
  return (
    <>
 
  
  <div>
       <li className='card' key={id}>
         <div>
        <img src={img} 
         alt ="im" 
        
          className='my-image' onClick={handleImageClick}
          />

      </div>
      {showDetails &&(
      <div className='flex flex-col gap-6 py-6 px-6'>
        <div className="movie">
      <h2 > Name :{name}</h2>
      <h3 > Rating:
        <span className={`rating bord ${rating>=8 ? "super-hit":"average-hit"}`}> {rating}  </span>
        </h3>
      <p className="text-3xl font-bold underline">Summary:{summary}</p>
     
      <a href ={watch}>
      <button style={{backgroundColor:`${rating>=8? "green":"red"}`}}className='btn'>Watch
      </button>
      
      
      </a>
      </div>
      
      </div>
      )}
  
    </li>
    </div>
   
    </>
  )
}

export default StateCard 
