"use client";
import React, { useState, useEffect } from "react";
import classes from "./Transactions.module.css";
import Transaction from "./Transaction";
const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

  async function getTransactions() {
    const url = process.env.NEXT_PUBLIC_API_URL + "transactions";
    const response = await fetch(url);
    return await response.json();
  }

  let balance = 0;
  for (const transaction of transactions) {
    balance += transaction.price;
  }

  balance = balance.toFixed(2);

  const cents = balance.split(".")[1];

  return (
    <>
      <h1 className={classes.value}>
        {balance}
        <span className={classes.span}>{cents}</span>
      </h1>
      {transactions.length > 0 &&
        transactions.map((transaction) => (
          <Transaction
            key={transaction._id}
            name={transaction.name}
            description={transaction.description}
            price={transaction.price}
            date={transaction.date}
          />
        ))}
      <Transaction
        name={"Salário"}
        description={"Accord Contabilidade"}
        price={2000}
        date={"29/08/2023"}
      />
    </>
  );
};

export default Transactions;
