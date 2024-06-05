const express = require("express");
const TimeSheetModel = require("./src/timesheet/timesheetmodel");

const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.post("/createTimeEntry", async (req, res) => {
  try {
    const createdTimesheet = new TimeSheetModel({
      userId: req.body.userId,
      time: req.body.time,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      description: req.body.description,
    });
    await createdTimesheet.save();
    res.json(createdTimesheet);
  } catch (err) {
    console.log("error", err);
  }
});

app.get("/getTmeSheetEntries", async (req, res) => {
  try {
    const timesheetEntries = await TimeSheetModel.find();
    res.json(timesheetEntries);
  } catch (err) {
    console.log("error", err);
    return res.status(500).send({
      message: "Internal server error",
    });
  }
});

async function getCapacity(userId, startDate, endDate) {
  const userObjectId = new mongoose.Types.ObjectId(userId);
  const start = new Date(startDate);
  const end = new Date(endDate);

  const result = await TimeSheetModel.aggregate([
    {
      $match: {
        userId: userObjectId,
        startDate: { $gte: start, $lte: end },
        endDate: { $gte: start, $lte: end },
      },
    },
    {
      $group: {
        _id: null,
        assignedTimeSheetHoursWithinStartDateAndEndDate: { $sum: "$time" },
      },
    },
    {
      $project: {
        _id: 0,
        assignedTimeSheetHoursWithinStartDateAndEndDate: 1,
      },
    },
  ]);

  return (
    result[0] || {
      totalHoursAvailableWithinStartDateAndEndDate: 0,
    }
  );
}

app.get("/getTimeSheetCapacity", async (req, res) => {
  const { userId, startDate, endDate } = req.query;

  try {
    const capacity = await getCapacity(userId, startDate, endDate);
    res.json(capacity);
  } catch (err) {
    console.log("error", err);
    return res.status(500).send({
      message: "Internal server error",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
