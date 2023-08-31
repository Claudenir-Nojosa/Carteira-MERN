import React from "react";
import NewTransaction from "./Transactions/NewTransaction";
import Transactions from "./Transactions/Transactions";
import Link from "next/link";
import { LinearGradient } from "react-text-gradients";

const HomePage = () => {
  return (
    <main className="min-h-screen flex justify-top flex-col py-10 px-32 ">
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
          <Link href="/">Fazer Logout</Link>
        </button>
        <p className="text-xl pt-16 pb-6 ">Insira abaixo a sua Receita/Despesa</p>
      </div>
      <NewTransaction />
      <Transactions />
    </main>
  );
};

export default HomePage;
