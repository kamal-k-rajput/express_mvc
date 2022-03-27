const express = require("express");
let User = require("../models/user.model");
const { body, validationResult } = require("express-validator");
let router = express.Router();
//in this file we use the express validator to validate the incomming data
router.get("", async function (req, res) {
  try {
    const user = await User.find().lean().exec();
    return res.status(201).send({ user: user });
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});
router.post(
  "",
  body("firstName")
    .isLength({ min: 3 })
    .withMessage("first name is required and must be at least 3 characters"),
      body("lastName")
    .isLength({ min: 3 })
    .withMessage("must be at least 3 characters")
    .custom((value) => {
      if (value.length < 4) {
        throw new Error("last name must be at least 4 characters");
      }
      return true;
    }),
  async function (req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let user = await User.create(req.body);
      return res.status(201).send({ user: user });
    } catch (err) {
      return res.status(501).send({ err: err.message });
    }
  }
);
router.delete("/:id", async function (req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(201).send({ message: "User deleted successfully" });
  } catch (err) {
    res.status(501).send({ err: err.message });
  }
});
module.exports = router;
