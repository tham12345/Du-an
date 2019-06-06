var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var conn = require('../connectMysql/connect');
var jwt = require('jsonwebtoken');
router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.render('kholuutrumau');
});

module.exports = router;