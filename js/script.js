var hora = document.getElementById("hora");
var fecha = document.getElementById("fecha");
var rayas = document.getElementsByClassName("rayas");
var tipo_meridiano;
var funcionamiento_reloj;
var meridiano = false;

window.onload = function () {
  funcionamiento_reloj = setInterval(function () {
    generar_rayas();

    var reloj = new Date();

    if (meridiano == true) {
      horas = reloj.getHours() > 12 ? reloj.getHours() - 12 : reloj.getHours();
      tipo_meridiano = tipo_meridiano = reloj.getHours() > 12 ? "PM" : "AM";
    } else {
      horas = reloj.getHours();
      tipo_meridiano = "24H";
    }

    // if (reloj.getMinutes() == 0 && reloj.getSeconds() == 0) {
    //   actualiza();
    // }

    var separador = reloj.getSeconds() % 2 == 0 ? ":" : " ";

    hora.value =
      digito(reloj.getHours()) +
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

function cambio_tipo_meridiano(option) {
  meridiano = option;
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

function actualiza() {
  location.reload();
}
