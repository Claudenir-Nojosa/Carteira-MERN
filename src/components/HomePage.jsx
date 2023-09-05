"use client"
import Link from "next/link";
import NewTransaction from "./Transactions/NewTransaction";
import Transactions from "./Transactions/Transactions";
import { LinearGradient } from "react-text-gradients";
import Cookie from 'js-cookie';
import { signOut } from "next-auth/react";

const HomePage = () => {

  const logoutHandler = async () => {
    await signOut();
    Cookie.remove('auth_token')
  }

  return (
    <main className="min-h-screen flex justify-top flex-col py-8 px-32 bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl pb-7 font-bold">
          <LinearGradient
            gradient={["to left", "#667db6 ,#0082c8, #0082c8, #667db6"]}
          >
            Moneyblow
          </LinearGradient>
        </h1>
        <p className="text-2xl pb-7  font-semibold">Controle Financeiro</p>
        <button className="bg-[#1F1F1F] dark:bg-gray-700 dark:text-gray/70 rounded-xl p-2 font-extralight text-white hover:scale-[1.02] duration-300">
          <Link onClick={logoutHandler} href='/'>Fazer Logout</Link>
        </button>
        <p className="text-xl pt-16 pb-6 ">
          Insira abaixo a sua Receita/Despesa
        </p>
      </div>
      <NewTransaction />
      <Transactions />
    </main>
  );
};

export default HomePage;
