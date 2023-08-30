import React from "react";
import NewTransaction from "./NewTransaction";
import Transactions from "./Transactions";
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <main>
      <div className={classes.main}>
        <h1 className={classes.title}>Moneyblow</h1>
        <p className={classes.paragraph}>Controle Financeiro</p>
        <p className={classes.paragraph}>Insira abaixo a sua Receita/Despesa</p>
      </div>
      <NewTransaction />
      <Transactions />
    </main>
  );
};

export default HomePage;
