const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    roll_id: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    batchId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
