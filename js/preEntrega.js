var btnEntrar = document.createElement("button");
var btnSalir = document.createElement("button");

btnEntrar.innerHTML = "Entrar";
btnSalir.innerHTML = "Salir";
btnEntrar.style.height = "80vh";
btnEntrar.style.width = "45vw";
btnSalir.style.height = "80vh";
btnSalir.style.width = "45vw";

btnEntrar.addEventListener("click", function () {
  //aqui va la acción al hacer clic en el boton Entrar
});

// Agregar los botones al documento
document.body.appendChild(btnEntrar);
document.body.appendChild(btnSalir);

// Convertir los arrays en una cadena de texto en formato JSON
var registradosJSON = JSON.stringify(registrados);
var diaJSON = JSON.stringify(dia);

// Guardar los datos en el LocalStorage
localStorage.setItem("registrados", registradosJSON);
localStorage.setItem("dia", diaJSON);

btnSalir.addEventListener("click", function () {
  // Crear un formulario para pedir la cedula

  var formCedula = document.createElement("form");
  var inputCedula = document.createElement("input");
  
  inputCedula.setAttribute("type", "text");
  inputCedula.setAttribute("placeholder", "Ingresa tu cedula");

  var btnEnviar = document.createElement("button");
  btnEnviar.innerHTML = "Enviar";

  formCedula.appendChild(inputCedula);
  formCedula.appendChild(btnEnviar);
  document.body.appendChild(formCedula);
  btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    var cedula = inputCedula.value;

    // Recuperar el hora actual
    var fecha = new Date();
    var hora = fecha.getHours() + ":" + fecha.getMinutes();
    // busca al estudiante en el array dia
    for (var i = 0; i < dia.length; i++) {
      if (dia[i].cedula == cedula) {
        dia[i].salida = hora;
      }
    }
    // Guarda los datos
    localStorage.setItem("dia", JSON.stringify(dia));
    alert("Muchas gracias por tu visita. Te esperamos nuevamente!");
    formCedula.remove();
  });
});
