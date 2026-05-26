const clockElement = document.getElementById("clock");

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  clockElement.textContent = time;
}

updateClock();
setInterval(updateClock, 1000);
