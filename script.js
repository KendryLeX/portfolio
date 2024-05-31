let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("sql");
        habilidades[1].classList.add("pentaho");
        habilidades[2].classList.add("tableau");
        habilidades[3].classList.add("powerbi");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("excel");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("gestion");
        habilidades[8].classList.add("pensamiento");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("liderazgo");
        habilidades[11].classList.add("analisis");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

// Seleccionar todos los iconos de intereses
const interesIcons = document.querySelectorAll('.interes i');

// Añadir un event listener para cada icono
interesIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Añadir la clase de animación
        icon.classList.add('click-animation');
        // Eliminar la clase de animación después de que termine para poder reutilizarla
        setTimeout(() => {
            icon.classList.remove('click-animation');
        }, 600); // Duración de la animación
    });
});
