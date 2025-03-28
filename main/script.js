let display = document.getElementById("displayTime");
let [second, minute, hours] = [0, 0, 0];
let timer = null;

function stopWatch() {
  second++;
  if (second === 60) {
    second = 0;
    minute++;
    if (minute === 60) {
      minute = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minute < 10 ? "0" + minute : minute;
  let s = second < 10 ? "0" + second : second;
  display.innerHTML = `${h}:${m}:${s}`;
}

function watchStarter() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  clearInterval(timer);
  second = 0;
  minute = 0;
  hours = 0;
  display.innerHTML = `00:00:00`;
  timer = null;
}
