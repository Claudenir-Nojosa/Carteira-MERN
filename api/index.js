const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const Transaction = require("./models/transaction");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/user");

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
  });
  res.json(transaction);
});

app.get("/api/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter transações." });
  }
});

app.delete("/api/transactions/:id", async (req, res) => {
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

app.post("/api/register", async (req, res) => {
  const { nameUser, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "Email já cadastrado." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      nameUser,
      email,
      password: hashedPassword,
    });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Erro ao registrar usuário." });
  }
});

app.listen(4040, () => {
  console.log("Server is running on port 4040");
});
