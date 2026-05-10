import React from 'react'

const RestInfo = ({restData}) => {
  return (
    <>
        <div className='flex w-full justify-center mb-2 pb-2'>
            <div className='w-[70%]'>
                <p className='text-2xl text-gray-700 font-semibold mb-1'>{restData?.name}</p>
                <p className='text-xl font-bold'>{"₹" + (("defaultPrice" in restData ? restData.defaultPrice : restData?.price) / 100).toFixed(2)}</p>
                <span className='text-lg text-green-700 font-bold'>{restData?.ratings?.aggregatedRating?.rating}</span>
                <span className='text-gray-500'>( {restData?.ratings?.aggregatedRating?.ratingCountV2} )</span>
                <p className='text-gray-600'>{restData?.description}</p>

            </div>
            <div className='w-[20%] relative'>
                <img className='w-full h-36 object-cover rounded-3xl' src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restData?.imageId} alt="" />
                <button className='absolute bottom-1 rounded-xl left-20 text-2xl font-bold text-green-700 px-2 py-1 bg-white'>ADD</button>
            </div>
        </div>
        <hr className='mb-4'/>
    </>
  )
}

export default RestInfo
