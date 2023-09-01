"use client"
import NewTransaction from "./Transactions/NewTransaction";
import Transactions from "./Transactions/Transactions";
import { LinearGradient } from "react-text-gradients";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
const HomePage = () => {
  const { data: session } = useSession();
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
        <div>
          Nome: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          E-mail: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button onClick={() => signOut()} className="bg-[#1F1F1F] dark:bg-gray-700 dark:text-gray/70 rounded-xl p-2 font-extralight text-white hover:scale-[1.02] duration-300">
          Fazer Logout
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
