const mongoose = require("mongoose");
// app.use(express.json());
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    type: {
      type: String,
      required: false,
      enum: ["student", "instructor", "admin", null],
    },
    dateOfBirth: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
