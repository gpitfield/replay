var matchPlayURL = "https://matchplay.events/data/tournaments/"
function setPlayerCount() {
  var urlParams = new URLSearchParams(window.location.search)
  if (urlParams.has('tournament_id')) {
    getAjax(matchPlayURL + urlParams.get('tournament_id'), function (responseText) {
      var activeCount = 0
      var data = JSON.parse(responseText)
      for (i = 0; i < data.players.length; i++) {
        if (data.players[i].tournament.status == "active") {
          activeCount++
        }
      }
      document.getElementById("playerCount").innerHTML = activeCount
    })
  } else {
    document.getElementById("playerCount").innerHTML = 0
  }
  setTimeout(setPlayerCount, 60000)
}

function listPlayers() {
  var urlParams = new URLSearchParams(window.location.search)
  if (urlParams.has('tournament_id')) {
    getAjax(matchPlayURL + urlParams.get('tournament_id'), function (responseText) {
      var activeCount = 0
      var data = JSON.parse(responseText)
      for (i = 0; i < data.players.length; i++) {
        if (data.players[i].tournament.status == "active") {
          activeCount++
        }
      }
      var colSize = Math.floor(activeCount / 4)
      var remainder = activeCount - colSize * 4
      cols = document.getElementsByClassName('column')
      var rows = 0
      var currentCol = 0
      var extra = 0
      data.players.sort(function (a, b) { return a.name > b.name })
      for (i = 0; i < data.players.length; i++) {
        var player = data.players[i]
        if (player.tournament.status == "active") {
          var node = document.createElement("LI")
          node.innerHTML = player.name
          cols[currentCol].appendChild(node)
          rows += 1
        }
        if (currentCol < remainder) {
          extra = 1
        } else {
          extra = 0
        }
        if (rows >= colSize + extra) {
          currentCol++
          rows = 0
        }
      }
    })
  }
}