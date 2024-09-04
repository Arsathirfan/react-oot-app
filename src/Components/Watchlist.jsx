import React from 'react';

const Watchlist = () => {
  return (
    <>
    <div className='flex justify-center mt-[100px] cursor-pointer'>
      <div className='flex bg-blue-400 rounded-lg h-[2rem] w-[8rem] items-center justify-center text-white font-bold mx-4'>Action</div>
      <div className='flex bg-blue-400 rounded-lg h-[2rem] w-[8rem] items-center justify-center text-white font-bold mx-4'>Comedy</div>
      <div className='flex bg-blue-400 rounded-lg h-[2rem] w-[8rem] items-center justify-center text-white font-bold'>Romance</div>
    </div>

      <div className='mt-[20px] flex justify-center'>
        <input type='text' className='bg-gray-300 h-[2rem] w-[18rem] rounded-lg px-4 border-none' placeholder='Search Movie' />
      </div>
      
      <div className='overflow-hidden rounded-lg mt-[80px] border border-gray-300 m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th className='px-5 py-3'>Movie</th>
              <th className='px-5 py-3'>Rating</th>
              <th className='px-5 py-3'>Popularity</th>
              <th className='px-5 py-3'>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b-2'>
              <td className='flex items-center px-5 py-5'>
                <img className='w-[10rem] h-[6rem]' src={'https://m.economictimes.com/thumb/msid-103219939,width-1600,height-900,resizemode-4,imgsize-89780/game-of-thrones-legends-release-date-what-we-know-so-far.jpg'} alt='Game Of Thrones' />
                <div className='ml-[200px]'>Game Of Thrones</div>
              </td>
              <td className='py-5'>9.3</td>
              <td className='py-5'>Very High</td>
              <td className='py-5'>Fantasy, Drama</td>
              <td className='py-5 text-red-600'>Delete</td>

            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
