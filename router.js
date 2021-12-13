const express = require("express");
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log("Time:,", Date.now());
  next();
});

router.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  })

module.exports = router;
