import React, { useState } from 'react';
import './Search.css';
import Trending from '../Trending/Trending';

function Search(props) {
    const [movieSearch,setMovieSearch]=useState("");
    const[isSearchClicked,setIsSearchClicked]=useState(false);
    const [moviesSearchList,setMoviesSearchList]=useState([]);

    async function searchMovie(){
        setIsSearchClicked(true);
        const api_url="https://api.themoviedb.org/3/search/movie?api_key=4d2897d585e151da612cddf1da40808b&language=en-US&query="+movieSearch;
        const response=await fetch(api_url);
        const data=await response.json();
        // const d=data.results.map((item)=>{
        //     console.log(item.title)
        // })
        setMoviesSearchList(data.results);
        console.log("movie details : "+JSON.stringify(data.results[0]));
    }

    const moviesSearchedElement=moviesSearchList.map((movie)=>{
        return(
            <div className='movie-search-list'>
                <h2 className='movie-title'>{movie.title}</h2>
            </div>
        )
    })
    return (
      <div className="search-container">
        <img className="search-banner" src="./assets/image3.jpg" />
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Type title of the movie or anything ....."
            onChange={(event) => {
              setMovieSearch(event.target.value);
            }}
          />
          <button onClick={searchMovie}> Search</button>
        </div>
        
        {isSearchClicked===false?<Trending />:moviesSearchedElement}
      </div>
    );
}

export default Search;