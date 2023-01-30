//array de estudiantes como ejemplo para el registro
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
// array del select para seleccionar en el registro
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
function Botones() {
  //crea dos elementos de botón
  this.botonEntrar = document.createElement("button");
  this.botonSalir = document.createElement("button");
  this.botonEntrar.setAttribute("id","entrada");
  this.botonSalir.setAttribute("id","salida");
  this.botonEntrar.innerHTML = "Entrada";
  this.botonSalir.innerHTML = "Salida";
paso1.appendChild(this.botonEntrar);
paso1.appendChild(this.botonSalir);
}


var misBotones = new Botones2();
function ingresoFing(botonEntrar,botonSalir){
  if(botonEntrar){
    document.write("<button>Ingresar</button>");
    document.write("<button>Registrarse</button>");
  } else if(botonSalir){
    document.write("<form>");
    document.write("Número de cédula: <input type='text' name='cedula'>");
    document.write("<br><br>");
    document.write("<button>Enviar</button>");
    document.write("</form>");
  }
}


//registro del estudiante
const registrarse = document.querySelector("#registrarse"),
NombreCompleto = document.querySelector("#NombreCompleto"),
cedula = document.querySelector("#cedula"),
institucion = document.querySelector('#institucion');
//guarda los valores ingresados en el formulario//
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