const socket=io()

const btn=document.getElementById("btn");
btn.onclick=function exec(){
    socket.emit("from_client")
}
socket.on("from_server",()=>{
    const div=document.createElement("div")
    div.innerText="Received event from server"
    document.body.appendChild(div);
})