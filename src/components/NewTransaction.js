"use client";
import React, { useState } from "react";
import classes from "./NewTransaction.module.css";

const NewTransaction = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    description: "",
    date: "",
  });

  const handleNameInputChange = (event) => {
    setFormInput({
      ...formInput,
      name: event.target.value,
    });
  };
  const handleDescriptionInputChange = (event) => {
    setFormInput({
      ...formInput,
      description: event.target.value,
    });
  };
  const handleDateInputChange = (event) => {
    setFormInput({
      ...formInput,
      date: event.target.value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const url = process.env.NEXT_PUBLIC_API_URL + "transaction";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formInput.name,
        description: formInput.description,
        date: formInput.date,
      }),
    }).then((response) => {
      response.json().then((json) => {
        console.log("result", json);
      });
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.basic}>
        <input
          className={classes.formInput}
          type="text"
          placeholder="Movimentação"
          onChange={handleNameInputChange}
          value={formInput.name}
        />
        <input
          className={classes.formInputDate}
          type="date"
          onChange={handleDateInputChange}
          value={formInput.date}
        />
      </div>
      <div
        className={classes.description}
        onChange={handleDescriptionInputChange}
        value={formInput.description}
      >
        <input
          className={classes.formInput}
          type="text"
          placeholder="Descrição"
        />
      </div>
      <button className={classes.formButton} type="submit">
        Adicionar nova Transação
      </button>
    </form>
  );
};

export default NewTransaction;