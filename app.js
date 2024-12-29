// clock
const clock = document.querySelector(".main");
let hourBox = document.querySelector(".hour");
let minBox = document.querySelector(".min");
let secBox = document.querySelector(".sec");

setInterval(() => {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  hourBox.innerHTML = h;
  minBox.innerHTML = m;
  secBox.innerHTML = s;

  arr.forEach((elm) => {
    if (elm.h == hourBox.innerHTML && elm.m == minBox.innerHTML) {
      alert("Alarm");
    }
  });
}, 1000);

// alarm
let arr = [];

let alarmBox = document.querySelector(".alarm");
const newAlarm = document.querySelector(".setalarm");

let hInp = document.getElementById("hour");
let mInp = document.getElementById("min");
let submit = document.getElementById("set");

newAlarm.addEventListener("click", () => {
  clock.style.display = "none";
  newAlarm.style.display = "none";
  alarmBox.style.display = "grid";
});

submit.addEventListener("click", () => {
  let h = hInp.value;
  let m = mInp.value;

  arr.push({ h, m });

  clock.style.display = "grid";
  newAlarm.style.display = "block";
  alarmBox.style.display = "none";
});
