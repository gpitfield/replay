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
  // var hh = pad((remain / 60 / 60));
  var mm = pad((remain / 60) % 60);
  var ss = pad(remain % 60);
  if (remain > 0) {
    document.getElementById('time').innerHTML =
      // hh + ":" + mm + ":" + ss;
      mm + ":" + ss;
    setTimeout(tick, 1000);
    setTimeout(setPlayerCount, 60000)
  } else {
    document.getElementById('time').innerHTML =
      "Now!";
  }
}

