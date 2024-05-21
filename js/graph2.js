document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementsByClassName('lineChart')[0].getContext('2d');

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    new Chart(ctx, {
        type: 'line',
        data: {
        labels: labels,
        datasets: [{
            label: 'Pontuação total por eixo',
            data: [2300, 920, 713, 276, 23, 0, 23],
            borderWidth: 2,
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
});