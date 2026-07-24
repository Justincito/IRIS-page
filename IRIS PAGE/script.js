// Función para cambiar de pestaña interactiva (Sistema A vs Sistema B)
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    // Ocultar todo el contenido de las pestañas
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Quitar la clase "active" de todos los botones de pestañas
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Mostrar la pestaña actual y agregar la clase "active" al botón presionado
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}