const express = require("express");
let Evaluation = require("../models/evaluation.model");

let router = express.Router();

router.get("", async function (req, res) {
  try {
    const evaluation = await Evaluation.find().lean().exec();
    return res.status(201).send({ evaluation: evaluation });
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});
router.get("/:id", async function (req, res) {
  try {
    const evaluation = await Evaluation.findById(req.params.id).lean().exec();
    return res.status(201).send({ evaluation: evaluation });
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

router.post("", async function (req, res) {
  try {
    let evaluation = await Evaluation.create(req.body);
    return res.status(201).send({ evaluation: evaluation });
  } catch (err) {
    return res.status(501).send({ err: err.message });
  }
});

module.exports = router;
