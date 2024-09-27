import { header } from "../header/header.js";
import { dataProyectos } from "../../data/data.js";


function proyectos(){
    let section = document.createElement('section');
    section.className = 'section';
    section.appendChild(header());
    section.appendChild(ListaProyectos());

    return section;
}

function ListaProyectos(){
    let div = document.createElement('div');
    div.className = "Lista-proyectos";

    dataProyectos.forEach((proyecto) => {
        div.appendChild(item(proyecto.nombre, proyecto.descripcion, proyecto.webGIT, proyecto.gitgub, proyecto.stack))
    });
    return div;
}


function item(nombre, webGIT, gitgub,stack){
    let div = document.createElement('div');
    div.className = "div-item";

    let a = document.createElement('a');
    a.className = "link-github-page";
    a.href = "https://xalyrodas.github.io/proyecto-formularios/";
    a.innerText = "Formulario"
    div.appendChild(a);

    let stacks = document.createElement('div');
    stacks.innerText = "[js, css, html]";
    div.appendChild(stacks);

    let btnGithub = document.createElement('a');
    btnGithub.className = "btn-github";
    btnGithub.href = "https://github.com/xalyrodas/proyecto-formularios";
    btnGithub.innerHTML = "Github";
    div.appendChild(btnGithub);

    return div;

}


export{ proyectos};