const charging = document.getElementById('charging');
const level = document.getElementById('level');
const discharge = document.getElementById('discharge');
const charge_time = document.getElementById('charge-time');
const progress = document.getElementById('progress');

navigator.getBattery().then((battery) => {
  displayCharging(battery);
  displayLevel(battery);
  displayDischarge(battery);
  displayLevel(battery);

  battery.addEventListener('chargingchange', () => {
    displayCharging(battery);
  });
});

function displayCharging(battery) {
  if (battery.charging) {
    charging.textContent = 'Charging';
  } else {
    charging.textContent = 'Not Charging';
  }
}

function displayLevel(battery) {
  const newLevel = battery.level * 100;
  level.textContent = `${newLevel}%`;
  progress.value = newLevel;
}

function displayDischarge(battery) {
  discharge.textContent = `Discharge time: ${battery.dischargingTime}`;
}

function displayChargeTime(battery) {
  discharge.textContent = `Charge time: ${battery.chargingTime}`;
}
