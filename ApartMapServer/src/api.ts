import express from "express";
const router = express.Router();

router.use("/points", require("./routes/points.ts"));
// hello
module.exports = router;
