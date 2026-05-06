import React, { useEffect, useState } from 'react'
import RestCard from './RestCard';
import Shimmer from './Shimmer';

const Resturant = () => {

    const [RestData,setRestData]=useState([]);
    useEffect(()=>{
        async function fetchData(){

            const proxyServer="https://cors-anywhere.herokuapp.com/"
            const swiggyApi="https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5211&lng=73.8502&is-seo-homepage-enabled=true"
            const newSwiggyApi="https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=18.5211&lng=73.8502&carousel=true&third_party_vendor=1"


            const response =await fetch(proxyServer+newSwiggyApi);
            const data=await response.json();
            // console.log(data);
            // setRestData(data);
            setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }
        fetchData();
    },[])

      // console.log(RestData);

      // Shimmer effect/skelton effect
      if(RestData.length===0){
        return <Shimmer/>;
      }
      

  return (
    <div className='flex flex-wrap w-[80%] mx-auto mt-20 gap-5'>
      {
        RestData.map((restinfo)=><RestCard key={restinfo.info.id} restinfo={restinfo}></RestCard>)
      }
    </div>
  )
}

export default Resturant
