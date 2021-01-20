var good = 0;
loadFuncCookie();
function writeInfo() {
    if ( document.URL.includes("config.php") ) {
        document.getElementById('ipIp').innerHTML = Cookies.get('ip');
        document.getElementById('portPort').innerHTML = Cookies.get('port');
    }
}

function deleteConfig() {
    Cookies.remove('ip');
    Cookies.remove('isConfig');
    Cookies.remove('password');
    Cookies.remove('port');
    window.location.replace("config.php");
}

if (Cookies.get("isConfig")) {
    if ( document.URL.includes("config.php") ) {
        document.getElementById('password-form').style.display = "none";
        document.getElementById('delConf').style.display = "block";
        document.getElementById('info').style.display = "block";
    }
    
    
    
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
    addFuncCookie(funcName, funcId);
}

//Everytime Function is introduced
function addFuncCookie(name, id) {
    if (Cookies.get('oneOne') != null) {
        if(Cookies.get('twoTwo') != null) {
            if(Cookies.get('threeThree') != null) {
                if(Cookies.get('fourFour') != null) {
                    if(Cookies.get('fiveFive') != null) {
                        if(Cookies.get('sixSix') != null) {
                            if(Cookies.get('sevenSeven') != null) {
                                if(Cookies.get('eightEight') != null) {
                                    if(Cookies.get('nineNine') != null) {
                                        console.log("No Space!");
                                    } else {
                                        Cookies.set('nineNine', "true");
                                        Cookies.set('nineNineName', name);
                                        Cookies.set('nineNineId', id);
                                        console.log("Cookie nine set");
                                    } 
                                } else { 
                                    Cookies.set('eightEight', "true");
                                    Cookies.set('eightEightName', name);
                                    Cookies.set('eightEightId', id);
                                    console.log("Cookie eight set");
                                }
                            } else {
                                Cookies.set('sevenSeven', "true");
                                Cookies.set('sevenSevenName', name);
                                Cookies.set('sevenSevenId', id);
                                console.log("Cookie seven set");
                            }
                        } else {
                            Cookies.set('sixSix', "true");
                            Cookies.set('sixSixName', name);
                            Cookies.set('sixSixId', id);
                            console.log("Cookie six set");
                        }
                    } else {
                        Cookies.set('fiveFive', "true");
                        Cookies.set('fiveFiveName', name);
                        Cookies.set('fiveFiveId', id);
                        console.log("Cookie Five set");
                    }
                } else {
                    Cookies.set('fourFour', "true");
                    Cookies.set('fourFourName', name);
                    Cookies.set('fourFourId', id);
                    console.log("Cookie four set");
                }
            } else {
                Cookies.set('threeThree', "true");
                Cookies.set('threeThreeName', name);
                Cookies.set('threeThreeId', id);
                console.log("Cookie three set");
            }
        } else {
            Cookies.set('twoTwo', "true");
            Cookies.set('twoTwoName', name);
            Cookies.set('twoTwoId', id);
            console.log("Cookie two set");
        }
    } else {
        Cookies.set('oneOne', "true");
        Cookies.set('oneOneName', name);
        Cookies.set('oneOneId', id);
        console.log("Cookie one set");
    }
    loadFuncCookie();
}

// Loading the functions.
function loadFuncCookie() {
    if (Cookies.get('oneOne') != null) {
        document.getElementById('oneOne').innerHTML = '<input type="submit" id="'+Cookies.get('oneOneId')+'" value="'+Cookies.get('oneOneName')+'"/>';
        if(Cookies.get('twoTwo') != null) {
            document.getElementById('twoTwo').innerHTML = '<input type="submit" id="'+Cookies.get('twoTwoId')+'" value="'+Cookies.get('twoTwoName')+'"/>';
            if(Cookies.get('threeThree') != null) {
                document.getElementById('threeThree').innerHTML = '<input type="submit" id="'+Cookies.get('threeThreeId')+'" value="'+Cookies.get('threeThreeName')+'"/>';
                if(Cookies.get('fourFour') != null) {
                    document.getElementById('fourFour').innerHTML = '<input type="submit" id="'+Cookies.get('fourFourId')+'" value="'+Cookies.get('fourFourName')+'"/>';
                    if(Cookies.get('fiveFive') != null) {
                        document.getElementById('fiveFive').innerHTML = '<input type="submit" id="'+Cookies.get('fiveFiveId')+'" value="'+Cookies.get('fiveFiveName')+'"/>';
                        if(Cookies.get('sixSix') != null) {
                            document.getElementById('sixSix').innerHTML = '<input type="submit" id="'+Cookies.get('sixSixId')+'" value="'+Cookies.get('sixSixName')+'"/>';
                            if(Cookies.get('sevenSeven') != null) {
                                document.getElementById('sevenSeven').innerHTML = '<input type="submit" id="'+Cookies.get('sevenSevenId')+'" value="'+Cookies.get('sevenSevenName')+'"/>';
                                if(Cookies.get('eightEight') != null) {
                                    document.getElementById('eightEight').innerHTML = '<input type="submit" id="'+Cookies.get('eightEightId')+'" value="'+Cookies.get('eightEightName')+'"/>';
                                    if(Cookies.get('nineNine') != null) {
                                        document.getElementById('nineNine').innerHTML = '<input type="submit" id="'+Cookies.get('nineNineId')+'" value="'+Cookies.get('nineNineName')+'"/>';
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

//Testing
document.getElementById("oneOne").onclick = function() {
    bro(Cookies.get("oneOneId"));
};

function bro(what) {
    console.log(what);
}