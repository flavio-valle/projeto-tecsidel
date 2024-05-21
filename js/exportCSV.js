function downloadJSONAsCSV(jsonData) {
	let csvData = jsonToCsv(jsonData); // Pass jsonData directly
	let blob = new Blob([csvData], { type: 'text/csv' });
	let url = window.URL.createObjectURL(blob);
	let a = document.createElement('a');
	a.href = url;
	a.download = 'data.csv';
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a); // Remove the link after downloading
}

function jsonToCsv(jsonData) {
	let csv = '';
	let headers = Object.keys(jsonData[0]);
	csv += headers.join(',') + '\n';
	jsonData.forEach(function (row) {
			let data = headers.map(header => JSON.stringify(row[header])).join(','); // Ensure proper CSV formatting
			csv += data + '\n';
	});
	return csv;
}