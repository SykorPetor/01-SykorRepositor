// hodiny
function aktualizovatHodiny() {
  let ted = new Date();
  let hodiny = ted.getHours();
  let minuty = ted.getMinutes();
  let sekundy = ted.getSeconds();
  document.getElementById('zobrazeniHodin').textContent = hodiny + ':' + minuty + ':' + sekundy;
}

setInterval(aktualizovatHodiny, 1000);

// Časovač
let intervalCasovace;
let casovacBezi = false;
let sekundyCasovace = 0;

function spustitCasovac() {
  if (!casovacBezi) {
    intervalCasovace = setInterval(aktualizovatCasovac, 1000);
    casovacBezi = true;
  }
}

function zastavitCasovac() {
  clearInterval(intervalCasovace);
  casovacBezi = false;
}

function resetovatCasovac() {
  clearInterval(intervalCasovace);
  sekundyCasovace = 0;
  document.getElementById('zobrazeniCasovace').textContent = '00:00:00';
  casovacBezi = false;
}

function aktualizovatCasovac() {
  sekundyCasovace++;
  let hodiny = Math.floor(sekundyCasovace / 3600);
  let minuty = Math.floor((sekundyCasovace % 3600) / 60);
  let sekundy = sekundyCasovace % 60;
  document.getElementById('zobrazeniCasovace').textContent = hodiny.toString().padStart(2, '0') + ':' + minuty.toString().padStart(2, '0') + ':' + sekundy.toString().padStart(2, '0');
}

document.getElementById('spustitCasovac').addEventListener('click', spustitCasovac);
document.getElementById('resetovatCasovac').addEventListener('click', resetovatCasovac);

// Stopky
let intervalStopky;
let stopkyBezi = false;
let sekundyStopky = 0;

function spustitStopky() {
  if (!stopkyBezi) {
    intervalStopky = setInterval(aktualizovatStopky, 1000);
    stopkyBezi = true;
  }
}

function zastavitStopky() {
  clearInterval(intervalStopky);
  stopkyBezi = false;
}

function resetovatStopky() {
  clearInterval(intervalStopky);
  sekundyStopky = 0;
  document.getElementById('zobrazeniStopky').textContent = '00:00:00';
  stopkyBezi = false;
}

function aktualizovatStopky() {
  sekundyStopky++;
  let hodiny = Math.floor(sekundyStopky / 3600);
  let minuty = Math.floor((sekundyStopky % 3600) / 60);
  let sekundy = sekundyStopky % 60;
  document.getElementById('zobrazeniStopky').textContent = hodiny.toString().padStart(2, '0') + ':' + minuty.toString().padStart(2, '0') + ':' + sekundy.toString().padStart(2, '0');
}

document.getElementById('spustitStopky').addEventListener('click', spustitStopky);
document.getElementById('zastavitStopky').addEventListener('click', zastavitStopky);
document.getElementById('resetovatStopky').addEventListener('click', resetovatStopky);

// Ukládání času z stopky
document.getElementById('ulozitCas').addEventListener('click', function() {
  let cas = document.getElementById('zobrazeniStopky').textContent;
  document.getElementById('historieCasu').innerHTML += '<div>' + cas + '</div>';
});

function nastavitelny() {
  intervalCasovace = setTimeout(function() {alert("tvůj nastavený čas vypršel")}, document.getElementById("nastav").value * 1000);
}