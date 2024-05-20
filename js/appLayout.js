var sidebar = document.getElementById('sidebar')

if(sidebar) {
    let sidebar = document.getElementById('sidebar');
    if (sidebar) {
        fetch('/pages/components/sidebar.html')
            .then(response => response.text())
            .then(data => {
                sidebar.innerHTML += data;
            })
            .catch(error => {
                console.error('Erro ao encontrar sidebar.html:', error);
            });
    }

    let sidebarStyle = document.createElement('link');
    sidebarStyle.rel = 'stylesheet';
    sidebarStyle.href = '/pages/components/style.css';
    document.head.appendChild(sidebarStyle);
    
    let bootstrapIcons = document.createElement('link');
    bootstrapIcons.rel = 'stylesheet';
    bootstrapIcons.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css';
    document.head.appendChild(bootstrapIcons);

}