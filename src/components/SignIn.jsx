"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!nameUser || !email || !password) {
      setError("Todos os campos são necessários.");
      return;
    }
    const urlUserExists = process.env.NEXT_PUBLIC_API_URL + "userExists";
    const urlNewUser = process.env.NEXT_PUBLIC_API_URL + "register";
    try {
      const resUserExists = await fetch(urlUserExists, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch(urlNewUser, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nameUser,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };
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
          <form onSubmit={submitHandler} className="flex flex-col gap-4">
            <input
              className="p-2 rounded-xl border outline-none text-gray-800/50"
              type="text"
              name="name"
              placeholder="Nome Completo"
              onChange={(e) => setNameUser(e.target.value)}
            />
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
            <button className="bg-[#1F1F1F] rounded-xl py-2 mt-5  dark:bg-gray-900 dark:text-gray-300 text-white hover:scale-105 duration-300">
              Cadastrar
            </button>
            {error && <p className="text-red-600">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
