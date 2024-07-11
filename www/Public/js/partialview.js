function loadPartialView(viewName, divClass = null, isAppend = false){
    var showNavBarViews = ['home-vaca', 'profile', 'ganado',]; // Lista de vistas en las que se mostrará el nav-bar
    
    $.ajax({
        url: 'views/' + viewName + '.html',
        method: 'GET',
        success: function(data){
            if (divClass === null) {
                console.error('Elemento contenedor (divClass) no definido');
                return;
            }

            isAppend ? $(divClass).append(data) : $(divClass).html(data);
            
            // Si la vista está en la lista de vistas a mostrar, muestra el nav-bar
            if (showNavBarViews.includes(viewName)) {
                showNavBar();
            } else {
                hideNavBar();
            }
        },
        error: function(xhr, status, error) {
            console.error('Error al cargar la vista parcial:', error);
        }
    })
}

function hideNavBar() {
    var navBar = document.getElementById("navBar");
    navBar.style.display = "none";
}

function showNavBar() {
    var navBar = document.getElementById("navBar");
    navBar.style.display = "flex";
}