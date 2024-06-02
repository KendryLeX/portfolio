let menuVisible = false;

//Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    var nav = document.getElementById('nav');
    nav.classList.toggle('active');
    menuVisible = !menuVisible;
}

function seleccionar() {
    var nav = document.getElementById('nav');
    nav.classList.remove('active');
    menuVisible = false;
}

function ajustarMenu() {
    var nav = document.getElementById('nav');
    if (window.innerWidth <= 768) {
        nav.classList.remove('active');
        menuVisible = false;
    } else {
        nav.classList.add('active');
        menuVisible = true;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var navResponsive = document.querySelector('.nav-responsive');
    if (navResponsive) {
        navResponsive.addEventListener('click', mostrarOcultarMenu);
    }

    var navItems = document.querySelectorAll('.nav-list a');
    navItems.forEach(function(item) {
        item.addEventListener('click', seleccionar);
    });

    ajustarMenu(); // Ajusta el menú al cargar la página
});

window.addEventListener('resize', ajustarMenu); // Ajusta el menú al redimensionar la ventana

// Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById('skills');
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName('progreso');
        habilidades[0].classList.add('sql');
        habilidades[1].classList.add('pentaho');
        habilidades[2].classList.add('tableau');
        habilidades[3].classList.add('powerbi');
        habilidades[4].classList.add('python');
        habilidades[5].classList.add('excel');
        habilidades[6].classList.add('comunicacion');
        habilidades[7].classList.add('gestion');
        habilidades[8].classList.add('pensamiento');
        habilidades[9].classList.add('creatividad');
        habilidades[10].classList.add('liderazgo');
        habilidades[11].classList.add('analisis');
    }
}

// Detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
};

// Seleccionar todos los iconos de intereses
const interesIcons = document.querySelectorAll('.interes i');
interesIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.add('click-animation');
        setTimeout(() => {
            icon.classList.remove('click-animation');
        }, 600);
    });
});

const list = document.querySelectorAll('.nav-list li');
const activeBar = document.querySelector('.active-bar');
const sections = document.querySelectorAll('section');

function updateActiveBar() {
    const activeItem = document.querySelector('.nav-list li.active');
    if (activeItem) {
        const offsetLeft = activeItem.offsetLeft;
        const offsetWidth = activeItem.offsetWidth;
        requestAnimationFrame(() => {
            activeBar.style.width = `${offsetWidth}px`;
            activeBar.style.transform = `translateX(${offsetLeft}px)`;
        });
    }
}

list.forEach((item) => {
    item.addEventListener('click', function (e) {
        list.forEach((li) => li.classList.remove('active'));
        e.currentTarget.classList.add('active');
        updateActiveBar();
    });
});

window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
        const target = document.querySelector(`a[href="${hash}"]`).parentElement;
        list.forEach((li) => li.classList.remove('active'));
        target.classList.add('active');
    }
    ajustarMenu(); // Ajusta el menú al cargar la página
    updateActiveBar();
});

window.addEventListener('resize', updateActiveBar);

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    list.forEach(li => {
        li.classList.remove('active');
        if (li.querySelector('a').getAttribute('href').includes(current)) {
            li.classList.add('active');
            updateActiveBar();
        }
    });
});
