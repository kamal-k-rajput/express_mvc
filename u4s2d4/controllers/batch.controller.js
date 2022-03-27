const express = require("express");
let Batch = require("../models/batch.model");

let router = express.Router();

router.get("", async function (req, res) {
  try {
    const batch = await Batch.find().lean().exec();
    return res.status(201).send({ user: batch });
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

router.post("", async function (req, res) {
  try {
    let batch = await Batch.create(req.body);
    return res.status(201).send({ batch: batch });
  } catch (err) {
    return res.status(501).send({ err: err.message });
  }
});
router.delete("", async function (req, res) {
  try {
     await Batch.findByIdAndDelete(req.params.id);
    return res.status(201).send({message:"batch deleted successfully"});
  } catch (err) {
    return res.status(501).send({ err: err.message });
  }
});
module.exports = router;
