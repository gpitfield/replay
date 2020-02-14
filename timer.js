var start = new Date;
start.setHours(19, 0, 0); // 7 pm 0 min 0 sec

function pad(num) {
  var l = parseInt(num).toString().length;
  l = (l < 2) ? 2 : l; // at least 2 padding
  return ("0" + parseInt(num)).substr(-l);
}

function tick() {
  var now = new Date;
  var remain = ((start - now) / 1000);
  var hh = parseInt((remain / 60 / 60));
  // var mm = pad((remain / 60) % 60);
  var mm = parseInt((remain / 60) % 60);
  var ss = pad(remain % 60);
  if (hh > 0) {
    document.getElementById('preposition').innerHTML = "at"
    document.getElementById('time').innerHTML = "7pm"
    document.getElementById('units').innerHTML = ""
  } else if (mm > 0) {
    // hh + ":" + mm + ":" + ss;
    // mm + ":" + ss;
    document.getElementById('preposition').innerHTML = "in"
    document.getElementById('time').innerHTML = mm
    document.getElementById('units').innerHTML = "minutes"
    setTimeout(tick, 60000);
  } else if (remain >= 11) {
    document.getElementById('preposition').innerHTML = "in"
    document.getElementById('time').innerHTML = ss
    document.getElementById('units').innerHTML = "seconds"
    setTimeout(tick, 1000);
  } else if (remain >= 1) {
    var pregames = document.getElementsByClassName('pregame')
    for (i = 0; i < pregames.length; i++) {
      pregames[i].classList.add('is-hidden')
    }
    document.getElementById('countdown').classList.remove("is-hidden")
    ss = remain % 60 // no padding
    document.getElementById('countdown').innerHTML = Math.floor(ss)
    setTimeout(tick, 1000);
  } else {
    var pregames = document.getElementsByClassName('pregame')
    for (i = 0; i < pregames.length; i++) {
      pregames[i].classList.add('is-hidden')
    }
    document.getElementById('now').classList.remove("is-hidden")
    document.getElementById('preposition').innerHTML = ""
    document.getElementById('countdown').classList.add('is-hidden')
    setTimeout(loadAttend, 5000)
  }
}

function loadAttend() {
  var urlParams = new URLSearchParams(window.location.search)
  if (urlParams.has('tournament_id')) {
    window.location.href = `/attend.html?tournament_id=${urlParams.get('tournament_id')}`
  }
}