"use client";

import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 dark:bg-gray-300 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-16">
          <h2 className="font-bold text-3xl text-[#1F1F1F] text-center">
            Login
          </h2>
          <p className="text-sm my-4  text-[#1F1F1F]">
            Se você já tem cadastro, faça o login
          </p>
          <form className="flex flex-col gap-4">
            <input
              className="p-2 rounded-xl border outline-none text-gray-800/50"
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full outline-none text-gray-800/50"
                type="password"
                name="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="bg-[#1F1F1F] dark:bg-gray-900 dark:text-gray-300 rounded-xl py-2 text-white hover:scale-105 duration-300">
              Login
            </button>
            {error && <p className="text-red-600">{error}</p>}
          </form>

          <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-500" />
            <p className="text-center text-sm">Ou</p>
            <hr className="border-gray-500" />
          </div>
          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#1F1F1F]  dark:bg-gray-900 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-google"
              viewBox="0 0 16 16"
              className="mr-5 "
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
            Login com o Google
          </button>
          <div className="text-xs flex justify-between items-center mt-11 flex-col text-[#1F1F1F]">
            <p>Se você não tem uma conta ainda...</p>
            <button  className="py-1 mt-2 px-4 bg-white border rounded-xl  dark:bg-gray-900 dark:text-gray-300 hover:scale-110 duration-300">
              <a href="/signin">Cadastre-se</a>
            </button>
          </div>
        </div>
        <div className="w-1/2 md:block hidden">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1602742564213-4017d4f5d8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
            alt="#"
          />
        </div>
      </div>
    </section>
  );
};

export default Auth;
