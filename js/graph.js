
const ctx = document.getElementById('myChart');



  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2 eixos', '3 eixos', '4 eixos', '5 eixos', '6 eixos', '7 eixos', '8 eixos'],
      datasets: [{
        label: 'Quantidade de Eixos',
        data: [65, 59, 90, 81, 56, 55, 40],
        borderWidth: 2,
        fill: true,
        
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

