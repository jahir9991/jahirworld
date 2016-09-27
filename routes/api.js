var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send({name: "hello"});
})
router.get('/picture', function (req, res, next) {
    res.send({name: "hello"});
})
module.exports = router;
