import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import Pagination from './Pagination';

const Movies = ({handleAddtowatchlist}) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  function pageForward()
  {
      setPage(page+1);
  }

  function pageBackward()
  {
    if (page===1)
    {
      setPage(1)
    }
    else
    {
      setPage(page-1);
    }
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3c132f9bd523aa09e671e293a25b0334&language=en-US&page=${page}`)
      .then(res => {
        setMovies(res.data.results); // Use 'results' to access the array of movies
        console.log(res.data.results); // Use 'results' to access the array of movies
      })
      
  }, [page]);

  return (
    <div className='p-5'>
      
      <div className='flex flex-wrap flex-row justify-around'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} title={movie.title} rating={movie.vote_average} handleAddtowatchlist={handleAddtowatchlist} movies={movie}/>
        ))}
      </div>

        <Pagination pageno={page} pagef={pageForward} pageb={pageBackward}/>

    </div>
  );
};

export default Movies;
