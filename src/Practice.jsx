import React from 'react'
import{useEffect} from 'react'
import './movieapi.css'


const Practice = () => {
    const [moviedata,setMovieData] = React.useState([]);
    const [search,setsearch] = React.useState("");
    useEffect(()=>{
        if(!search) return;
        const fetchData=async()=>{
            const res = await fetch(`http://www.omdbapi.com/?apikey=4b241219&s=${search}`)
            const data = await res.json();
            console.log(data);  
            setMovieData(data.Search||[]);
        }
        fetchData();
},[search]);
  return (
    <div>
        <header>
            <h2>Movie</h2>
        </header>
        <div>
            <input type ="text"
            placeholder ="Search Movie"
            value={search}
            onChange={(event)=>setsearch(event.target.value)} />
        </div>

        <section className='movie-list'>
           
                    {moviedata.length > 0 ? (
                        moviedata.map((curElem,index)=>{
                            return(
                                <li key  ={index} className='card-item'>
                                    <img src = {curElem.Poster} className='card-img' alt ={curElem.Title}/>
                                    <h3 className='card-title'>{curElem.Title}
                                    </h3>
                                    <p>Year:{curElem.Year}</p>

                                </li>
                            )
                        })
                    ):(
                        <h1>...Loading</h1>
                    )}
              
            
        </section>
      
    </div>
  )
}

export default Practice
