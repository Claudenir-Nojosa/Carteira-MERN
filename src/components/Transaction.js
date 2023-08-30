"use client";

import React, { useState, useEffect } from "react";
import classes from "./Transaction.module.css";

const Transaction = ({ name, description, price, date }) => {
  const [priceIsPositive, setPriceIsPositive] = useState(false);

  useEffect(() => {
    setPriceIsPositive(price > 0);
  }, [price]);

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
        >
          R${price.toFixed(2)}{" "}
        </div>
        <div className={classes.transactionDateTime}>{date}</div>
      </div>
    </div>
  );
};

export default Transaction;
