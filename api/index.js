const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const Transaction = require("./models/transaction");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.get("/api/test", (req, res) => {
  res.json({ message: "Test ok" });
});

app.post("/api/transaction", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const { name, description, date, price } = req.body;
  const transaction = await Transaction.create({
    name,
    description,
    date,
    price,
    _id
  });
  res.json(transaction);
});

app.get("/api/transactions", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const transactions = await Transaction.find();
  res.json(transactions);
});

app.delete("/api/transactions/:id", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const transactionId = req.params.id;
  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(
      transactionId
    );
    if (deletedTransaction) {
      res.json({ message: "Transação excluída com sucesso." });
    } else {
      res.status(404).json({ message: "Transação não encontrada." });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir transação." });
  }
});
app.listen(4040, () => {
  console.log("Server is running on port 4040");
});
