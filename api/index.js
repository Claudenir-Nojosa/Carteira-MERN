const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const Transaction = require("./models/transaction");
const User = require("./models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());
app.get("/api/test", (req, res) => {
  res.json({ message: "Test ok" });
});

app.post("/api/transaction", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const { name, description, date, price, nameOfUser, email, password } =
    req.body;
  const transaction = await Transaction.create({
    name,
    description,
    date,
    price,
  });
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  res.json(transaction, user);
});

app.get("/api/transactions", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const transactions = await Transaction.find();
  res.json(transactions);
});

app.listen(4040, () => {
  console.log("Server is running on port 4040");
});
