import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3c132f9bd523aa09e671e293a25b0334&language=en-US&page=1`)
      .then(res => {
        setBanners(res.data.results);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIn(false);
      setTimeout(() => {
        setCurrentBannerIndex(prevIndex => (prevIndex + 1) % banners.length);
        setSlideIn(true);
      }, 500); // duration of the slide-out effect
    }, 7000);

    return () => clearInterval(interval);
  }, [banners]);

  const currentBanner = banners[currentBannerIndex];

  return (
    <div className={`h-[75vh] w-full bg-no-repeat bg-center flex items-end justify-center transition-transform duration-500 ${slideIn ? 'translate-x-0' : 'translate-x-full'}`}
         style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${currentBanner?.backdrop_path})`, backgroundSize: 'cover' }}>
      <div className='text-white text-center w-full bg-gray-900 bg-opacity-60 py-4'>{currentBanner?.title}</div>
    </div>
  );
};

export default Banner;
