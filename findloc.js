let button = document.getElementById('Btn');
let display = document.getElementById('print');
let loc;
button.addEventListener('click',function(){
    console.log("hii");
    navigator.geolocation.getCurrentPosition(pos =>  loc = pos.coords);
    console.log(loc);
    console.log('latitude',loc.latitude,'\nlongitude',loc.longitude);
    display.innerHTML = `latitude : ${loc.latitude}<br>longitude : ${loc.longitude}`;
    
})