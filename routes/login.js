var express = require('express');
var router = express.Router();
var controller_insert = require('../routes/controller/index_insert');

/* GET page. */
router.get('/', function(req, res, next) {

  res.render('login', {});
});

router.post('/user_db_matching', controller_insert.user_db_matching);

module.exports = router;
