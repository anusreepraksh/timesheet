const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const User = new Schema(
  {
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    employeeId: { type: Number, default: null },
  },
  {
    timestamps: true,
  }
);
const UserModel = mongoose.model("User", User);
module.exports = UserModel;
