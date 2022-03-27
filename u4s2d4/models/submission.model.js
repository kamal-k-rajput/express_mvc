const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    marks: {
      type: Number,
      required: true,
    },
    evaluationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"evalaution",
      required: true,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"user",
      required: true,
    },
    batchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"batch",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Submission = mongoose.model("submission", submissionSchema);

module.exports = Submission;
