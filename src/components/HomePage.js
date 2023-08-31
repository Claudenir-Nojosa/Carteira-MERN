import React from "react";
import NewTransaction from "./Transactions/NewTransaction";
import Transactions from "./Transactions/Transactions";
import Link from "next/link";
import { LinearGradient } from "react-text-gradients";

const HomePage = () => {
  return (
    <main>
      <div >
        <h1 >
          <LinearGradient
            gradient={["to left", "#667db6 ,#0082c8, #0082c8, #667db6"]}
          >
            Moneyblow
          </LinearGradient>
        </h1>
        <p >Controle Financeiro</p>
        <button >
          <Link href="/">Fazer Logout</Link>
        </button>
        <p >Insira abaixo a sua Receita/Despesa</p>
      </div>
      <NewTransaction />
      <Transactions />
    </main>
  );
};

export default HomePage;
