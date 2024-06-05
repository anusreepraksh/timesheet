const UserModel = require("../src/users/usermodel.js");
const TimeSheetModel = require("../src/timesheet/timesheetmodel.js");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

async function run() {
  try {
    await mongoose.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const users = [
      {
        _id: new mongoose.Types.ObjectId("5e2a81aa511e820017ec2622"),
        firstName: "John",
        lastName: "Doe",
        employeeId: "101",
      },
      {
        _id: new mongoose.Types.ObjectId("5e2a842c511e820017ec2627"),
        firstName: "Jane",
        lastName: "Das",
        employeeId: "102",
      },
      {
        _id: new mongoose.Types.ObjectId("5e2a842c511e820017ec2628"),
        firstName: "Bob",
        lastName: "Smith",
        employeeId: "103",
      },
      {
        _id: new mongoose.Types.ObjectId("5e2a842c511e820017ec2629"),
        firstName: "Alice",
        lastName: "Smith",
        employeeId: "104",
      },
    ];
    const result = await UserModel.create(users);
    console.log("Users created:", result);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await mongoose.connection.close();
    console.log("Connection closed");
  }
}

run();
