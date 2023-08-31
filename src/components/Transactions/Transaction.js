"use client";

import React, { useState, useEffect } from "react";

const Transaction = ({ name, description, price, date, onDelete }) => {
  const [priceIsPositive, setPriceIsPositive] = useState(false);

  useEffect(() => {
    setPriceIsPositive(price > 0);
  }, [price]);

  const handleDeleteClick = (_id) => {
    onDelete(_id);
  };
  return (
    <div>
      <div>
        <div>{name}</div>
        <div>{description}</div>
      </div>
      <div>
        <div onClick={handleDeleteClick}>R${price.toFixed(2)} </div>
        <div>{date}</div>
      </div>
    </div>
  );
};

export default Transaction;
