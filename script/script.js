var good = 0;
addFuncCookie();
function writeInfo() {
    document.getElementById('ipIp').innerHTML = Cookies.get('ip');
    document.getElementById('portPort').innerHTML = Cookies.get('port');
}

function deleteConfig() {
    Cookies.remove('ip');
    Cookies.remove('isConfig');
    Cookies.remove('password');
    Cookies.remove('port');
    window.location.replace("config.php");
}

if (Cookies.get("isConfig")) {
    document.getElementById('password-form').style.display = "none";
    document.getElementById('delConf').style.display = "block";
    document.getElementById('info').style.display = "block";
    //document.getElementById('ip').style.display = "block";
    //document.getElementById('port').style.display = "block";
    writeInfo();
}
if (Cookies.get("isConfig") == true) {
    document.getElementById('info').style.display = "none";
}
async function sendMsg() {
    //Get Info
    var ip = document.getElementById("ip").value;
    var port = document.getElementById("port").value;
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
        window.location.replace("function.php?gerror=gotin");
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

function addFunc() {
    var funcName = document.getElementById("funcName").value;
    var funcId = document.getElementById("funcId").value;
    document.getElementById('oneOne').innerHTML = '<input type="submit" value="'+funcName+'"/>';
    //window.location.replace("function.php");
}

function addFuncCookie() {
    if (Cookies.get('oneOne') != null) {
        if(Cookies.get('twoTwo') != null) {
            if(Cookies.get('threeThree') != null) {
                if(Cookies.get('fourFour') != null) {
                    if(Cookies.get('fiveFive') != null) {
                        if(Cookies.get('sixSix') != null) {
                            if(Cookies.get('sevenSeven') != null) {
                                if(Cookies.get('eightEight') != null) {
                                    if(Cookies.get('nineNine') != null) {
                                        //No space
                                    } else {
                                        //Make nine cookie
                                    } else { 
                                    //Make eight cookie
                                }
                            } else {
                                //Make seven cookie
                            }
                        } else {
                            //Make six cookie
                        }
                    } else {
                        //Make five cookie
                    }
                } else {
                    //Make fourFour cookie
                }
            } else {
                //Make threeThree cookie
            }
        } else {
            //Make twoTwo Cookie
        }
    } else {
        //Make oneOne Cookie
        console.log("Cookie one not there");
    }
}