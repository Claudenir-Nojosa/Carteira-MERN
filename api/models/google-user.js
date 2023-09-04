const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const googleUserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const GoogleUser = model("GoogleUser", googleUserSchema);

module.exports = GoogleUser;
