const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema({
  dateOfEvaluation: { type: String },
  evaluation: { type: String, required: true },

  batch_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

const Evaluation = mongoose.model("evaluation", evaluationSchema);

module.exports = Evaluation;
