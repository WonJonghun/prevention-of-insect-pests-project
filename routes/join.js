var express = require('express');
var router = express.Router();
var controller_insert = require('../routes/controller/index_insert');

/* GET page. */
router.get('/', function(req, res, next) { 

  res.render('join', {});
});

router.post('/user_db_call', controller_insert.user_db_call);
router.post('/input_user_db', controller_insert.input_user_db);

module.exports = router;
