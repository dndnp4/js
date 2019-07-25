var express = require('express');
var router = express.Router();
//디렉토리만 지정하면 무조건 그 밑의 index.js를 찾아서 가져온다.
let db = require('./db')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req,res,next) {
  res.render('login', {title:"hihihiget"})
})
router.get('/logout', function(req,res,next) {
  req.session.uid = null
  req.session.name = null
  req.session.destroy(()=>{
    res.redirect('/')
  })
})

router.post('/login', function(req,res,next) {
  //post 방식으로 받은 데이터를 이용함
  db.selectLogin(req.body.uid, req.body.upw, (err,result)=>{
    if(result.length >0){
      req.session.uid = req.body.uid
      req.session.name = result[0].name
      res.redirect('/')
    }else{
      res.render('alert')
    }
  })

})
//채팅 클라이언트
router.get('/chat', function(req, res, next) {
  res.render('chat')
});
module.exports = router;
