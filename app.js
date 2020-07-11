var min = 0;
var sec = 0;
var msec = 0;

var minHead = document.getElementById("min");
var secHead = document.getElementById("sec");
var msecHead = document.getElementById("msec");

var interv;

function timer() {
    msec++;
    msecHead.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        secHead.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++;
        minHead.innerHTML = min;
        sec = 0;
    }
}

function start() {
    interv = setInterval(timer, 10);
    document.getElementById("st").disabled = true;
}

function stop() {
    clearInterval(interv);
    document.getElementById("st").disabled = false;
}

function rese() {
    msec = 0;
    sec = 0;
    min = 0;
    msecHead.innerHTML = msec;
    secHead.innerHTML = sec;
    minHead.innerHTML = min;
    Laps.innerHTML = ""
    clearInterval(interv);
}
var Lap = document.getElementById("lap");
var Laps = document.getElementById("laps");
Lap.onclick = function() {
    Laps.innerHTML += "<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + min + " : " + sec + " : " + msec + "</li>";
};