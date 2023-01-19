const card = document.querySelector('.card');
const map = document.getElementById('map');

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      map.src = `https://maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}&output=embed`;
    },
    (err) => {
      map.remove();
      let errorMessage = document.createElement('p');
      errorMessage.textContent = `Error: ${err.message}`;
      card.appendChild(errorMessage);
    }
  );
} else {
  map.remove();
}
