function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var M = date.getMonth();
    var D = date.getDate();
    var Y = date.getFullYear();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    D = (D < 10) ? "0" + D : D;
    
    var time = M + "-" + D + "-" + Y + " " + h + ":" + m + ":" + s + " ";
    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
 
showTime();