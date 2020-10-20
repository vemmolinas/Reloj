var meridiano = false;
var hora = document.getElementById("hora");
var fecha = document.getElementById("fecha");
var rayas = document.getElementsByClassName("rayas");
var tipo_meridiano;
var funcionamiento_reloj;

window.onload = function () {
  funcionamiento_reloj = setInterval(function () {
    generar_rayas();

    var reloj = new Date();

    if (meridiano == true) {
      horas = reloj.getHours() > 12 ? reloj.getHours() - 12 : reloj.getHours();
      tipo_meridiano = reloj.getHours() > 12 ? "PM" : "AM";
    } else {
      horas = reloj.getHours();
      tipo_meridiano = "24H";
    }

    console.log(reloj.getMinutes());

    var separador = reloj.getSeconds() % 2 == 0 ? ":" : " ";

    hora.value =
      digito(horas) +
      separador +
      digito(reloj.getMinutes()) +
      separador +
      digito(reloj.getSeconds());

    fecha.value =
      tipo_meridiano +
      "   " +
      reloj.getDate() +
      "/" +
      (reloj.getMonth() + 1) +
      "/" +
      reloj.getFullYear();
  }, 1000);
};

function cambio_tipo_meridiano() {
  if (meridiano == false) {
    meridiano = true;
    document.getElementById("boton_meridiano").innerHTML = ">- 24 H -<";
  } else {
    meridiano = false;
    document.getElementById("boton_meridiano").innerHTML = "> AM - PM <";
  }
}

function digito(valor) {
  return valor < 10 ? "0" + valor : valor.toString();
}

function generar_rayas() {
  for (var j = 0; j < rayas.length; j++) {
    rayas[j].innerHTML = " ";
  }

  for (var j = 0; j < rayas.length; j++) {
    total_rayas = Math.floor(Math.random() * 29) + 1;
    for (var i = 0; i <= total_rayas; i++) {
      rayas[j].innerHTML += " __ <br/>";
    }
  }
}
