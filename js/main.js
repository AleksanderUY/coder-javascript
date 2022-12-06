alert("Le damos la bienvenida al sistema de ingreso de la Fing");
let si = "si";
let no = "no";
// se le pregunta al estudiante si esta registrado
let registro = prompt("Estas registrado?");
if (si === "si") {
  let cedula = prompt("Ingresa tu cedula sin puntos ni guiones");
  if (cedula == "") {
    alert("No ingresaste tu cedula");
    let cedula = prompt("Ingresa tu cedula sin puntos ni guiones");
  }
}
// si el usuario digita no pasa a rellenar los datos.
if (no === "no") {
  alert("registrarte por favor para ingresar");
  if (no) {
    let nombre = prompt("Ingresa tu nombre");
    if (nombre == "") {
      alert("No ingresaste ningun nombre");
      let nombre = prompt("Ingresa tu nombre");
    }
  }

  let apellido = prompt("Ingresa tu apellido");
  if (apellido == "") {
    alert("No ingresaste ningun apellido");
    let apellido = prompt("Ingresa tu apellido");
  }

  let cedula = prompt("Ingresa tu cedula sin puntos ni guiones");
  if (cedula == "") {
    alert("No ingresaste tu cedula");
    let cedula = prompt("Ingresa tu cedula sin puntos ni guiones");
  }
  function ingreso() {
    alert("ya puedes ingresar  " + apellido);
  }
  ingreso();
}
