function setPlayerCount() {
  var urlParams = new URLSearchParams(window.location.search)
  document.getElementById("playerCount").innerHTML = 0
  if (urlParams.has('tournament_id')) {
    getAjax("https://matchplay.events/data/tournaments/" + urlParams.get('tournament_id'), function (responseText) {
      var myObj = JSON.parse(responseText)
      document.getElementById("playerCount").innerHTML = myObj.players.length
    })
  }
  setTimeout(setPlayerCount, 60000)
}