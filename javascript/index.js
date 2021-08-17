const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  let minutes = chronometer.getMinutes();
  let seconds = chronometer.getSeconds();

  let minutesString = minutes.toString();
  let secondsString = seconds.toString();

  if (minutesString.length < 2) {
    minutesString = '0' + minutesString;
  }
  if (secondsString.length < 2) {
    secondsString = '0' + secondsString;
  }

  minDecElement.innerHTML = minutesString[0];
  minUniElement.innerHTML = minutesString[1];

  secDecElement.innerHTML = secondsString[0];
  secUniElement.innerHTML = secondsString[1];

  let message = '';
  message =
    message +
    minDecElement.innerHTML +
    minUniElement.innerHTML +
    ':' +
    secDecElement.innerHTML +
    secUniElement.innerHTML;

  return message;
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  let leftButtonValue = btnLeftElement.innerHTML;
  // si esta en start //
  if (leftButtonValue === 'START') {
    btnLeftElement.innerHTML = 'STOP';
    //cambiar la clase a btn stop
    btnLeftElement.className = 'btn stop';
    setInterval(printTime, 1000);
    chronometer.start();
    //Set the btnRight button with the text SPLIT, and the class btn split.
    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.className = 'btn split';
  }
  if (leftButtonValue === 'STOP') {
    btnLeftElement.innerHTML = 'START';
    //cambiar la clase a btn start
    btnLeftElement.className = 'btn start';
    chronometer.stop();
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.className = 'btn reset';
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  let splitList;
  let rightButtonValue = btnRightElement.innerHTML;
  if (rightButtonValue === 'SPLIT') {
    //crear y añadir elemento split en la lista
    let currentTime = printTime();
    let listElement = document.createElement('li');
    listElement.innerHTML = currentTime;
    splitList = document.getElementById('splits');
    console.log(splitList);
    splitList.appendChild(listElement);
  }
  if (rightButtonValue === 'RESET') {
    chronometer.reset();
    let splitsToDelete = document.getElementsByTagName('li');
    let splitList = document.getElementById('splits');
    for (let i = splitsToDelete.length - 1; i >= 0; i--) {
      splitList.removeChild(splitsToDelete[i]);
    }
  }
});
