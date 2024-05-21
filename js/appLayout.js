document.addEventListener('DOMContentLoaded', function () {
    let sidebar = document.getElementById('sidebar');
    if (sidebar) {
        fetch('/pages/components/sidebar.html')
            .then(response => response.text())
            .then(data => {
                sidebar.innerHTML += data;
            })
            .catch(error => {
                console.error('Erro ao carregar sidebar.html:', error);
            });
    }

    let navbar = document.getElementById('navbar');
    if (navbar) {
        fetch('/pages/components/navbar.html')
            .then(response => response.text())
            .then(data => {
                navbar.innerHTML += data;
            })
            .catch(error => {
                console.error('Erro ao carregar navbar.html:', error);
            });
    }

    let sidebarStyle = document.createElement('link');
    sidebarStyle.rel = 'stylesheet';
    sidebarStyle.href = '/pages/components/sidebar.css';
    document.head.appendChild(sidebarStyle);

    let navbarStyle = document.createElement('link');
    navbarStyle.rel = 'stylesheet';
    navbarStyle.href = '/pages/components/navbar.css';
    document.head.appendChild(navbarStyle);

    let bootstrapIcons = document.createElement('link');
    bootstrapIcons.rel = 'stylesheet';
    bootstrapIcons.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css';
    document.head.appendChild(bootstrapIcons);
});
