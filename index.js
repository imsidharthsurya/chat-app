const express=require("express")
const app=express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use("/",express.static(__dirname+"/public"))

io.on("connection",(socket)=>{
    console.log("a new user connected with id: ",socket.id)

    socket.on("from_client",()=>{
        console.log("event received from client on button click")
    })
    setInterval(()=>{
        socket.emit('from_server');
    },2000)
})

server.listen(3000,()=>{
    console.log("server is running on port 3000")
})