function setPlayerCount() {
  console.log('playerCount')
  var urlParams = new URLSearchParams(window.location.search)
  if (urlParams.has('tournament_id')) {
    getAjax("https://matchplay.events/data/tournaments/" + urlParams.get('tournament_id'), function (responseText) {
      var myObj = JSON.parse(responseText)
      document.getElementById("playerCount").innerHTML = myObj.players.length
    })
  }
}