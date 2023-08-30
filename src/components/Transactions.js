import React from "react";
import Transaction from "./Transaction";
const Transactions = () => {
  return (
    <>
      <Transaction
        name={"Salário"}
        description={"Accord Contabilidade"}
        price={2000}
        date={"29/08/2023"}
      />
            <Transaction
        name={"Givenchy Gentlemen Reserve Privée"}
        description={"Perfume da Givenchy"}
        price={-649.90}
        date={"29/08/2023"}
      />
            <Transaction
        name={"C&A"}
        description={"Roupas"}
        price={-450}
        date={"29/08/2023"}
      />
    </>
  );
};

export default Transactions;
