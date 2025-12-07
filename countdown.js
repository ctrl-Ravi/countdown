let startTime = Date.now();

function pad(num, size) {
  let s = String(num);
  while (s.length < size) s = "0" + s;
  return s;
}

function updateTimer() {
  const now = Date.now();
  let diff = now - startTime; // elapsed ms

  if (diff < 0) diff = 0;

  const ms = diff % 1000;
  diff = (diff - ms) / 1000;

  const seconds = diff % 60;
  diff = (diff - seconds) / 60;

  const minutes = diff % 60;
  diff = (diff - minutes) / 60;

  const hours = diff % 24;
  diff = (diff - hours) / 24;

  const days = diff % 30;
  diff = (diff - days) / 30;

  const months = diff % 12;
  diff = (diff - months) / 12;

  const years = diff;

  const byId = (id) => document.getElementById(id);

  byId("years").textContent = pad(years, 2);
  byId("months").textContent = pad(months, 2);
  byId("days").textContent = pad(days, 2);
  byId("hours").textContent = pad(hours, 2);
  byId("minutes").textContent = pad(minutes, 2);
  byId("seconds").textContent = pad(seconds, 2);
  byId("milliseconds").textContent = pad(ms, 3);
}

// Make sure DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  startTime = Date.now();
  updateTimer();
  setInterval(updateTimer, 50);
});
