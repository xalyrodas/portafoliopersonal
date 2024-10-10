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


function item(nombre,descripcion, webGIT, gitgub,stack,){
    let div = document.createElement('div');
    div.className = "div-item";

    let a = document.createElement('a');
    a.className = "link-github-page";
    a.href = "https://github.com/xalyrodas/Hospital";
    a.innerText = "Hospital"
    div.appendChild(a);

    let stacks = document.createElement('div');
    stacks.innerText = "[js, css, html]";
    div.appendChild(stacks);

    let btnGithub = document.createElement('a');
    btnGithub.className = "btn-github";
    btnGithub.href = "https://github.com/xalyrodas/proyecto-formularios";
    btnGithub.innerHTML = "Github";
    div.appendChild(btnGithub);
     

    let btnDescargas = document.createElement('a'); // Cambiado a 'a' para hacer un enlace descargable
    btnDescargas.className = "btn-gitdescargas";
    btnDescargas.href = "componentes/jr/Hospital.jr"; // Reemplaza con la ruta de tu archivo .jr
    btnDescargas.download = "Hospital.jr";
    let img = document.createElement('img');
    img.src = "https://1.bp.blogspot.com/-V0x545DaXJg/XsQ1PxzEUQI/AAAAAAAAXEI/aWn4oE6R7rgR9nKuIMJrBczowa-c6-cDwCK4BGAsYHg/w1200-h630-p-k-no-nu/532.png"; // Reemplaza esta ruta con la URL de tu imagen
    
    btnDescargas.appendChild(img);
    div.appendChild(btnDescargas);
    return div;

}


export{ proyectos};