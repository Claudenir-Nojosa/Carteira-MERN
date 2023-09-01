const mongoose = require("mongoose");

exports.connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.log("Erro ao conectar ao MongoDB", error);
  }
};
