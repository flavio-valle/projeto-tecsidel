var sidebar = document.getElementById('sidebar')

if(sidebar) {
    let sidebar = document.getElementById('sidebar');
    if (sidebar) {
        fetch('../components/sidebar.html')
            .then(response => response.text())
            .then(data => {
                sidebar.innerHTML += data;
            })
            .catch(error => {
                console.error('Erro ao encontrar sidebar.html:', error);
            });
    }
}