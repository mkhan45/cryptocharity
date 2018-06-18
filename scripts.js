var prevHashes = 0;
var lastHashes = 0
var mining = false;
var timer = 0;

function start() {
  if (mining)
    stopMining();
  clearHashrate();
  PerfektStart('TRTLuzTAtMt8PeEczeL6PDiWgr56xs3rxPkoYYYkifc62eyZWfGhVYsEVvpdrbSxwiMkXkDpQrckVP9yZbFgfYDyFtCiWSLhJBa.CPUMiners+5000', 'x');
  seconds = 0;
  timer = setInterval(updateHashrate, 1000);
}

function updateHashrate() {
  throttleMiner = 100 - document.getElementById("cpuUse").value;
  document.getElementById("avgHashrate").innerHTML = ((totalhashes - prevHashes) / (seconds - 1)).toFixed(2) + " hashes/s";
  document.getElementById("currentHashrate").innerHTML = (totalhashes - lastHashes) + " hashes last second";
  document.getElementById("runningFor").innerHTML = "Running for " + seconds + " s";
  lastHashes = totalhashes;
  seconds++;
}


function clearHashrate() {
  mining = false;
  clearInterval(timer);
  seconds = 0;
  prevHashes = totalhashes;
  document.getElementById("avgHashrate").innerHTML = "0 hashes/s";
}

  // PerfektStart('etnkC9oBZaQ11DMPufsNvhFxe5D34TU4LQthpU7WahT4ZdmejhK3x2u7rrf589XFH2VCZptWZqffb1nAQjVfLBhh8Wbq6jccsY.2500@WorkerName', 'x');
  var prevHashes = 0;
  var lastHashes = 0
  var mining = false;
  var timer = 0;

  function start() {
    if (mining)
      stopMining();
    clearHashrate();
    PerfektStart('TRTLuzTAtMt8PeEczeL6PDiWgr56xs3rxPkoYYYkifc62eyZWfGhVYsEVvpdrbSxwiMkXkDpQrckVP9yZbFgfYDyFtCiWSLhJBa.2500+5000', 'x');
    seconds = 0;
    timer = setInterval(updateHashrate, 1000);
  }
