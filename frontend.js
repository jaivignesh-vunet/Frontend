document.getElementById('update-btn').addEventListener('click', () => {
  fetch('http://10.101.206.147:3000/waterpurity')
    .then(response => response.json())
    .then(data => {
      const waterLevel = document.getElementById('water-level');
      const purityValue = document.getElementById('purity-value');
      waterLevel.style.height = data.purity + '%';
      purityValue.textContent = data.purity + '%';
    })
    .catch(error => console.error(error));
});
