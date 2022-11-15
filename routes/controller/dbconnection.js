var maria = require('mysql');

var maria_pool = maria.createConnection({
    host: '221.159.47.49',
    // host:'211.230.189.173',
    port: 13306,
    user: 'root',
    password: 'goback@2022',
    database: 'dis_platform',
    multipleStatements: true,
    timezone: 'Asia/Seoul'
});


module.exports={
    'maria' : maria_pool,
    //'influx' : influxdb
};