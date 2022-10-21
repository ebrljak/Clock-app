hours = document.getElementById('H');
minutes = document.getElementById('M');
seconds = document.getElementById('S');
period = document.getElementById('period');

function Time () {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    if(hours < 12) {
        period.innerHTML = 'PM';
    } else {
        period.innerHTML = 'AM';
    }

    document.getElementById('H').innerHTML = hours;
    document.getElementById('M').innerHTML = minutes;
    document.getElementById('S').innerHTML = seconds;
}

setInterval(Time, 10);
