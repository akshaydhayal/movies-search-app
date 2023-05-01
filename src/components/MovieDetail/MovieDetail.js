import React, { useEffect, useState } from 'react';
import './MovieDetail.css';

function MovieDetail(props) {
    const [movieData,setMovieData]=useState({});
    const [movieReview,setMovieReview]=useState([]);
    const [similarMovies,setSimilarMovies]=useState([]);
    const [movieCast,setMovieCast]=useState([]);

    const getMovieDetails=async()=>{
        const movie_api_url=`https://api.themoviedb.org/3/movie/${props.movieId}?api_key=4d2897d585e151da612cddf1da40808b&language=en-US`;
        const movie_reviews_api_url = `https://api.themoviedb.org/3/movie/${props.movieId}/reviews?api_key=4d2897d585e151da612cddf1da40808b&language=en-US&page=1`;
        const movieResponse=await fetch(movie_api_url);
        const moviesData=await movieResponse.json();
        setMovieData(moviesData);
        console.log("movieData : "+JSON.stringify(moviesData));

        const reviewResponse=await fetch(movie_reviews_api_url);
        const reviewData=await reviewResponse.json();
        setMovieReview(reviewData.results);
        console.log("reviewData : "+JSON.stringify(reviewData.results[0])); 

        const similar_movie_api_url = `https://api.themoviedb.org/3/movie/${props.movieId}/similar?api_key=4d2897d585e151da612cddf1da40808b&language=en-US&page=1`;
        const similarMoviesResponse=await fetch(similar_movie_api_url);
        const similarMoviesData=await similarMoviesResponse.json();
        setSimilarMovies(similarMoviesData.results);
        console.log("Similar movies : "+JSON.stringify(similarMoviesData.results));

        const movie_cast_api_url = `https://api.themoviedb.org/3/movie/1271/credits?api_key=4d2897d585e151da612cddf1da40808b&language=en-US`;
        const castResponse = await fetch(movie_cast_api_url);
        const moviesCastData = await castResponse.json();
        setMovieCast(moviesCastData.cast);
        console.log(
          "Movie Cast : " + JSON.stringify(moviesCastData.cast[0].original_name)
        );



        
    }
    useEffect(()=>{
        getMovieDetails();
    },[])
    

//     {
//     "adult": false,
//     "backdrop_path": "/2f9YnS7JKrIqBv7dMQG8sRS2aJv.jpg",
//     "belongs_to_collection": {
//         "id": 921781,
//         "name": "Pushpa Collection",
//         "poster_path": null,
//         "backdrop_path": null
//     },
//     "budget": 0,
//     "genres": [
//         {
//             "id": 28,
//             "name": "Action"
//         },
//         {
//             "id": 18,
//             "name": "Drama"
//         },
//         {
//             "id": 53,
//             "name": "Thriller"
//         }
//     ],
//     "homepage": "",
//     "id": 690957,
//     "imdb_id": "tt9389998",
//     "original_language": "te",
//     "original_title": "పుష్పా - The Rise",
//     "overview": "Pushpa Raj is a coolie who rises in the world of red sandalwood smuggling. Along the way, he doesn’t shy from making an enemy or two.",
//     "popularity": 37.854,
//     "poster_path": "/r1yAzVQNbCbPTbB3GZFour9Qr0t.jpg",
//     "production_companies": [
//         {
//             "id": 69125,
//             "logo_path": "/7kRvsVRhT76VTbhGLgJ2CrTgdpa.png",
//             "name": "Mythri Movie Makers",
//             "origin_country": "IN"
//         },
//         {
//             "id": 148217,
//             "logo_path": null,
//             "name": "Muttamsetty Media",
//             "origin_country": ""
//         },
//         {
//             "id": 98547,
//             "logo_path": "/zg5fGlvaE1GzCLUej1X6o5sWxGS.png",
//             "name": "Goldmines Telefilms",
//             "origin_country": "IN"
//         }
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "IN",
//             "name": "India"
//         }
//     ],
//     "release_date": "2021-12-16",
//     "revenue": 0,
//     "runtime": 179,
//     "spoken_languages": [
//         {
//             "english_name": "Telugu",
//             "iso_639_1": "te",
//             "name": "తెలుగు"
//         }
//     ],
//     "status": "Released",
//     "tagline": "",
//     "title": "Pushpa: The Rise - Part 1",
//     "video": false,
//     "vote_average": 7.423,
//     "vote_count": 78
// }


    return (
      <div className="movie-detail-container">
        <div className="movie-banner">
          <img
            className="movie-img"
            src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
          />
          {movieData.genres ? (
            <div className="movie-genres">
              {movieData.genres.map((item) => {
                return <div className="movie-type">{item.name}</div>;
              })}
            </div>
          ) : (
            <p></p>
          )}
        </div>
        <div>
          <div className="movie-nav">
            <p>Info</p>
            <p>Reviews</p>
            <p>Third option</p>
          </div>
          <p>NOTABLE CAST</p>
          {movieCast.length != 0 ? (
            <div className="cast-list">
              {movieCast.map((item, ind) => {
                if (ind < 5) {
                  return (
                    <div>
                      <img
                        className="cast-img"
                        src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                      />
                      <p>{item.original_name}</p>
                    </div>
                  );
                }
              })}
            </div>
          ) : (
            <p></p>
          )}
          <p>title : {movieData.title}</p>
          <p>runtime : {movieData.runtime}</p>
          <p>tagline : {movieData.tagline}</p>
          <p>revenue : {movieData.revenue}</p>
          <p>budget : {movieData.budget}</p>
          <p>release data : {movieData.release_date}</p>
          <p>bio : {movieData.overview}</p>
          <p>vote avg : {movieData.vote_average}</p>
          <p>Adult movie : {movieData.adult}</p>
          <p>
            Reviews :{" "}
            {movieReview.length != 0 ? movieReview[0].content : "ghdjk"}
          </p>

          {movieData.spoken_languages ? (
            <div className="movie-languages">
              <p>Languages : </p>
              {movieData.spoken_languages.map((lang) => {
                return <p>{lang.english_name}</p>;
              })}
            </div>
          ) : (
            <p></p>
          )}
          <p>Similar Movies</p>
          {similarMovies.length!= 0 ? 
          <div className='similar-movie-list'>
            {(similarMovies.map((movie,ind) => {
            if(ind<5){
                return (
                  <div className="similar-movie">
                    <img
                      className="similar-movie-poster"
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    />
                    <p className='similar-movie-title'>{movie.title}</p>
                  </div>
                );
            }
          }))}</div>:<p></p>}
        </div>
      </div>
    );
}

export default MovieDetail;