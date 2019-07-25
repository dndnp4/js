var express = require('express');
var router  = express.Router();
let db      = require('./db')
/* GET home page. */
// 요청이 들어오면 해석을 하는데, 
// 만약, get방식이고, 주소가 / 이면 아래 함수가 호출된다 => 라우팅
router.get('/', function(req, res, next) {
  // views/index.ejs 파일을 읽어서 전달한 데이터를 사용해서 완성된 html을 응담한다 => 랜더링한다
  // 랜더링의 대상 ejs파일은 무조건 views 밑에서 찾는다
  if(typeof req.session.uid === 'undefined' || req.session.uid === null){
    res.redirect('/users/login')
    return
  }
  res.render('index', { title: 'Express점심11:50',name:req.session.name });
});
// ~/search
router.get('/search', (req, res, next) => {
  // 1. 사이트가 요청이 들어오면, noSell 테이블에서 이름순으로 전체 데이터를 가져온다->sql
  db.selectNoSellData( ( err, rows )=>{
    //console.log( rows )
    // 2. 데이터를 렌더링할때 전달한다
    res.render('search', { rows:rows });
    // 3. search.ejs 내부에서 데이터를 반복해서 추출하여 화면을 구성한다 => search.ejs 이동
    // 4. 만약, 카테고리가 금융이면 박스의 배경색을 bg-yellow로 처리한다
  } )
});
// ~/search, post방식
router.get('/search2', (req, res, next) => {
  // 2-1. 검색어 추출 => get방식으로 전달된 데이터 추출
  console.log( req.query.keyword )
  // 3. 디비 쿼리 수행, 검색어 넣어서 수행하는 쿼리 결과
  //  함수명 : selectItemsByKeyword()
  db.selectItemsByKeyword( req.query.keyword, (err, rows)=>{
    // 3-1. => json으로 응답
    res.json( rows )
  } )
})
// 동적 파라미터는 url에 데이터를 넣어서 전송하는 방식-> url은 무한대로 확장이 가능하다
// get방식, post방식등 method 방식과 혼용해서 사용 가능
// ~/url/:변수명
router.get('/info/:no', (req, res, next) => {
  console.log(req.query.u, typeof req.query.u === 'undefined')
  // 구현순서
  // 1. selectItemByNo() 구현
  // 2. 1번 함수 결과 가져와서 판단
  db.selectItemByNo( req.params.no, (err, rows)=>{
    if( rows.length > 0 ){
      // 4. rows 데이터가 존재하면 처리 res.render() 위치시킴
      res.render( 'info', { row:rows[0], update:typeof req.query.u!='undefined' } )
    }else{
      // 3. rows 데이터가 없다면 처리 res.render() 위치시킴
      res.end('no item' )
    }    
  } )
  // 5. info_sub.ejs에 데이터 출력 부분 확인및 화면 최종 확인
  //res.end('product no : ' + req.params.no )
  // no을 넣어서 해당 상품 정보를 가져와서(sql) 화면에 뿌린다(render)
  // 함수명: selectItemByNo    
});
module.exports = router;
