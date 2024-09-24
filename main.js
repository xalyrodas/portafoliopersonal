import { navBarDiv } from "./components/navBar/navBar.js";
import { proyectos } from "./components/proyect/project.js";
let DOM  = document.querySelector("#root");




let navBar = document.createElement('section');
navBar.className = "nav-bar";
navBar.appendChild(navBarDiv);
DOM.appendChild(navBar);

let proyect = document.createElement('section');
proyect.classList = "proyect";
proyect.appendChild(proyectos());

DOM.appendChild(proyect);