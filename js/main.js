let estudiantes = []
let estudiante = {nombreCompleto:"", cedula:"",institucion:""}


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
