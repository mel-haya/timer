let minutes = .2;
let time = minutes * 6000;
let status = 1;

var opacity = 100;
const timer = document.querySelector('#innerCounter');
const message = document.querySelector('#result');
const answer = "6edefd4ea67db31a42f4cb8d25d2f077e6dafd1ca75dbf3ab29c024e3b79b798";
const millisecondsDiv = document.querySelector('#milliseconds');
const secondsDiv = document.querySelector('#seconds');
const minutesDiv = document.querySelector('#minutes');

setInterval(updateTime,10);
setInterval(flickerTimer,100);

function flickerTimer(){
    
    if(time < 1000 ){
        if(opacity == 100 && time > 10 && status)
            opacity = 0;
        else
            opacity = 100
        timer.style.opacity = opacity + "%";
    }
}

function updateTime(){
    if(!status && time)
    {
        document.body.style.background = "radial-gradient(circle, rgba(14,255,0,1) 0%, rgba(0,150,0,1) 100%)";
        message.innerHTML="CONGRATS! you won<br> absolutely nothing.";
        message.style.opacity = "100%";
        return;    
    }   
    const minute = Math.floor(time / 6000);
    const second = Math.floor((time - (minute * 6000)) / 100);
    const millisecond = Math.floor((time - (minute * 6000)) % 100);
    millisecondsDiv.innerHTML = millisecond >= 10 ? millisecond : '0' + millisecond;
    secondsDiv.innerHTML = second >= 10 ? second : '0' + second;
    minutesDiv.innerHTML = minute >= 10 ? minute : '0' + minute;
    if(time == 0){
       document.body.style.background = "radial-gradient(circle, rgba(43,43,43,1) 0%, rgba(0,0,0,1) 100%)";
        message.innerHTML="GAME OVER";
        message.style.opacity = "100%";
    return;
    }
    time--;
    
}
function checkPass(){
    var pass = document.querySelector('#input').value;
    if(sha256(pass) == answer)
    {
        status = 0;   
    }
        
    else{
        document.querySelector('#input').value = "";
        message.innerHTML="ACCESS DENIED";
        message.style.opacity = "100%";
    }
        
}