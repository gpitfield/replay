var matchplayID = 'xbg98'; // Replace with tournament ID (URL or Number works) 
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("playerCount").innerHTML = myObj.players.length;
  }
};
xmlhttp.open("GET", "https://matchplay.events/data/tournaments/" + matchplayID, true);
xmlhttp.send();
