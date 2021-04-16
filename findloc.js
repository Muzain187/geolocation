let button = document.getElementById('Btn');
let display = document.getElementById('print');
let qibla = document.getElementById('qibla');
let lat,lon;
const con = Math.PI/180;
let Mlat = 21.25,Mlon = 39.49;
let Dlat,Dlon;
button.addEventListener('click',function(){
    console.log("hii");
    navigator.geolocation.getCurrentPosition(pos =>  {
        lat = pos.coords.latitude;
        lon = pos.coords.longitude;
    });
    // console.log(loc);
    if(typeof(lat) != 'undefined' && typeof(lon) != 'undefined'){
        console.log('latitude',lat,'\nlongitude',lon);
        display.innerHTML = `latitude : ${lat}<br>longitude : ${lon}`;

        Dlat = lat;
        Dlon = lon;
        let A = Math.sin((Dlon*con)-(Mlon*con));
        console.log(A);
        let B = Math.cos(Dlat*con)*Math.tan(Mlat*con)-Math.sin(Dlat*con)*Math.cos((Dlon*con)-(Mlon*con));
        console.log(B);
        let C = A/B;
        let D = Math.atan(C)*180/Math.PI;
        let direction  = Math.round(360-D);
        qibla.innerHTML = `The Qibla direction angle is ${direction}&deg`;
         console.log(360-D);
    }
    else{
        qibla.innerHTML = `Please re click the button until the result show`;
    }

    
})
