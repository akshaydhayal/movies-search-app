import React, { useState } from 'react';
import './Search.css';
import Trending from '../Trending/Trending';
import MovieDetail from '../MovieDetail/MovieDetail';

function Search(props) {
    const [movieSearch,setMovieSearch]=useState("");
    const[isSearchClicked,setIsSearchClicked]=useState(false);
    const [moviesSearchList,setMoviesSearchList]=useState([]);

    const [isMovieClicked,setIsMovieClicked]=useState({
                                              "status":false,
                                              "movieId":null,
                                            });

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
        return (
          <div className="movie-search-list">
            <div className="movie-item" onClick={()=>{setIsMovieClicked({"status":true,"movieId":movie.id})}}>
              <img
                className="movie-poster-img"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
              <div className="movie-details">
                <p className="movie-title">{movie.title}</p>
                <p className="movie-release">
                  RELEASE DATE : {movie.release_date}
                </p>
                <p className="movie-rating">
                  RATING: {movie.vote_average}  ({movie.vote_count} People voted this)
                </p>

                <p className="movie-bio">{movie.overview}</p>
                {/* <p className="movie-popularity">popularity : {movie.popularity}</p> */}

                {/* <p className="movie-voters">vote count : {movie.vote_count}</p> */}
              </div>
            </div>
          </div>
        );
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
        
        {isSearchClicked===false?<Trending />:(isMovieClicked.status===false? moviesSearchedElement:<MovieDetail movieId={isMovieClicked.movieId}/>)}
      </div>
    );
}

export default Search;