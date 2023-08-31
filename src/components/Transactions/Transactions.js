"use client";
import React, { useState, useEffect } from "react";
import Transaction from "./Transaction";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [balance, setBalance] = useState("0.00");
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, [transactions]);

  async function getTransactions() {
    const url = process.env.NEXT_PUBLIC_API_URL + "transactions";
    const response = await fetch(url);
    return await response.json();
  }

  useEffect(() => {
    const updatedFilteredTransactions = transactions.filter((transaction) => {
      if (filterType === "positive") {
        return transaction.price > 0;
      } else if (filterType === "negative") {
        return transaction.price < 0;
      } else {
        return true;
      }
    });

    setFilteredTransactions(updatedFilteredTransactions);

    let updatedBalance = 0;
    for (const transaction of updatedFilteredTransactions) {
      updatedBalance += transaction.price;
    }
    setBalance(updatedBalance.toFixed(2));
  }, [filterType, transactions]);

  const cents = balance.split(".")[1];

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return format(date, "dd/MM/yyyy", { locale: ptBR });
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleDeleteTransaction = async (id) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}transactions/${id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (response.ok) {
        const updatedTransactions = transactions.filter(
          (transaction) => transaction._id !== id
        );
        setTransactions(updatedTransactions);
      } else {
        console.error("Erro ao excluir transação.");
      }
    } catch (error) {
      console.error("Erro ao excluir transação:", error);
    }
  };
  return (
    <div>
      <div>
        <label>Filtrar por:</label>
        <select value={filterType} onChange={handleFilterChange}>
          <option value="all">Todos</option>
          <option value="positive">Receitas</option>
          <option value="negative">Despesas</option>
        </select>
      </div>
      <h1>
        {balance}
        <span>{cents}</span>
      </h1>
      {filteredTransactions.length > 0 &&
        filteredTransactions.map((transaction) => (
          <Transaction
            key={transaction._id}
            name={transaction.name}
            description={transaction.description}
            price={transaction.price}
            date={formatDate(transaction.date)}
            onDelete={() => handleDeleteTransaction(transaction._id)}
          />
        ))}
    </div>
  );
};

export default Transactions;
