let startPauseResumeButton = $(".start");
let resetButton = $(".reset");
let lapButton = $(".lap");

let timeShow = $(".time");
let lapTimeShow = $(".laptimes");

var hrs = 0, min = 0, sec = 0, msec = 0;
var time;
var lapstart = true;

startPauseResumeButton.click(function() {
    var buttonValue = startPauseResumeButton.text();
    if(buttonValue === "Start" || buttonValue === "Resume") {
        startPauseResumeButton.text("Pause");
        time = setInterval(start, 10);
        lapstart = true;
        startPauseResumeButton.addClass("pause_btn");
        if(buttonValue === "Resume") {
            startPauseResumeButton.removeClass("resume_btn");
            startPauseResumeButton.addClass("pause_btn");
        }
    }
    if(buttonValue === "Pause") {
        clearInterval(time);
        startPauseResumeButton.text("Resume");
        lapstart = false;
        startPauseResumeButton.removeClass("pause_btn");
        startPauseResumeButton.addClass("resume_btn");
    }
});
function start() {
    msec += 10;
    if(msec === 1000) {
        sec += 1;
        msec = 0;
        if(sec === 60) {
            min += 1;
            sec = 0;
            if(min === 60) {
                hrs += 1;
                min = 0;
            }
        }
    }
    let h,m,s,ms;
    if(hrs<10) {
        h = "0" + hrs;
    } else {
        h = hrs;
    }
    if(min < 10) {
        m = "0" + min;
    } else {
        m = min;
    }
    if(sec < 10) {
        s = "0" + sec;
    } else {
        s = sec;
    }
    if(msec <100) {
        ms = "0" + msec;
        if(msec < 10) {
            ms = "00" + msec;
        }
    } else {
        ms = msec;
    }
    timeShow.text(h + ":" + m + ":" + s + ":" + ms);
}

resetButton.click(function() {
    clearInterval(time);
    hrs = 0;
    min = 0;
    sec = 0;
    msec = 0;
    timeShow.text("00:00:00:000");
    startPauseResumeButton.text("Start");
    lapTimeShow.text("");
    lapTimeShow.append("<h2>Lap Records</h2>");
    lapstart = true;
    startPauseResumeButton.removeClass("pause_btn");
    startPauseResumeButton.removeClass("resume_btn");

});

lapButton.click(function() {
    lapButton.addClass("lap_animation");
    setTimeout(function() {
        lapButton.removeClass("lap_animation");
    },40);
    if(lapstart === true) {
    if(hrs !== 0 || min !== 0 || sec !== 0 || msec !== 0) {
        var h,m,s,ms;
        if(hrs<10) {
            h = "0" + hrs;
        } else {
            h = hrs;
        }
        if(min < 10) {
            m = "0" + min;
        } else {
            m = min;
        }
        if(sec < 10) {
            s = "0" + sec;
        } else {
            s = sec;
        } 
        if(msec <100) {
            ms = "0" + msec;
            if(msec < 10) {
                ms = "00" + msec;
            }
        } else {
            ms = msec;
        }
        lapTimeShow.append("<br>"  + h + ":" + m + ":" + s + ":" + ms);
    }}
});

/*startPauseResumeButton.click(function () {
    if (startPauseResumeButton.text() === "Start") {
        startPauseResumeButton.text("Pause");
        time = setInterval(start, 10);
    } else if (startPauseResumeButton.text() === "Pause") {
        startPauseResumeButton.text("Resume");
        clearInterval(time);
    } else {
        startPauseResumeButton.text("Pause");
        time = setInterval(start, 10);
    }
})
*/



//----------------------------------------------------------------------------------------------------------------------------



/*let startButton = $(".start");
let pauseButton = $(".pause");
let resetButton = $(".reset");
let timeShow = $(".time");

var hr = 0, min = 0, sec = 0, msec = 0;
var time;

var count =0;

startButton.click(function() {
    time = setInterval(start, 10);
    count++;
});

function start() {
    if(count === 1) {
        msec = msec + 10;
        if(msec === 1000) {
            sec = sec + 1;
            msec = 0;
            if(sec === 60) {
                sec = 0;
                min = min + 1;
                if(min === 60) {
                    min = 0;
                    hr += 1;
                }
            }
        }
        var h,m,s,ms;
        if(hr < 10) {
            h = "0" + hr;
        }
        else {
            h = hr;
        }
        if(min < 10) {
            m = "0" + min;
        }
        else {
            m = min;
        }
        if(sec < 10) {
            s = "0" + sec;
        }
        else {
            s = sec;
        }
        if(msec < 100) {
            ms = "0" + msec;
            if(msec < 10) {
                ms = "00" + msec;
            }
        }
        else {
            ms = msec;
        }
        timeShow.text(h + ":" + m + ":" + s + ":" + ms);
    }
}
pauseButton.click(function() {
    clearInterval(time);
    count = 0;
});
resetButton.click(function() {
    hr = 0;
    min = 0;
    sec = 0;
    msec = 0;
    clearInterval(time);
    timeShow.text("00:00:00:000");
})
*/
//====================================================================
/*
var timer = setInterval(function() {
        document.getElementById("timer").innerHTML = hr + " : " + min + " : " + sec;
        sec++;
        if(sec == 60) {
            min++;
            sec = 0;
        }
        if(min == 60) {
            hr++;
            min = 0;
        }
    }, 1000);
*/