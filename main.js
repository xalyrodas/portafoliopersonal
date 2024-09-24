import { navBarDiv } from "./components/navBar/navBar.js";
let DOM  = document.querySelector("#root");




let navBar = document.createElement('section');
navBar.className = "nav-bar";
navBar.innerHTML= "hola mundo soy navBar";
navBar.appendChild(navBarDiv);
DOM.appendChild(navBar);

let proyect = document.createElement('section');
proyect.classList = "proyect";
proyect.appendChild(proyectos);
DOM.appendChild(proyect);b