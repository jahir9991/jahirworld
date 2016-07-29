var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/alldata', function (req, res, next) {

    res.json({name: "jahir alam raju........"});


});

module.exports = router;
