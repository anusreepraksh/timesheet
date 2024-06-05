const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TimeSheetSchema = new Schema(
  {
    userId: { type: ObjectId, required: true },
    time: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: { type: String, default: null },
  },
  {
    timestamps: true,
  }
);
const TimeSheetModel = mongoose.model("TimeSheet", TimeSheetSchema);

module.exports = TimeSheetModel;
