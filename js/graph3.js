document.addEventListener('DOMContentLoaded', function () {
    const modalElement = document.getElementById('exampleModal3');
    let myDoughnutChart;

    modalElement.addEventListener('shown.bs.modal', function () {
      // Obtém o contexto do canvas
      const ctx = document.getElementById('donnutChart').getContext('2d');

      // Dados do gráfico
      const data = {
        labels: ['Atrasado', 'Pago', 'Total'],
        datasets: [{
          label: 'Status de pagamento',
          data: [40, 30, 30], // Coloque os valores reais aqui
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

      // Configuração do gráfico
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

      // Verifica se o gráfico já foi criado para evitar recriações
      if (myDoughnutChart) {
        myDoughnutChart.destroy();
      }

      // Cria o gráfico
      myDoughnutChart = new Chart(ctx, config);
    });

    // Listener para destruir o gráfico quando o modal é escondido (opcional)
    modalElement.addEventListener('hidden.bs.modal', function () {
      if (myDoughnutChart) {
        myDoughnutChart.destroy();
        myDoughnutChart = null;
      }
    });
  });