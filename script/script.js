var ip;
var port;
var good = 0;

if (Cookies.get("password")) {
    document.getElementById('password-form').style.display = "none";
}
async function sendMsg() {
    //Get Info
    ip = document.getElementById("ip").value;
    port = document.getElementById("port").value;
    var password = document.getElementById("password").value;

    listen(ip, port, password);
    await sleep(100)
    if (good == 1) {
        document.getElementById('password-form').style.display = "none";
        Cookies.set("ip", ip, {expires: 30});
        Cookies.set("port", port, {expires: 30});
        Cookies.set("password", password, {expires: 30});
        Cookies.set("isConfig", "true", {expires: 30});
        var myCookie = [Cookies.get("ip"), Cookies.get("port"), Cookies.get("password")]
        console.log(myCookie);
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
