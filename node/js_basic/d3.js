//$ npm i --save mysql  mysql 모듈 추가
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysql',
  database : 'node'
});

connection.connect((err)=>{
    if(err){
    }else{
        let sql = 'SELECT * FROM users where uid = ? and upw = ?;'
        //parameter 추가        [배열 형태]      [함수]
        connection.query(sql,['root','root'],(err,rows)=>{
            console.log(rows[0].name)
            connection.end();
        })

    }
});
 

