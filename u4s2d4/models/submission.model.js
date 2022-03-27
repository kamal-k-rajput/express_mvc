const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    marks: {
      type: Number,
      required: true,
    },
    evaluationId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    studentId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    batchId: {
      type: mongoose.Types.ObjectId,
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
