import React from 'react'
import RestInfo from './RestInfo';

const MenuCard = ({item}) => {
  return (
    <div className='w-full'>
      <h1>{item?.title}</h1>
      <div>
        {
            item?.itemCards?.map((menuItem)=><RestInfo key={menuItem?.card?.info?.id} restData={menuItem?.card?.info}/>)
        }
      </div>
    </div>
  )
}

export default MenuCard
