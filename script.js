
// If the button "Valider" is clicked it launch this method

function findIP(){
    var xhr;
    if (window.XMLHttpRequest){
        xhr= new XMLHttpRequest(); //Modern browser( Firefox ,Chrome ...)
    }
    else if(window.ActiveXObject){
        xhr= new ActiveXObject("Microsoft.XMLHTTP"); //Old browser ( like Internet Explorer)
    }
    else{
        alert("Your browser is not supported");   
        return;
    }
    xhr.open("GET","http://api.openweathermap.org/data/2.5/weather?q="+document.getElementById('cityRequired').value.toLowerCase()+"&APPID=ee07e2bf337034f905cde0bdedae3db8&units=metric", true );
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState)
        if(xhr.readyState == 4){
            
            if(xhr.status == 200){
                
                var json= JSON.parse(xhr.response);
                document.getElementById("city").innerHTML= json["name"];
                document.getElementById("country").innerHTML=json["sys"]["country"]
                document.getElementById('temp').innerHTML= json["main"]["temp"] + "° C"
                document.getElementById('pressure').innerHTML = parseFloat(json["main"]["pressure"]) + " hPa"                
                document.getElementById('weather').innerHTML = json["weather"]["0"]["description"];
                document.getElementById('windSpeed').innerHTML = json["wind"]["speed"] + " m/s";

                document.getElementById('humidity').innerHTML = json ["main"]["humidity"] + "%";
            }
            else{
                alert("error "+ xhr.status+ " :  You enter a wrong city name try to add dashes in place of space and inversly ")

            }
        }

    }
    

    xhr.send(null);

    
}