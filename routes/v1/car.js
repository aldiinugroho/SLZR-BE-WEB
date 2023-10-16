// sample.js - sample route module.
const express = require("express");
const car = require("../../controller/car");
const router = express.Router();
// const { middleware } = require('../../middleware');

// GET
router.get("/list/:offset", car.list);
router.get("/detail/:carId", car.detail);

module.exports = router;
