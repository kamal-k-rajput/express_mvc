const express = require("express");
let Submission = require("../models/submission.model");

let router = express.Router();

router.get("", async function (req, res) {
  try {
    const submission = await Submission.find().lean().exec();
    return res.status(201).send({ submission: submission });
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

router.post("", async function (req, res) {
  try {
    let submission = await Submission.create(req.body);
    return res.status(201).send({ submission: submission });
  } catch (err) {
    return res.status(501).send({ err: err.message });
  }
});
router.delete("", async function (req, res) {
  try {
    await Submission.findByIdAndDelete(req.params.id);
    return res.status(201).send({ message: "submission deleted successfully" });
  } catch (err) {
    return res.status(501).send({ err: err.message });
  }
});
module.exports = router;
