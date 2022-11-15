var db = require('../controller/dbconnection');

var maria_pool = db.maria;


maria_pool.connect(function(err){
  if (err) throw err;
  console.log("You are connected");
});


exports.user_db_call = function (req, res) {

  var sql = "SELECT * FROM user_table;"
  
  
  maria_pool.query(sql, function(error, results){

    if(!error){
      console.log(results);
      res.send(results);
    } else {
        console.log("query error : ",error);
        res.send(error);
    }
  });
};

exports.input_user_db = function (req, res) {

  var sql = "INSERT INTO user_table (id, pass, user_name, area, crops, start_date) VALUES ('"+req.body.uid+"', '"+req.body.pass+"', '"+req.body.name+"', '"+req.body.place+"', '"+req.body.crop+"', '"+req.body.date+"');"
  
  
  maria_pool.query(sql, function(error, results){

    if(!error){
      console.log(results);
      res.send(results);
    } else {
        console.log("query error : ",error);
        res.send(error);
    }
  });
};

exports.user_db_matching = function (req, res) {

  var sql = "SELECT * FROM user_table WHERE id='"+req.body.id+"' AND pass='"+req.body.pass+"';"
  
  
  maria_pool.query(sql, function(error, results){

    if(!error){
      console.log(results);
      res.send(results);
    } else {
        console.log("query error : ",error);
        res.send(error);
    }
  });
};
