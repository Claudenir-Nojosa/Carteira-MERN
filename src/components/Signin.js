"use client";
import React from "react";

const SignIn = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900  min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl dark:bg-gray-300 shadow-lg max-w-3xl p-5 items-center">
        <div className=" px-16">
          <h2 className="font-bold text-3xl text-[#1F1F1F] text-center">
            Cadastre-se
          </h2>
          <p className="text-sm my-4  text-[#1F1F1F] text-center">
            Insira suas informações abaixo
          </p>
          <form className="flex flex-col gap-4">
            <input
              className="p-2 rounded-xl border outline-none text-gray-800/50"
              type="text"
              name="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full outline-none text-gray-800/50"
                type="password"
                name="password"
                placeholder="Senha"
              />
            </div>
            <button className="bg-[#1F1F1F] rounded-xl py-2 mt-5  dark:bg-gray-900 dark:text-gray-300 text-white hover:scale-105 duration-300">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
