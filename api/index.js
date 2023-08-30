const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.get("/api/test", (req, res) => {
  res.json({ message: "Test ok" });
});

app.post("/api/transaction", (req, res) => {
  res.json(req.body);
});

app.listen(4040, () => {
  console.log("Server is running on port 4040");
});
