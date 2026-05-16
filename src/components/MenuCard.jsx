import React from 'react'
import RestInfo from './RestInfo';

const MenuCard = ({item,foodselected}) => {
  const [isOpen,setIsOpen] = React.useState(true);

  if("categories" in item){
    return (
      <div className='w-full'>
        <h1 className='text-3xl font-bold mb-4'>{item?.title}</h1>
        <div>
          {
              item?.categories?.map((menuItem)=><MenuCard key={menuItem?.title} item={menuItem}/>)
          }
        </div>
      </div>
    )
  }

  if(!isOpen){
    return (
      <div className='w-full'>
      <div className='flex justify-between items-center w-full'>
      <p className='text-3xl font-bold mb-4'>{item?.title}</p>
      <button className='text-3xl font-bold mr-40' onClick={() => setIsOpen(!isOpen)}>{isOpen?'˅':'˄'}</button>
      </div>
      <div className='h-5 bg-gray-200 mt-2 mb-2'></div>
    </div>
    )
  }
  
  if(foodselected==='veg'){
      return (
      <div className='w-full'>
      <div className='flex justify-between items-center w-full'>
      <p className='text-3xl font-bold mb-4'>{item?.title}</p>
      <button className='text-3xl font-bold mr-40' onClick={() => setIsOpen(!isOpen)}>{isOpen?'˅':'˄'}</button>
      </div>
      <div>
        {
            item?.itemCards?.filter((food)=>food?.card?.info?.isVeg === 1).map((menuItem)=><RestInfo key={menuItem?.card?.info?.id} restData={menuItem?.card?.info}/>)
        }
      </div>
      <div className='h-5 bg-gray-200 mt-2 mb-2'></div>
    </div>
      )
    }
  
    if(foodselected==='non-veg'){
      return (
          <div className='w-full'>
      <div className='flex justify-between items-center w-full'>
      <p className='text-3xl font-bold mb-4'>{item?.title}</p>
      <button className='text-3xl font-bold mr-40' onClick={() => setIsOpen(!isOpen)}>{isOpen?'˅':'˄'}</button>
      </div>
      <div>
        {
            item?.itemCards?.filter((food)=>food?.card?.info?.isVeg !== 1).map((menuItem)=><RestInfo key={menuItem?.card?.info?.id} restData={menuItem?.card?.info}/>)
        }
      </div>
      <div className='h-5 bg-gray-200 mt-2 mb-2'></div>
    
        </div>
      )
    }

  return (
    <>
    <div className='w-full'>
      <div className='flex justify-between items-center w-full'>
      <p className='text-3xl font-bold mb-4'>{item?.title}</p>
      <button className='text-3xl font-bold mr-40' onClick={() => setIsOpen(!isOpen)}>{isOpen?'˅':'˄'}</button>
      </div>
      <div>
        {
            item?.itemCards?.map((menuItem)=><RestInfo key={menuItem?.card?.info?.id} restData={menuItem?.card?.info}/>)
        }
      </div>
      <div className='h-5 bg-gray-200 mt-2 mb-2'></div>
    </div>
    </>
  )
}

export default MenuCard
