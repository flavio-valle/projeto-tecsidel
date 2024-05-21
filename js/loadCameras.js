document.addEventListener('DOMContentLoaded', function() {

  const urlParams = new URLSearchParams(window.location.search);
  const cameraId = urlParams.get('camera');

	const camerasElement = document.querySelector('.cameras');
		Object.keys(camerasData).forEach(function(key) {
			const cameraData = camerasData[key];

			const cameraDiv = document.createElement('div');
			const cameraA = document.createElement('a');
			const cameraImg = document.createElement('img');
			const cameraH2 = document.createElement('h2');

			cameraDiv.classList.add("camera-container");

			cameraA.href = `/pages/camera.html?camera=${key}`
			cameraImg.classList.add('camera')
			cameraImg.src = cameraData.picture
			cameraH2.textContent = cameraData.name

			cameraA.appendChild(cameraImg)
			cameraDiv.appendChild(cameraA);
			cameraDiv.appendChild(cameraH2);

			camerasElement.appendChild(cameraDiv);
		});
});