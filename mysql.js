var mysql      = require('mysql');  //引入模块

//设置链接参数
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'vue'
});
//创建链接
connection.connect();

//执行 query
connection.query('select user_id,user_name,email from p_users limit 10', function (error, results, fields) {
    // console.log(error)
    //获取查询结果 results
    console.log(results[0].user_name)
});

connection.end();