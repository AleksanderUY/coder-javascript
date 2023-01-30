
//################################################################################
//eventos de JS

/* para agregar eventos a los botones debemos:
 primero agregar el ID al boton
 <button id="btnPrincipal">click</button>
 
 guardamos el boton en una variable
 let boton = 
 
 document.getElementById("btnPrincipal")
 boton.addEventListener("click", respuestaClick)
 
 function respuestaClick(){
console.log("Respuesta a evento") 
}*/
//################################################################################

//agregar title a traves de JS
//document.title = "Control de ingreso a Fing"

//################################################################################

//este evento puede ser usado para buscar un servicio ya que value lo podemos reutilizar.
/* btnSearch.addEventListener('click', ()=>{
  console.log(input[0].value);
  tituloSecundario.innerHTML= `Hola, se registro tu ingreso ${input[0].value}`;
}) */

//#################################################################################
//mouseup
/* const caja = document.querySelector('.caja'),
pais = document.querySelector('#pais')
caja.addEventListener('mouseenter', ()=>{
   console.log("pasaste encima"); 
}) */
//###############################################################################3

// array para iterar

const instituciones = [
  "Ingenieria",
  "C.Economicas",
  "Arquitectura",
  "Medicina",
  "Agronomia",
  "Derecho",
  "Quimica",
  "Ciencias",
  "UTU",
  "Otra"
];

instituciones.forEach((institucion)=>{
  let option = pasoRegistro.createElement('option');
  option.innerText = institucion;
  option = value institucion;
  select.appendChild(option)
})

====etiqueta HTML==== se puede agregar ingenieria mejor para hacer por defecto
<option value="Default">Seleccione un pais</option>


####esto guarda el valor seleccionado en la variable pasa usar luego en un form####

select.addEventListener('change', ()=>{
  let option = select.options [select.selectedIndex].value;
  console.log(option);
})

*/

//###########################################################################################
//array de objetos estudiantes para trabajar con los registrados
const estudiantes = [
  {id:1, cedula: 4201749, NombreCompleto:"Juan Perez", institucion: "ingenieria"},
  {id:2, cedula: 3275344, NombreCompleto:"Maximiliano Adalberto", institucion: "ingenieria"},
  {id:3, cedula: 4527585, NombreCompleto:"Martina del Jordá", institucion: "Arquitectura"},
  {id:4, cedula: 3256301, NombreCompleto:"Clotilde Bárcena", institucion: "ingenieria"},
  {id:5, cedula: 5409491, NombreCompleto:"Reyna Paz", institucion: "ingenieria"},
  {id:6, cedula: 5061216, NombreCompleto:"Evaristo Clemente", institucion: "ingenieria"},
  {id:7, cedula: 5165587, NombreCompleto:"Ruth Quesada", institucion: "Ciencias"},
  {id:8, cedula: 5208020, NombreCompleto:"Jaime de Peral", institucion: "Medicina"},
  {id:9, cedula: 4010089, NombreCompleto:"Armando Araujo", institucion: "ingenieria"},
];

//###########################################################################################
//se usa comunmente para que submit no recargue la pagina
formulario.addEventListener('submit',(e)=>{
  e.preventDefault()
console.log(e.target);
console.log(e.target.children);

let mail=e.target.children[0].children[1].value
validar(mail)
console.log(e.target.children[0].children[1].value);})

//###########################################################################################
//localstorage
localStorage.setItem('bienvenido', 'bienvenidos hola')
let saludo = localStorage.getItem('bienvenida')
console.log(saludo);

//###########################################################################################
//llamo los elemtos correspondientes
const registrarse = document.querySelector("#registrarse"),
NombreCompleto = document.querySelector("#NombreCompleto"),
cedula = document.querySelector("#cedula"),
institucion = document.querySelector('#institucion');
//guardar los valores ingresados en el formulario//
  function guardar(valor) {
  let estudiante = { NombreCompleto: NombreCompleto.value cedula: cedula.value, institucion: institucion.value };
  if (estudiantes.estudiante == "" || estudiante.cedula == "") {
    p.innerText = "Rellena todos los campos.";
    return;
  } else {
    if (valor === "sessionStorage") {
      sessionStorage.setItem("item", JSON.stringify(estudiante));
    }
    if (valor === "localStorage") {
      localStorage.setItem("estudiante", JSON.stringify(estudiante));
    }
  }
  return estudiante;
}
//recuperar datos json
recuperarDatos(JSON.parse(localStorage.getItem("item")));

btnSubmit.addEventListener('click',(e)=>{
  e.preventDefault();
  if(check.checked){
      guardar("localStorage")
  }else{
    guardar("sessionStorage")
  }

})


const paso1 = document.getElementById("paso1");
const select = document.getElementById("selectInstitucion");
var misBotones = new Botones();
let estudiantes = []
let estudiante = {
  nombreCompleto:"",
  cedula:"",
  institucion:""}


function Botones() {
  // Crear dos elementos de botón
  this.botonEntrar = document.createElement("button");
  this.botonSalir = document.createElement("button");
  this.botonEntrar.setAttribute("id","entrada");
  this.botonSalir.setAttribute("id","salida");
  // Establecer el texto de los botones
  this.botonEntrar.innerHTML = "Entrada";
  this.botonSalir.innerHTML = "Salida";

  // Agregar los botones al documento
paso1.appendChild(this.botonEntrar);
paso1.appendChild(this.botonSalir);
}

