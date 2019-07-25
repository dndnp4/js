// 로그인 처리하는 일련의 과정을 함수로 구성하여 함수를 호출함으로써 아이디와 비번을 전달
// 결과를 돌려받는 구조로 업그레이드 한다. => 서버 개발자는 해당 함수를 호출함으로써
// 로그인의 결과를 얻을 수 있다.
var mysql      = require('mysql');
function selectLogin(uid, upw, data){
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
            connection.query(sql,[uid,upw],(err,rows)=>{
                data(err,rows)
                connection.end();
            })
        }
    });
}
//함수 내부가 비동기 상황인, 내가 콜백함수를 하나 보낸테니까~ 결과가 언제라도 나오면~
//그 콜백함수를 호출해줘라~ 단~ 호출할 때 결과를 같이 넣어서 호출해주면 끝~~~~~~~~~~~~~
selectLogin('root','root', (err,data)=>{
    if(data.length > 0){
        console.log("입력완료", data)
    }else{
        console.log("데이터 에러")
    }
})


