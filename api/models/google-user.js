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
      unique: true, 
    },
    password: String,
    image: String,
    role: {
      type: String,
      default: 'user'
    },
    provider: {
      type: String,
      default: 'credentials'
    }
  },
  { timestamps: true }
);

const GoogleUser = model("GoogleUser", googleUserSchema);

module.exports = GoogleUser;
