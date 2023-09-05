const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const Transaction = require("./models/transaction");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/user");
const helmet = require("helmet");
const csp = require("helmet-csp");

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());

app.use(express.json());


app.use(helmet());
app.use(csp({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
  },

  nonce: (req, res) => {
    return 'nonce-' + Math.random().toString(36).substr(2, 10);
  },
}));

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

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (!existingUser || email === "") {
    return res.status(401).json({ message: "E-mail não encontrado" });
  }
  const isPasswordValid = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordValid || password === "") {
    return res.status(401).json({ message: "Senha incorreta" });
  }

  res.json({ message: "Login bem sucedido!" });
});

app.post("/api/report-violation", (req, res) => {
  const violationReport = req.body;
  console.log("Relatório de Violação CSP:", violationReport);
  res.status(204).end(); 
});

app.listen(4040, () => {
  console.log("Server is running on port 4040");
});
