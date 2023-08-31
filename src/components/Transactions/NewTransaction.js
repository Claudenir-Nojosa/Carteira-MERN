"use client";
import React, { useState } from "react";
import { LinearGradient } from "react-text-gradients";

const NewTransaction = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    description: "",
    date: "",
    price: "",
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
  const handlePriceInputChange = (event) => {
    setFormInput({
      ...formInput,
      price: event.target.value,
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const url = process.env.NEXT_PUBLIC_API_URL + "transaction";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formInput.name,
          price: formInput.price,
          description: formInput.description,
          date: formInput.date,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar transação.");
      }

      const json = await response.json();
      console.log("result", json);

      setFormInput({
        name: "",
        price: "",
        description: "",
        date: "",
      });
    } catch (error) {
      console.error("Erro ao processar a transação:", error.message);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            placeholder="Movimentação"
            onChange={handleNameInputChange}
            value={formInput.name}
          />
          <input
            type="number"
            placeholder="Valor"
            onChange={handlePriceInputChange}
            value={formInput.price}
          />
          <input
            type="date"
            onChange={handleDateInputChange}
            value={formInput.date}
          />
        </div>
        <div>
          <input
            type="text"
            onChange={handleDescriptionInputChange}
            value={formInput.description}
            placeholder="Descrição"
          />
        </div>
        <button type="submit">Adicionar nova Transação</button>
      </form>

      <h3>
        <LinearGradient gradient={["to right", "#010101, #0f0f0f"]}>
          Sua carteira atual
        </LinearGradient>
      </h3>
      <p>Para excluir, basta clicar em cima do valor.</p>
    </>
  );
};

export default NewTransaction;
