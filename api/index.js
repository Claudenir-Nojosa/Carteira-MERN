const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const Transaction = require("./models/transaction");
const bcrypt = require("bcryptjs");
const User = require("./models/user");
const helmet = require("helmet");
const csp = require("helmet-csp");
const { connectMongoDB } = require("../lib/mongodb");
const jwt = require("jsonwebtoken");

connectMongoDB(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors());

app.use(express.json());

app.use(helmet());
app.use(
  csp({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
    },

    nonce: (req, res) => {
      return "nonce-" + Math.random().toString(36).substr(2, 10);
    },
  })
);

app.get("/api/test", (req, res) => {
  res.json({ message: "Test ok" });
});

function authenticateToken(req, res, next) {
  console.log("Middleware authenticateToken chamado");
  const token = req.header("Authorization");

  if (!token) {
    // Se o token não estiver presente, retorna um erro de não autorizado
    return res.status(401).json({ message: "Token não fornecido" });
  }

  // Verifica se o token é válido usando a chave secreta configurada no servidor
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      // Se o token for inválido, retorna um erro de proibido
      return res.status(403).json({ message: "Token inválido" });
    }

    // Se o token for válido, armazena o ID do usuário autenticado em req.user
    req.user = user;
    next(); // Chama o próximo middleware ou manipulador de rota
  });
}

app.post("/api/transaction", authenticateToken, async (req, res) => {
  const { name, description, date, price } = req.body;
  const userId = req.user.id;
  const transaction = await Transaction.create({
    name,
    description,
    date,
    price,
    userId,
  });
  console.log(userId);
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
    res.json({ newUser, token });
  } catch (error) {
    res.status(500).json({ message: "Erro ao registrar usuário." });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email }).select("+password");

  if (!existingUser || email === "") {
    return res.status(401).json({ message: "E-mail não encontrado" });
  }
  console.log(existingUser);
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
