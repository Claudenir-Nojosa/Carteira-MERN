import React from "react";
import NewTransaction from "./NewTransaction";
import Transactions from "./Transactions";

const HomePage = () => {
  return (
    <main>
      <NewTransaction />
      <Transactions />
    </main>
  );
};

export default HomePage;
