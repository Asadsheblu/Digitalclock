
//for date js
function displayDate() {
    var dates=new Date();
    var date=dates.getDate();
    var month=dates.getMonth();
    var year=dates.getFullYear();

document.getElementById('date').innerHTML=date;
document.getElementById('month').innerHTML=month;
document.getElementById('year').innerHTML=year;

}

setInterval(displayDate)

















//for time js
function displayTime() {
    var dateTime=new Date();
    var hour=dateTime.getHours();
    var min=dateTime.getMinutes();
    var sec=dateTime.getSeconds();
    var session=document.getElementById('session');
    if (session>=12) {
        session.innerHTML="PM"
        
    }
    else{
        session.innerHTML="AM"
    }

       document.getElementById('hours').innerHTML=hour;
       document.getElementById('minutes').innerHTML=min;
       document.getElementById('seconds').innerHTML=sec;

}
setInterval(displayTime,10)