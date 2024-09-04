import React from "react";

const MovieCard = ({ posterPath, title, rating, movies, handleAddtowatchlist}) => {
  const formattedRating = rating.toFixed(1);

  return (
    <div
      className="h-[40vh] w-[170px] m-1.5 mb-6 bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col group relative"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})` }}
    >
      <div onClick={() => (handleAddtowatchlist(movies))} className="absolute top-2 right-2 bg-gray-900/60 p-1 rounded-full z-20">
        &#128525;
      </div>

      <div className="absolute rounded-xl inset-0 flex flex-col justify-end bg-gray-900/80 opacity-0 group-hover:opacity-100 duration-300 z-10">
        <div className='text-white py-8 px-3'>
          <span className="font-bold">{title}</span><br />
          <span className="font-normal text-sm">Rating: {formattedRating}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
