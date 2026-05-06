import React from 'react'
import { Link } from 'react-router'
const RestCard = ({restinfo}) => {
  return (
    <Link to={`/city/pune/${restinfo?.info?.id}`}>
       <div className="max-w-[280px] transition transform duration-150 hover:scale-95">
      <img className='w-[280px] h-[180px] object-cover rounded-xl' src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restinfo.info.cloudinaryImageId} alt="" />
      <div className='w-[95%] mx-auto mt-3'>
          <div className='font-bold text-xl'>{restinfo?.info?.name}</div>
          <div className='flex gap-2 items-center'>
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
      {/* White background with green border */}
      <circle
        cx="12"
        cy="12"
        r="11"
        fill="white"
        stroke="currentColor"
        strokeWidth="1"
        className="text-green-600"
      />

      {/* Green star */}
      <path
        d="M12 5.2l1.9 3.85 4.25.62-3.08 3 .73 4.2L12 14.9l-3.8 2 .73-4.2-3.08-3 4.25-.62L12 5.2z"
        fill="currentColor"
        className="text-green-600"
      />
            </svg>
           
            <span className='text-lg'>{restinfo?.info?.avgRating}</span>
            <span className='text-lg font-semibold'>{restinfo?.info?.sla?.slaString}</span>
          </div>
          <div>
            <div className='text-gray-600 text-xl mt-1 h-7 overflow-hidden'>{restinfo?.info?.cuisines?.join(', ')}</div>
          </div>
          
      </div>
    </div>
    </Link>
  )
}

export default RestCard
