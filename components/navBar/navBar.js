let navBarDiv = document.createElement('div');
navBarDiv.className = "nav-bar-div";

// Logo e h2
let imgLogo = document.createElement('img');
imgLogo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdsQDoTu_QAK3V2Fz_0tC0YDb2KaYVseFrRQ&s";
imgLogo.className = "img-logo";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "alyson";
navBarDiv.appendChild(h2);

// Tarjeta 1 - Color Púrpura
let div1 = document.createElement('div');
div1.className = 'card-div';

let colorBox1 = document.createElement('div');
colorBox1.className = 'color-box';
colorBox1.style.backgroundColor = "purple";

let name1 = document.createElement('span');
name1.className = 'card-name';
name1.innerText = "Nombre Herramienta";

div1.appendChild(colorBox1);
div1.appendChild(name1);
navBarDiv.appendChild(div1);

// Tarjeta 2 - Color Teal
let div2 = document.createElement('div');
div2.className = 'card-div';

let colorBox2 = document.createElement('div');
colorBox2.className = 'color-box';
colorBox2.style.backgroundColor = "teal";

let name2 = document.createElement('span');
name2.className = 'card-name';
name2.innerText = "Nombre Herramienta";

div2.appendChild(colorBox2);
div2.appendChild(name2);
navBarDiv.appendChild(div2);

// Tarjeta 3 - Color Naranja
let div3 = document.createElement('div');
div3.className = 'card-div';

let colorBox3 = document.createElement('div');
colorBox3.className = 'color-box';
colorBox3.style.backgroundColor = "orange";

let name3 = document.createElement('span');
name3.className = 'card-name';
name3.innerText = "Nombre Herramienta";

div3.appendChild(colorBox3);
div3.appendChild(name3);
navBarDiv.appendChild(div3);

// Tarjeta 4 - Color Verde
let div4 = document.createElement('div');
div4.className = 'card-div';

let colorBox4 = document.createElement('div');
colorBox4.className = 'color-box';
colorBox4.style.backgroundColor = "green";

let name4 = document.createElement('span');
name4.className = 'card-name';
name4.innerText = "Nombre Herramienta";

div4.appendChild(colorBox4);
div4.appendChild(name4);
navBarDiv.appendChild(div4);

// Tarjeta 5 - Color Rojo
let div5 = document.createElement('div');
div5.className = 'card-div';

let colorBox5 = document.createElement('div');
colorBox5.className = 'color-box';
colorBox5.style.backgroundColor = "red";

let name5 = document.createElement('span');
name5.className = 'card-name';
name5.innerText = "Nombre Herramienta";

div5.appendChild(colorBox5);
div5.appendChild(name5);
navBarDiv.appendChild(div5);

// Tarjeta 6 - Color Negro
let div6 = document.createElement('div');
div6.className = 'card-div';

let colorBox6 = document.createElement('div');
colorBox6.className = 'color-box';
colorBox6.style.backgroundColor = "black";

let name6 = document.createElement('span');
name6.className = 'card-name';
name6.innerText = "Nombre Herramienta";

div6.appendChild(colorBox6);
div6.appendChild(name6);
navBarDiv.appendChild(div6);

// Crear el contenedor del formulario
let contactDiv = document.createElement('div');
contactDiv.className = "contact-div";

// Título del formulario
let contactTitle = document.createElement('h2');
contactTitle.innerText = "Contactar";
contactDiv.appendChild(contactTitle);

// Crear el campo de entrada para el nombre
let nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.className = "input-field";
contactDiv.appendChild(nameInput);

// Crear el campo de entrada para el correo electrónico
let emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.className = "input-field";
contactDiv.appendChild(emailInput);

// Crear el campo de entrada para el mensaje
let messageInput = document.createElement('textarea');
messageInput.className = "textarea-field";
contactDiv.appendChild(messageInput);

// Botón de enviar
let submitButton = document.createElement('button');
submitButton.innerText = "Enviar";
submitButton.className = "submit-button";
contactDiv.appendChild(submitButton);

// Añadir el formulario al navBarDiv
navBarDiv.appendChild(contactDiv);


export {navBarDiv};
