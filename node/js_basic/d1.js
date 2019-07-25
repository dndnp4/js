//$ npm i --save mysql  mysql 모듈 추가
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysql',
  database : 'node'
});
//3. 연결 행위 자체가 비동기라서 콜백함수를 등록하여 연결 결과가 나오면 호출되게 구성
//  이런 경우 콜백함수의 1번인자 = 통상적으로 err를 넣는다

connection.connect((err)=>{
    console.log(err ? 'error' : 'Success')
    
    if(err){
        console.log('접속오류:',err)
    }else{
        //connection.query(sql문, parameter(생략가능), ()=>{})
        let sql = 'SELECT * FROM users;'
        connection.query(sql,(err,rows)=>{
            console.log(err, rows)
            console.log(rows[0].name)
            connection.end();
            console.log('접속종료')
        })

    }
});
 
// connection.query('select * from users', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
