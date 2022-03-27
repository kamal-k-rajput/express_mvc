const express = require("express");

const app = express();
app.use(express.json());

let userController = require("../controllers/user.controller");
let studentController = require("../controllers/student.controller");
let submissionController = require("../controllers/submission.controller");
let batchController = require("../controllers/batch.controller");
let evaluationController = require("../controllers/evaluation.controller");
app.use("/user", userController);
app.use("/submission", submissionController);
app.use("/student", studentController);
app.use("/batch", batchController);
app.use("/evaluation", evaluationController);

module.exports = app;