var ip;
var port;
var good = 0;
async function sendMsg() {
    //Get Info
    ip = document.getElementById("ip").value;
    port = document.getElementById("port").value;
    var password = document.getElementById("password").value;

    listen(ip, port, password);
    await sleep(100)
    if (good == 1) {
        document.getElementById('password-form').style.display = "none";
        Cookies.set("test1", password);
    }
}

function listen(ip, port, message) {
    socket = new WebSocket('ws://'+ip+':'+port);

    socket.addEventListener('open', function (event) {
        socket.send(message);
    });
    socket.addEventListener('message', function (event) {
        if (event.data == "password:Access Granted") {
            good = 1;
        }
        console.log(event.data);
        document.getElementById("output").innerHTML = event.data;
    });
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
