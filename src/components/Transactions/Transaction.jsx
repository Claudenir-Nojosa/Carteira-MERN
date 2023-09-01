"use client";

import React from "react";

const Transaction = ({ name, description, price, date, onDelete }) => {

  const handleDeleteClick = (_id) => {
    onDelete(_id);
  };
  return (
    <div className="grid grid-cols-2 w-100 px-80 ">
      <div className="text-left text-2xl ">
        <div className="">{name}</div>
        <div className="py-1 text-gray-700/60 dark:text-gray-400 border-b-4">
          {description}
        </div>
      </div>
      <div className="text-right text-2xl pb-20">
        <div className={`${price > 0 ? 'text-green-600' : 'text-red-600'}`} onClick={handleDeleteClick}>R${price.toFixed(2)} </div>
        <div className="py-1 text-gray-700/60 dark:text-gray-400 border-b-4 ">
          {date}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
