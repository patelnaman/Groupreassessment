const express = require('express');
const socketio =require('socket.io');
const http = require('http');
const cors = require('cors');


const{ addUser, removeUser, getUser, getUsersInRoom} = require('./users.js');

const PORT = process.env.PORT||5000;

const router = require('./router');


const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors:{
    origin:"http://localhost:3000",
    methods:["GET","POST"]
    }
});

app.use(cors());
app.use(router);

io.on('connection', (socket) => {
    socket.on('join', ({name, room}, callback)=> {
        console.log('we have a new connection');
        const{error, user} = addUser({id: socket.id, name, room});

        if(error) return callback(error);

        socket.join(user.room);

        socket.emit('message', {user: 'admin', text: `${user.name}, welcome to the room ${user.room}`})
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name}, has joined!`});

       

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser (socket.id);

        io.to(user.room).emit('message', {user:user.name,text : message});

        callback();
    })

    socket.on('disconnect',() => {
        const user = removeUser(socket.id);
        console.log('User has Left');
    })
});


server.listen(PORT,()=> console.log(`Server has started on port ${PORT}`))