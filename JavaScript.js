// Variables del NAV
const Home = document.getElementById("Home");
const Products = document.getElementById("Products");
const Service = document.getElementById("Service");
const AboutUs = document.getElementById("AboutUs");

const NavX = document.getElementById("NavX");
const NavShow = document.getElementById("NavShow");

let SubService = document.getElementById("SubService")

const NAV = document.getElementById("NAV");
let isColapsado = true;


// Función para alternar el colapso del menú
function activarColapso() {
    if (isColapsado) {
        NAV.style.height = NAV.scrollHeight + "px";
        NAV.addEventListener("transitionend", function expand() {
            NAV.style.height = "auto";
            NAV.removeEventListener("transitionend", expand);
        });
    } else {
        NAV.style.height = NAV.scrollHeight + "px";
        NAV.offsetHeight;
        NAV.style.height = "0px";
    }
    isColapsado = !isColapsado;
}


// Botón NavX para contraer el menú
NavX.addEventListener("click", () => {
    if (isColapsado) {
        activarColapso();
        NavX.classList.add("hidden");
        NavShow.classList.remove("hidden");
    }
});


// Botón NavShow para expandir el menú
NavShow.addEventListener("click", () => {
    if (!isColapsado) {
        activarColapso();
        NavShow.classList.add("hidden");
        NavX.classList.remove("hidden");
    }
});


// Botón Service para expandir y contraer los submenus
Service.addEventListener("click", ()=>{
    if (SubService.classList.contains("hidden")){
        SubService.classList.remove("hidden");
        SubService.classList.add("visibility");
    } else if(SubService.classList.contains("visibility")){
        SubService.classList.remove("visibility");
        SubService.classList.add("hidden");
    }else{
        console.log("Error");
    }
})


// Ajuste del menú basado en el tamaño de la pantalla
window.addEventListener("resize", () => {
    const isDesktop = window.innerWidth >= 768;
    if (isDesktop) {
        NAV.style.height = "auto";
        NavX.classList.add("hidden");
        NavShow.classList.add("hidden");
        isColapsado = false;
    } else {
        NAV.style.height = isColapsado ? "0px" : NAV.scrollHeight + "px";
        NavX.classList.toggle("hidden", !isColapsado);
        NavShow.classList.toggle("hidden", isColapsado);
    }
});

// Configuración inicial
window.dispatchEvent(new Event("resize"));