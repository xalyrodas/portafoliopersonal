let navBarDiv = document.createElement('div');
navBarDiv.className="nav-bar-div";

let imgLogo = document.createElement('img');
imgLogo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdsQDoTu_QAK3V2Fz_0tC0YDb2KaYVseFrRQ&s";
imgLogo.className = "img-logo";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "alyson";
navBarDiv.appendChild(h2);
export{navBarDiv}
