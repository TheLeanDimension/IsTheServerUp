
function getServerStatus(){

    var serverAddr = document.getElementById("serverAddr").innerHTML;
    var url = "https://api.mcsrvstat.us/2/" + serverAddr;
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));


    var serverStatus = "";
    var serverIP = "";
    var serverPort = "";
    var playerCount = "";
    var playerNames = "";

    document.getElementById("serverStatus").innerHTML = serverStatus;
    document.getElementById("serverIP").innerHTML = serverIP;
    document.getElementById("serverPort").innerHTML = serverPort;
    document.getElementById("playerCount").innerHTML = playerCount;
    document.getElementById("playerNames").innerHTML = playerNames;
}