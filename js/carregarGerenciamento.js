document.addEventListener('DOMContentLoaded', function() {
    const tbody = document.querySelector('#gerenciamento-table tbody');
    tbody.innerHTML = '';
    gerenciamentoData.forEach(function(item) {
      var row = document.createElement('tr');
      Object.keys(item).forEach(function(key) {
        var cell = document.createElement('td');
        cell.textContent = item[key];
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });

});