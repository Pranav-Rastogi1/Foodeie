import React from "react";
import RestInfo from "./RestInfo";

const MenuCard = ({ item }) => {
  return (
    <div className="w-full border p-4 my-2 rounded shadow">
      <h2 className="text-xl font-bold">{item?.name}</h2>
      <RestInfo restData={item} />
    </div>
  );
};

export default MenuCard;
