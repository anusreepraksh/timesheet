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

    const timeSheetData = [
      {
        _id: new mongoose.Types.ObjectId("5e2a81aa510e820017ec2621"),
        userId: new mongoose.Types.ObjectId("5e2a81aa511e820017ec2622"),
        time: 540,
        startDate: "2024-07-06T00:00:00.000Z",
        endDate: "2024-07-06T00:00:00.000Z",
        description: "test",
      },
      {
        _id: new mongoose.Types.ObjectId("5e2a81aa511e820019ec2621"),
        userId: new mongoose.Types.ObjectId("5e2a842c511e820017ec2627"),
        time: 440,
        startDate: "2024-06-07T00:00:00.000Z",
        endDate: "2024-06-07T00:00:00.000Z",
        description: "test",
      },
      {
        _id: new mongoose.Types.ObjectId("5e2a81aa511e820017ec2601"),
        userId: new mongoose.Types.ObjectId("5e2a842c511e820017ec2627"),
        time: 340,
        startDate: "2024-06-08T00:00:00.000Z",
        endDate: "2024-06-08T00:00:00.000Z",
        description: "test",
      },
      {
        _id: new mongoose.Types.ObjectId("5e2a81aa511e820017ec2721"),
        userId: new mongoose.Types.ObjectId("5e2a842c511e820017ec2627"),
        time: 640,
        startDate: "2024-06-09T00:00:00.000Z",
        endDate: "2024-06-09T00:00:00.000Z",
        description: "test",
      },
      {
        _id: new mongoose.Types.ObjectId("5e2a81aa511e820018ec2621"),
        userId: new mongoose.Types.ObjectId("5e2a842c511e820017ec2627"),
        time: 540,
        startDate: "2024-06-10T00:00:00.000Z",
        endDate: "2024-06-10T00:00:00.000Z",
        description: "test",
      },
      {
        _id: new mongoose.Types.ObjectId("5e2a81aa511e820617ec2621"),
        userId: new mongoose.Types.ObjectId("5e2a842c511e820017ec2627"),
        time: 540,
        startDate: "2024-06-11T00:00:00.000Z",
        endDate: "2024-06-11T00:00:00.000Z",
        description: "test",
      },
      {
        _id: new mongoose.Types.ObjectId("5e2a81aa511e820017e42621"),
        userId: new mongoose.Types.ObjectId("5e2a842c511e820017ec2627"),
        time: 540,
        startDate: "2024-06-12T00:00:00.000Z",
        endDate: "2024-06-12T00:00:00.000Z",
        description: "test",
      },
      {
        _id: new mongoose.Types.ObjectId("5e2a91aa511e120017ec2621"),
        userId: new mongoose.Types.ObjectId("5e2a842c511e820017ec2627"),
        time: 540,
        startDate: "2024-06-13T00:00:00.000Z",
        endDate: "2024-06-13T00:00:00.000Z",
        description: "test",
      },
      {
        _id: new mongoose.Types.ObjectId("5e2a81aa511e820017ec2621"),
        userId: new mongoose.Types.ObjectId("5e2a842c511e820017ec2627"),
        time: 540,
        startDate: "2024-06-14T00:00:00.000Z",
        endDate: "2024-06-14T00:00:00.000Z",
        description: "test",
      },
      {
        _id: new mongoose.Types.ObjectId("5e2a81aa511e825017ec2621"),
        userId: new mongoose.Types.ObjectId("5e2a842c511e820017ec2627"),
        time: 540,
        startDate: "2024-06-15T00:00:00.000Z",
        endDate: "2024-06-15T00:00:00.000Z",
        description: "test",
      },
      {
        _id: new mongoose.Types.ObjectId("5e2a41aa511e020017ec2621"),
        userId: new mongoose.Types.ObjectId("5e2a81aa511e820017ec2622"),
        time: 540,
        startDate: "2024-06-16T00:00:00.000Z",
        endDate: "2024-06-16T00:00:00.000Z",
        description: "test",
      },
      {
        _id: new mongoose.Types.ObjectId("5e2a81aa511e820017ec2629"),
        userId: new mongoose.Types.ObjectId("5e2a81aa511e820017ec2622"),
        time: 540,
        startDate: "2024-06-17T00:00:00.000Z",
        endDate: "2024-06-17T00:00:00.000Z",
        description: "test",
      },
    ];
    const result = await TimeSheetModel.create(timeSheetData);
    console.log("Users created:", result);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await mongoose.connection.close();
    console.log("Connection closed");
  }
}

run();
