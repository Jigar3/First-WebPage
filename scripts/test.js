var submit = document.getElementById("submit");

function openWin() {
    window.open("next.html","_self");
}

submit.onclick = function(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "iiita" && password === "iiita123"){
        openWin();
    }

    username.clear;
    password.clear;
    
};





