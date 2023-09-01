const { NextResponse } = require("next/server");
const { connectMongoDB } = require("../../lib/mongodb");
const User = require("../models/user");

module.exports.UserExists = async function (req) {
  try {
    await connectMongoDB();
    const { email } = await req.body;
    const user = await User.findOne({ email }).select("_id");
    console.log("User", user);

    return NextResponse.json(
      { message: "Usuário não registrado.", user },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Usuário já existente", error },
      { status: 500 }
    );
  }
};
