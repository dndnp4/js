const rooms = ['knn', 'mbc', 'tvn']

exports.createChatServer = (server) => {
    console.log('실시간 채팅 서버 가동')
    // 서버 소켓 생성  
    const io = require('socket.io')(server)
    // 서버 소켓은 클라이언트의 접속을 대기
    // 서버 소켓은 대기하다가, 클라이언트가 접속하면 소켓을 하나 할당해서, 
    // 콜백함수에 인자로 넣어서 호출

    io.on('connection', (socket) => {
        console.log('한명 접속했다')
        // 클라이언트가 이름을 보내면 처리하는 이벤트 핸들러 => on()
        socket.on('s_send_userName', (user_name, time) => {
            console.log(user_name, time)
            socket.user_name = user_name
            socket.room = rooms[0]
            socket.connectTime = time
            socket.join(socket.room)
            socket.broadcast.to(socket.room).emit('c_send_msg', '관리자', `${socket.user_name}님이 입장하였습니다.`, new Date())
            socket.emit('c_send_msg', '관리자', `${socket.user_name}님 환영합니다`, new Date())
            socket.emit('c_send_roomInfo', rooms, socket.room)
        })

        socket.on('s_send_msg', (msg, time) => {
            io.sockets.in(socket.room).emit('c_send_msg', socket.user_name, msg, time)
        })

        socket.on('s_send_roomChg', (newRoom)=>{
            socket.leave(socket.room)
            socket.broadcast.to(socket.room).emit('c_send_msg','관리자', `${socket.user_name}님이 퇴장하셨습니다.`, new Date())

            socket.room = newRoom
            socket.join(socket.room)
            socket.broadcast.to(socket.room).emit('c_send_msg','관리자', `${socket.user_name}님이 입장하셨습니다.`, new Date())
            socket.emit('c_send_msg','관리자',`${socket.user_name}님 환영합니다.`)
            socket.emit('c_send_roomInfo', rooms, socket.room)
            
        })
    })
}
