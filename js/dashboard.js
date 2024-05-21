document.addEventListener('DOMContentLoaded', function() {

  const urlParams = new URLSearchParams(window.location.search);
  const cameraId = urlParams.get('camera');

  function fillTable(tableBodyId, data) {
    const tbody = document.querySelector('#' + tableBodyId + ' tbody');
    tbody.innerHTML = '';
    data.forEach(function(item) {
      var row = document.createElement('tr');
      Object.keys(item).forEach(function(key) {
        var cell = document.createElement('td');
        cell.textContent = item[key];
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });
  }

  if (camerasData[cameraId]) {
		const cameraData = camerasData[cameraId]
    fillTable('camera-status', cameraData.status);
    fillTable('table-read-axes-period', cameraData.vehicles);
    fillTable('payment-status-per-reading', cameraData.payments);


		const camerasNames = document.getElementById("camera-name");
		camerasNames.textContent = cameraData.name
		const cameraPicture = document.getElementById("side-camera");
		cameraPicture.src= cameraData.picture;
  } else {
    alert('Camera não encontrada');
  }
});