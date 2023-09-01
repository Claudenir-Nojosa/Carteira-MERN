const { NextResponse } = require("next/server");
const { connectMongoDB } = require("../../lib/mongodb");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

module.exports.registerUser = async function (req) {
  try {
    const { nameUser, email, password } =  req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ nameUser, email, password: hashedPassword });

    return NextResponse.json(
      { message: "Usuário Registrado." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Um erro ocorreu ao tentar registrar o usuário:", error },
      { status: 500 }
    );
  }
};
