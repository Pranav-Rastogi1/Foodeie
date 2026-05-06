import React from "react";

const RestInfo = ({ restData }) => {
  return (
    <div className="flex w-full mt-2 justify-between items-center">
      <div className="w-[70%]">
        <p className="text-gray-700">{restData?.description}</p>
        <p className="font-semibold text-lg">
          Price: ₹{restData?.defaultPrice / 100}
        </p>
        <p className="text-sm text-gray-500">{restData?.category}</p>
      </div>
      <div className="w-[25%] relative">
        <img
          className="w-full h-36 object-cover rounded"
          src={restData?.imageId}
          alt={restData?.name}
        />
        <button className="absolute bottom-2 left-1/4 text-white bg-green-600 px-4 py-1 rounded">
          ADD
        </button>
      </div>
    </div>
  );
};

export default RestInfo;
