"use client";
import React, { useState } from "react";

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
        headers: {
          "Content-Type": "application/json",
        },
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
      <form className="flex flex-col " onSubmit={submitHandler}>
        <div className="grid grid-cols-2 grid-rows-2 gap-3 ">
          <div>
            <input
              type="text"
              placeholder="Movimentação"
              onChange={handleNameInputChange}
              value={formInput.name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  outline-none text-center"
            />
          </div>
          <div>
            <input
              type="text"
              onChange={handleDescriptionInputChange}
              value={formInput.description}
              placeholder="Descrição"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  outline-none text-center"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Valor"
              onChange={handlePriceInputChange}
              value={formInput.price}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  outline-none text-center"
            />
          </div>
          <div>
            <input
              type="date"
              onChange={handleDateInputChange}
              value={formInput.date}
              className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg block w-full p-2.5  outline-none text-center"
            />
          </div>
        </div>
        <button
          className="bg-[#1F1F1F] rounded-xl py-2 my-9 text-white hover:scale-[1.02] duration-300  dark:bg-gray-700 dark:text-gray/70"
          type="submit"
        >
          Adicionar nova Transação
        </button>
      </form>
    </>
  );
};

export default NewTransaction;
