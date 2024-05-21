document.addEventListener('DOMContentLoaded', function () {
    const modalElement = document.getElementById('exampleModal3');
    let myDoughnutChart;

    modalElement.addEventListener('shown.bs.modal', function () {

      const ctx = document.getElementById('donnutChart').getContext('2d');

      const data = {
        labels: ['Atrasado', 'Pago', 'Total'],
        datasets: [{
          label: 'Status de pagamento',
          data: [40, 30, 30],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

      const config = {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Status de Pagamento'
            }
          }
        }
      };

      if (myDoughnutChart) {
        myDoughnutChart.destroy();
      }

      myDoughnutChart = new Chart(ctx, config);
    });

    modalElement.addEventListener('hidden.bs.modal', function () {
      if (myDoughnutChart) {
        myDoughnutChart.destroy();
        myDoughnutChart = null;
      }
    });
  });