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

function sendSetting() {
    var ip = document.getElementById("ip").value;
    var port = document.getElementById("port").value;
    var password = document.getElementById("password").value;
    sendMsg(ip, port, password);
}
async function sendMsg(ip, port, password, message) {
    //Get Info

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

async function sendMsgFinal(ip, port, password, message) {
    var recieved = listen(ip, port, password+message);
    await sleep(100);
    //console.log(recieved);
}

function listen(ip, port, message) {
    socket = new WebSocket('ws://'+ip+':'+port);

    socket.addEventListener('open', function (event) {
        socket.send("test123");
    });
    socket.addEventListener('message', function (event) {
        if (event.data == "password:Access Granted") {
            good = 1;
        }
        console.log(event.data);
        if ( document.URL.includes("config.php") ) {
            document.getElementById("output").innerHTML = event.data;
        }
        return event.data;
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function addFunc() {
    var funcName = document.getElementById("funcName").value;
    var togFuncName = document.getElementById("togFuncName").value;
    var funcId = document.getElementById("funcId").value;
    var funcIdTog = document.getElementById("funcIdTog").value;
    addFuncCookie(funcName, togFuncName, funcId, funcIdTog);
}

//Everytime Function is introduced
function addFuncCookie(name, togName, id, idTog) {
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
                                        Cookies.set('nineNineTogName', togName);
                                        Cookies.set('nineNineId', id);
                                        Cookies.set('nineNineIdTog', idTog);
                                        console.log("Cookie nine set");
                                    } 
                                } else { 
                                    Cookies.set('eightEight', "true");
                                    Cookies.set('eightEightName', name);
                                    Cookies.set('eightEightTogName', togName);
                                    Cookies.set('eightEightId', id);
                                    Cookies.set('eightEightIdTog', idTog);
                                    console.log("Cookie eight set");
                                }
                            } else {
                                Cookies.set('sevenSeven', "true");
                                Cookies.set('sevenSevenName', name);
                                Cookies.set('sevenSevenTogName', togName);
                                Cookies.set('sevenSevenId', id);
                                Cookies.set('sevenSevenIdTog', idTog);
                                console.log("Cookie seven set");
                            }
                        } else {
                            Cookies.set('sixSix', "true");
                            Cookies.set('sixSixName', name);
                            Cookies.set('sixSixTogName', togName);
                            Cookies.set('sixSixId', id);
                            Cookies.set('sixSixIdTog', idTog);
                            console.log("Cookie six set");
                        }
                    } else {
                        Cookies.set('fiveFive', "true");
                        Cookies.set('fiveFiveName', name);
                        Cookies.set('fiveFiveTogName', togName);
                        Cookies.set('fiveFiveId', id);
                        Cookies.set('fiveFiveIdTog', idTog);
                        console.log("Cookie Five set");
                    }
                } else {
                    Cookies.set('fourFour', "true");
                    Cookies.set('fourFourName', name);
                    Cookies.set('fourFourTogName', togName);
                    Cookies.set('fourFourId', id);
                    Cookies.set('fourFourIdTog', idTog);
                    console.log("Cookie four set");
                }
            } else {
                Cookies.set('threeThree', "true");
                Cookies.set('threeThreeName', name);
                Cookies.set('threeThreeTogName', togName);
                Cookies.set('threeThreeId', id);
                Cookies.set('threeThreeIdTog', idTog);
                console.log("Cookie three set");
            }
        } else {
            Cookies.set('twoTwo', "true");
            Cookies.set('twoTwoName', name);
            Cookies.set('twoTwoTogName', togName);
            Cookies.set('twoTwoId', id);
            Cookies.set('twoTwoIdTog', idTog);
            console.log("Cookie two set");
        }
    } else {
        Cookies.set('oneOne', "true");
        Cookies.set('oneOneName', name);
        Cookies.set('oneOneTogName', togName);
        Cookies.set('oneOneId', id);
        Cookies.set('oneOneIdTog', idTog);
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
var one = 0;
var two = 0;
var three = 0;
var four = 0;
var five = 0;
var six = 0;
var seven = 0;
var eight = 0;
var nine = 0;
document.getElementById("oneOne").onclick = function() {
    if (one == 0){
        one = 1;
        document.getElementById(Cookies.get('oneOneId')).value = Cookies.get('oneOneTogName');
        bro(Cookies.get("oneOneId"));
    } else {
        document.getElementById(Cookies.get('oneOneId')).value = Cookies.get('oneOneName');
        bro(Cookies.get("oneOneIdTog"));
        one = 0;
    }
};
document.getElementById("twoTwo").onclick = function() {
    if (two == 0){
        two = 1;
        document.getElementById(Cookies.get('twoTwoId')).value = Cookies.get('twoTwoTogName');
        bro(Cookies.get("twoTwoId"));
    } else {
        document.getElementById(Cookies.get('twoTwoId')).value = Cookies.get('twoTwoName');
        bro(Cookies.get("twoTwoIdTog"));
        two = 0;
    }
};
document.getElementById("threeThree").onclick = function() {
    if (three == 0){
        three = 1;
        document.getElementById(Cookies.get('threeThreeId')).value = Cookies.get('threeThreeTogName');
        bro(Cookies.get("threeThreeId"));
    } else {
        document.getElementById(Cookies.get('threeThreeId')).value = Cookies.get('threeThreeName');
        bro(Cookies.get("threeThreeIdTog"));
        three = 0;
    }
    
};
document.getElementById("fourFour").onclick = function() {
    if (four == 0){
        four = 1;
        document.getElementById(Cookies.get('fourFourId')).value = Cookies.get('fourFourTogName');
        bro(Cookies.get("fourFourId"));
    } else {
        document.getElementById(Cookies.get('fourFourId')).value = Cookies.get('fourFourName');
        bro(Cookies.get("fourFourIdTog"));
        four = 0;
    }
    
};
document.getElementById("fiveFive").onclick = function() {
    if (five == 0){
        five = 1;
        document.getElementById(Cookies.get('fiveFiveId')).value = Cookies.get('fiveFiveTogName');
        bro(Cookies.get("fiveFiveId"));
    } else {
        document.getElementById(Cookies.get('fiveFiveId')).value = Cookies.get('fiveFiveName');
        bro(Cookies.get("fiveFiveIdTog"));
        five = 0;
    }
    
};
document.getElementById("sixSix").onclick = function() {
    if (six == 0){
        six = 1;
        document.getElementById(Cookies.get('sixSixId')).value = Cookies.get('sixSixTogName');
        bro(Cookies.get("sixSixId"));
    } else {
        document.getElementById(Cookies.get('sixSixId')).value = Cookies.get('sixSixName');
        bro(Cookies.get("sixSixIdTog"));
        six = 0;
    }
    
};
document.getElementById("sevenSeven").onclick = function() {
    if (seven == 0){
        seven = 1;
        document.getElementById(Cookies.get('sevenSevenId')).value = Cookies.get('sevenSevenTogName');
        bro(Cookies.get("sevenSevenId"));
    } else {
        document.getElementById(Cookies.get('sevenSevenId')).value = Cookies.get('sevenSevenName');
        bro(Cookies.get("sevenSevenIdTog"));
        seven = 0;
    }
    
};
document.getElementById("eightEight").onclick = function() {
    if (eight == 0){
        eight = 1;
        document.getElementById(Cookies.get('eightEightId')).value = Cookies.get('eightEightTogName');
        bro(Cookies.get("eightEightId"));
    } else {
        document.getElementById(Cookies.get('eightEightId')).value = Cookies.get('eightEightName');
        bro(Cookies.get("eightEightIdTog"));
        eight = 0;
    }
    
};
document.getElementById("nineNine").onclick = function() {
    if (nine == 0){
        nine = 1;
        document.getElementById(Cookies.get('nineNineId')).value = Cookies.get('nineNineTogName');
        bro(Cookies.get("nineNineId"));
    } else {
        document.getElementById(Cookies.get('nineNineId')).value = Cookies.get('nineNineName');
        bro(Cookies.get("nineNineIdTog"));
        nine = 0;
    }
    
};

function bro(what) {
    sendMsgFinal(Cookies.get('ip'), Cookies.get('port'), Cookies.get('password'), what);
}