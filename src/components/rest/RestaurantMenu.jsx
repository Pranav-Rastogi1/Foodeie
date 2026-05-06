import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import data from "../../dataa.json";

const RestaurantMenu = () => {
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    const tempdata = data?.data?.cards[0]?.card?.card?.itemCards;
    setRestData(tempdata);
  }, []);

  return (
    <div className="w-[80%] mx-auto">
      {RestData?.map((item) => (
        <MenuCard key={item?.card?.info?.id} item={item?.card?.info} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
