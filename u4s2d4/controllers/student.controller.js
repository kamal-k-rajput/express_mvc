const express = require("express");
let Student = require("../models/student.model");

let router = express.Router();

router.get("", async function (req, res) {
  try {
    const student = await Student.find().lean().exec();
    return res.status(201).send({ student: student });
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

router.post("", async function (req, res) {
  try {
    let student = await Student.create(req.body);
    return res.status(201).send({ student: student });
  } catch (err) {
    return res.status(501).send({ err: err.message });
  }
});
router.delete("", async function (req, res) {
  try {
    await Student.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send({ message: "user deleted succesfuly" });
  } catch (err) {
    return res.status(501).send({ err: err.message });
  }
});
module.exports = router;
