import React from "react";
import NewTransaction from "./Transactions/NewTransaction";
import Transactions from "./Transactions/Transactions";
import classes from "./HomePage.module.css";
import Link from "next/link";

const HomePage = () => {
  return (
    <main>
      <div className={classes.main}>
        <h1 className={classes.title}>Moneyblow</h1>
        <p className={classes.paragraph}>Controle Financeiro</p>
        <button className={classes.logOut}><Link href="/">Fazer Logout</Link></button>
        <p className={classes.paragraph}>Insira abaixo a sua Receita/Despesa</p>
      </div>
      <NewTransaction />
      <Transactions />
    </main>
  );
};

export default HomePage;