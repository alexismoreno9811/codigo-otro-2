/* La funcionalidad del código es crear una lista de invitados y visualizarla en dicha pagina mediante la maniulación del DOMo */

let formulario = document.querySelector(".formulario") /* Se modificaron todas las variables tipo var a let para considerar las buenas practicas y dentro del queryselector
se considero a la calse formulario y no a el #form que señalaba un id que no existe */

formulario.onsubmit = function (event) { /* Cambiar el nombre de la variable de entrada y en donde se usa para que no cause un error con otra que se llama igual */

  event.preventDefault(); // Se completo el metodo preventDefault para evitar que limpie la consola y borre los datos escritos en el formulario

  let n = formulario.elements[0];/* punto y coma donde hace falta para tener una buena practica */
  let e = formulario.elements[1];
  let na = formulario.elements[2];

  let nombre = n.value;
  let edad = e.value;

  let i = na.selectedIndex;
  let nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  else if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }
  else {/* colocar las condiciones como else if para descartar las anteriores es mejor que repetir condiciones que ya fueron resueltas en anteriores if */
    agregarInvitado(nombre, edad, nacionalidad);
  }
}

function agregarInvitado(nombre, edad, nacionalidad) {

  switch (nacionalidad) { // se coloco un switch case en lugar de un if para una mejor comprension de lo que se hace
    case "ar":
      nacionalidad = "Argentina";
      break;
    case "mx":
      nacionalidad = "Mexicana";
      break;
    case "per":
      nacionalidad = "Peruana";
      break;
    case "vnzl":
      nacionalidad = "Venezolana";
      break;
  }

  let lista = document.getElementById("lista-de-invitados");

  let elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");/* Se modifico la funcion added por add */
  lista.appendChild(elementoLista);

  crearElemento("Nombre", nombre, elementoLista);
  crearElemento("Edad", edad, elementoLista);
  crearElemento("Nacionalidad", nacionalidad, elementoLista);
  crearBoton(elementoLista);
  /* Se quito el duplicado del boton eliminar */
}

function crearElemento(descripcion, valor, elementoLista) {
  let spanNombre = document.createElement("span");
  let inputNombre = document.createElement("input");
  let espacio = document.createElement("br");
  spanNombre.textContent = descripcion + ": ";
  inputNombre.value = valor;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);
}

function crearBoton(elementoLista) { // Se creo una función para crear un boton con el que se pueda borrar el invitado
  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  let corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);
}