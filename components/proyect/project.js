function proyectos(){
    let section = document.createElement('section');
    section.appendChild(header());
    section.appendChild(item());
    section.className = 'section';

    return section;

}

function header(){
    let div = document.createElement('div');
    div.className = 'header';

    let h2 = document.createElement('h2');
    h2.innerHTML = "Proyectos";
    div.appendChild(h2);

    let btn = document.createElement('div');
    btn.innerHTML = 'GitHub';
    div.appendChild(btn);

    return div;

}

function item(){
    let div = document.createElement('div');
    div.innerText = "item de Lista ";

    return div;

}


export{ proyectos};