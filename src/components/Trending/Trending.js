import React, { useState } from 'react';
import './Trending.css';

function Trending(props) {
    const [trendingMovies,setTrendingMovies]=useState([])
    let trendingMoviesElements;
    async function getTrendingMovies(){
        const TrendingUrl =
          "https://api.themoviedb.org/3/movie/popular?api_key=4d2897d585e151da612cddf1da40808b&language=en-US&page=1";
        const response=await fetch(TrendingUrl);
        const data=await response.json();
        //console.log(data.results)
        setTrendingMovies(data.results);
    }
    getTrendingMovies();

    trendingMoviesElements=trendingMovies.map((movie)=>{
        return (
          <div className='trending-movie-list'>
            <img className='movie-poster'
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
            />
            <p className='movie-title'>{movie.original_title}</p>
          </div>
        );
    })

    return (
      <div className="trending-container">
        <h1 className="trending-head">Trending Movies</h1>
        {trendingMovies.length != 0 ? (
          <div className="movie-list">{trendingMoviesElements}</div>
        ) : (
          <></>
        )}
      </div>
    );
}

export default Trending;