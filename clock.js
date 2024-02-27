 var second = 0;
 let min = 0;
 let hour = 0;
 let d = new Date();

 setInterval(
    function(){
        d = new Date();
        hour = d.getHours() * 30 + Math.round(min / 12);
        min = d.getMinutes() * 6;
        second = d.getSeconds() * 6;
        document.getElementById("second-hand").style.transform = "rotate("+ second + "deg)";
        document.getElementById("min-hand").style.transform = "rotate("+ min + "deg)";
        document.getElementById("hour-hand").style.transform = "rotate("+ hour + "deg)";
    }, 1000
 );