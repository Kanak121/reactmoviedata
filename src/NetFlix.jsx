import React, { useState } from "react";
import myData from './imData.json';
import StateCard from "./stateCard";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 import { BrowserRouter as Router, Routes, Route,Link, useNavigate } from "react-router-dom";


export const Netflix = () => {
  const [filteredData, setFilteredData] = useState(myData);





  
  const ActionClick = () => {
    const highRatedMovies = myData.filter((movie) => movie.rating >= 8);
    setFilteredData(highRatedMovies);
  };

  const AverageClick = () => {
    const averageRatedMovies = myData.filter((movie) => movie.rating < 8);
    setFilteredData(averageRatedMovies);
  };

  const HomeClick = () => {
    setFilteredData(myData);
  };
  const BasicForm=()=>{
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const navigate = useNavigate();

    const formSubmit=(k)=>{
      k.preventDefault();
      if(name&&age) {
        console.log(`${name}:${age}`)
        alert(`Hey${name} Welcome  `)
        navigate("/home");
      }
      else{
        alert('Must fill out form to proceed')
      }
    };

  

  return(
    <>
    <h1>Please fill form</h1>
    <form onSubmit={formSubmit}>
      <label>
        Name:
        <input
        type = "text"
        value ={name}
        onChange={(k)=>setName(k.target.value)}
        />
      </label>

      <label>
        Age:
        <input 
        type ="number"
        value={age}
        onChange={(k)=>setAge(k.target.value)}
        />
      </label>
      <br/>
      <button type ="submit">Next</button>
    </form>
    </>
  )
}

  return (
    <>
      <Router>
      <div>
        <div className='main-cs'>
          <Navbar bg="light" data-bs-theme="light">

              <Navbar.Brand as={Link} to="/bookmyshow" className='head-cs' >BookMyshow</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link}to="/home" className='home-cs' onClick={HomeClick}>Home</Nav.Link>
                <Nav.Link as={Link} to="/Average" className='super-cs' onClick={AverageClick}>Average</Nav.Link>
                <Nav.Link as={Link} to="/Super-hits" className='action-cs' onClick={ActionClick}>Super-Hits</Nav.Link>
              </Nav>
           
          </Navbar>
          <Routes>

          <Route
  path="/bookmyshow"
  element={<BasicForm/>}
/>
            
           
            <Route path ="/home" element={<ul className="grid grid-three--cols">
          {filteredData.map((curElem) => (
            <StateCard key={curElem.id} data={curElem} />
          ))}
        </ul>
        } />


          <Route path = "/average" element={<ul className="grid grid-three--cols">
          {filteredData.map((curElem) => (
            <StateCard key={curElem.id} data={curElem} />
          ))}
        </ul>
        } />

        <Route path ="/Super-hits" element ={<ul className="grid grid-three--cols">
          {filteredData.map((curElem) => (
            <StateCard key={curElem.id} data={curElem} />
          ))}
        </ul>
        } />
          </Routes>
        </div>
        
        
       
      </div>
      </Router>
    </>
  );
};









