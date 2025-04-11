import React, { useState } from "react";
import myData from './imData.json';
import StateCard from "./stateCard";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";


export const Netflix = () => {
  const [filteredData, setFilteredData] = useState(myData);

const clonePhotos =[
  "https://th.bing.com/th/id/OIP.HW16VZ-XcOWza9Eui7LK5AAAAA?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.MK0Gqwk_Nrxx-Db2RT5YUwAAAA?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.qM4ifJoVRPynModhzFdwUgAAAA?rs=1&pid=ImgDetMain",
  "https://www.scrolldroll.com/wp-content/uploads/2020/01/Satte-Pe-Satta-Must-Watch-Bollywood-Comedy-Movies.jpg",
  "https://www.scrolldroll.com/wp-content/uploads/2020/01/All-The-Best-Must-Watch-Bollywood-Comedy-Movies.jpg",
  "https://www.reviewsxp.com/blog/wp-content/uploads/2018/11/Badrinath-Ki-Dulhania-2-768x1195.jpg",
  "https://www.scrolldroll.com/wp-content/uploads/2020/01/Hulchul-Must-Watch-Bollywood-Comedy-Movies-768x1109.jpg",
  "https://th.bing.com/th/id/R.f6cd7872a05e57b2f43ae05cfdd3045c?rik=zHzujt8lVl3Nug&riu=http%3a%2f%2fwww.scrolldroll.com%2fwp-content%2fuploads%2f2020%2f01%2fPhas-Gaye-Re-Obama-Must-Watch-Bollywood-Comedy-Movies.jpg&ehk=Ah0XPc1qw12TcmzPFnodQj%2fZv81rnF9WgI8xIeUHpo8%3d&risl=&pid=ImgRaw&r=0",
  "https://www.pinkvilla.com/images/2022-10/1665568926_do-dooni-char.jpg",


]

  
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
  element={
    <div style={{ padding: "20px", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {clonePhotos.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`BookMyshow Phot ${index + 1}`}
          style={{ width: "200px", height: "300px", margin: "10px", borderRadius: "8px" }}
        />
      ))}
    </div>
  }
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









