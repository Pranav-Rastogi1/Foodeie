import React from 'react'
import { useParams } from 'react-router';
import { useEffect,useState } from 'react';
import MenuCard from './MenuCard';
const RestaurantMenu = () => {
    let {id} = useParams();
    // console.log(id);
    const [RestData,setRestData]=useState([]);
    const [selected,setSelected]=useState(null);
    useEffect(()=>{
            async function fetchData(){
    
                const proxyServer="https://cors-anywhere.herokuapp.com/"
                const swiggyApi=`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5211&lng=73.8502&restaurantId=${id}`;
                const response =await fetch(proxyServer+swiggyApi);
                // console.log(response);
                const data=await response.json();
                // console.log(data);
                const tempdata=data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                const filterdata=tempdata.filter((item)=>'title' in item?.card?.card);
                setRestData(filterdata);
            }
            fetchData();
        },[])

        console.log(RestData);
  return (
    <>
        <div className='w-[80%] mt-20 mb-10'>
          <button className={`text-2xl py-2 px-6 mr-2 border rounded-2xl ${ selected === 'veg' ? 'bg-green-500 text-white' : 'bg-white text-black' } `} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
          <button className={`text-2xl py-2 px-6 border rounded-2xl ${ selected === 'non-veg' ? 'bg-red-500 text-white' : 'bg-white text-black' } `} onClick={()=>setSelected(selected==='non-veg'?null:'non-veg')}>Non-veg</button>
        </div>
    <div className='w-[80%] mx-auto'>
        {
            RestData?.map((item)=><MenuCard key={item?.card?.card?.title} item={item?.card?.card} foodselected={selected}></MenuCard>)
        }
    </div>
    </>
  )
}

export default RestaurantMenu

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import MenuCard from "./MenuCard";

// // Import your local JSON file
// import data from "../Data.json";

// const RestaurantMenu = () => {
//   let { id } = useParams();
//   const [RestData, setRestData] = useState([]);

//   useEffect(() => {
//     // Instead of fetching, use the local JSON
//     const tempdata = data?.cards?.filter((item) => "title" in item?.dish?.info);
//     console.log(tempdata);
//     setRestData(tempdata);
//   }, []);

//   return (
//     <div className="w-[80%] mx-auto">
//       {RestData?.map((item) => (
//         <MenuCard key={item?.dish?.info?.id} item={item?.dish?.info} />
//       ))}
//     </div>
//   );
// };

// export default RestaurantMenu;
