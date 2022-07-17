const express = require('express')
const app = express();
const http = require('http')
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
io.on('connection', (socket) => {
    console.log('A user is connetcd with this applicaions')
    socket.on('disconnect', () => {
        console.log('This user is now disconnected................')
    })
    socket.on('chat message', (msg) => {
        console.log('Chat message is : ' + msg);
        io.emit('chat message', msg);
    })
})
server.listen(3000, () => {
    console.log('App is listening at the port 3000')
})