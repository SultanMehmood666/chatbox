const http = require('http');
const app = require('./src/app.js');
const port = 5000;

const server = http.createServer(app);
server.listen(port, ()=>{console.log(`Server is running on ${port}`)})
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
    }) //attaching socket.io with server here


// Everytime the user connect
// socket is an argument containing details of connected user
 io.on('connection', (socket)=>{
    console.log(`A new User has been Connected: ${socket.id}`);
 })