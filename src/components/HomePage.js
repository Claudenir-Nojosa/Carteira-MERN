import React from "react";
import classes from "./HomePage.module.css";
import NewTransaction from "./NewTransaction";
import Transactions from "./Transactions";

const HomePage = () => {
  return (
    <main>
      <h1 className={classes.value}>
        $400 <span>.00</span>
      </h1>
      <NewTransaction />
      <Transactions />
    </main>
  );
};

export default HomePage;
