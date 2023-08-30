"use client";

import React, { useState, useEffect } from "react";
import classes from "./Transaction.module.css";

const Transaction = ({ name, description, price, date, onDelete }) => {
  const [priceIsPositive, setPriceIsPositive] = useState(false);

  useEffect(() => {
    setPriceIsPositive(price > 0);
  }, [price]);

  const handleDeleteClick = (_id) => {
    onDelete(_id);
  };
  return (
    <div className={classes.transaction}>
      <div className={classes.transactionLeft}>
        <div className={classes.transactionName}>{name}</div>
        <div className={classes.transactionDescription}>{description}</div>
      </div>
      <div className={classes.transactionRight}>
        <div
          className={`${classes.transaction} ${
            priceIsPositive
              ? classes.transactionPriceIncome
              : classes.transactionPriceExpense
          }`}
          onClick={handleDeleteClick}
        >
          R${price.toFixed(2)}{" "}
        </div>
        <div className={classes.transactionDateTime}>{date}</div>
      </div>
    </div>
  );
};

export default Transaction;