// Crear una nueva instancia de la función constructora
var misBotones = new Botones();

function ingresoFing(botonEntrar,botonSalir){
  if(botonEntrar){
    //desplegar el siguiente paso que seria ingresar o registrarse
  } else if(botonSalir){
    /* desplegar el formulario de salida 
     */
  }
}

function ingresoFing(event) {
  if (event.target.id === "entrada") {
    // desplegar el siguiente paso que sería ingresar o registrarse
  } else if (event.target.id === "salida") {
    /* desplegar el formulario de salida 
     */
  }
}

//################################################################################
//eventos de JS

 //para agregar eventos a los botones debemos:
 //primero agregar el ID al boton
 <button id="btnPrincipal">click</button>
 
 guardamos el boton en una variable
 let boton = 
 
 document.getElementById("btnPrincipal")
 boton.addEventListener("click", respuestaClick)
 
 function respuestaClick(){
console.log("Respuesta a evento") 
}
//################################################################################

//agregar title a traves de JS
document.title = "Control de ingreso a Fing"

//################################################################################

//este evento puede ser usado para buscar un servicio ya que value lo podemos reutilizar.
btnSearch.addEventListener('click', ()=>{
  console.log(input[0].value);
  tituloSecundario.innerHTML= `Hola, se registro tu ingreso ${input[0].value}`;
})

//#################################################################################


// array para iterar

const instituciones = [
  "Ingenieria",
  "C.Economicas",
  "Arquitectura",
  "Medicina",
  "Agronomia",
  "Derecho",
  "Quimica",
  "Ciencias",
  "UTU",
  "Otra"
];

instituciones.forEach((institucion)=>{
  let option = pasoRegistro.createElement('option');
  option.innerText = institucion;
  option = value institucion;
  selectInstitucion.appendChild(option)
})

//####esto guarda el valor seleccionado en la variable pasa usar luego en un form####

select.addEventListener('change', ()=>{
  let option = select.options [select.selectedIndex].value;
  console.log(option);
})



//###########################################################################################
//array de objetos estudiantes para trabajar con los registrados
const estudiantes = [
  {id:1, cedula: 4201749, NombreCompleto:"Juan Perez", institucion: "ingenieria"},
  {id:2, cedula: 3275344, NombreCompleto:"Maximiliano Adalberto", institucion: "ingenieria"},
  {id:3, cedula: 4527585, NombreCompleto:"Martina del Jordá", institucion: "Arquitectura"},
  {id:4, cedula: 3256301, NombreCompleto:"Clotilde Bárcena", institucion: "ingenieria"},
  {id:5, cedula: 5409491, NombreCompleto:"Reyna Paz", institucion: "ingenieria"},
  {id:6, cedula: 5061216, NombreCompleto:"Evaristo Clemente", institucion: "ingenieria"},
  {id:7, cedula: 5165587, NombreCompleto:"Ruth Quesada", institucion: "Ciencias"},
  {id:8, cedula: 5208020, NombreCompleto:"Jaime de Peral", institucion: "Medicina"},
  {id:9, cedula: 4010089, NombreCompleto:"Armando Araujo", institucion: "ingenieria"},
];

//###########################################################################################
//se usa comunmente para que submit no recargue la pagina
formulario.addEventListener('submit',(e)=>{
  e.preventDefault()
console.log(e.target);
console.log(e.target.children);

let mail=e.target.children[0].children[1].value
validar(mail)
console.log(e.target.children[0].children[1].value);})

//###########################################################################################
//localstorage
localStorage.setItem('bienvenido', 'bienvenidos hola')
let saludo = localStorage.getItem('bienvenida')
console.log(saludo);

//###########################################################################################
//llamo los elemtos correspondientes
const btnSubmit = document.querySelector("#ingresar"),
  email = document.querySelector("#email"),
  pass = document.querySelector("#pass"),
  check = document.querySelector("#check"), 
  p = document.querySelector('#mensaje');
//guardar los valores ingresados en el formulario//
  function guardar(valor) {
  let user = { usuario: email.value, pass: pass.value };
  if (user.usuario == "" || user.pass == "") {
    p.innerText = "Los campos no deben estar vacios";
    return;
    console.log("Hola");
  } else {
    if (valor === "sessionStorage") {
      sessionStorage.setItem("item", JSON.stringify(user));
    }
    if (valor === "localStorage") {
      localStorage.setItem("item", JSON.stringify(user));
    }
  }
  return user;
}
//recuperar datos json
recuperarDatos(JSON.parse(localStorage.getItem("item")));

btnSubmit.addEventListener('click',(e)=>{
  e.preventDefault();
  if(check.checked){
      guardar("localStorage")
  }else{
    guardar("sessionStorage")
  }

})




//###########################################################################################
document.getElementById("entrada").addEventListener("click", function() {
  ingresoFing(true, false);
});

document.getElementById("salida").addEventListener("click", function() {
  ingresoFing(false, true);
});

select.addEventListener("change", function() {
  let option = select.options[select.selectedIndex].value;
  console.log(option);
});