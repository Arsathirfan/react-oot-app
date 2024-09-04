import React from 'react'

const Pagination = ({pageb, pagef, pageno}) => {
  return (
    <div className='bg-gray-500 flex justify-center px-4 m-5'>
      <div className='px-8 hover:cursor-pointer' onClick={pageb}><i class="fa-solid fa-arrow-left"></i></div>
      <div className='font-bold'>{pageno}</div>
      <div className='px-8 hover:cursor-pointer' onClick={pagef}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination
