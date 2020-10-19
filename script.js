var horario = false;
window.onload = function () {
  var reloj = setInterval(function () {
    var dato = new Date();
    var separador = " ";
    var meridiano = "24H";

    if (horario == true && dato.getHours() > 12) {
      hora = dato.getHours() - 12;
      meridiano = "PM";
    } else if (horario == true && dato.getHours() < 13) {
      hora = dato.getHours();
      meridiano = "AM";
    } else {
      hora = dato.getHours();
    }

    if (dato.getSeconds() == 0) {
      document.getElementById("puntos").innerHTML = " ";
    } else if (dato.getSeconds() % 2 == 0) {
      separador = ":";
    } else {
      document.getElementById("puntos").innerHTML += "  _____ <br/>";
    }

    document.getElementById("reloj").value =
      digito(hora) +
      separador +
      digito(dato.getMinutes()) +
      separador +
      digito(dato.getSeconds());
    document.getElementById("fecha").value =
      meridiano +
      "   " +
      dato.getDate() +
      "/" +
      (dato.getMonth() + 1) +
      "/" +
      dato.getFullYear();
  }, 1000);
};

function amPm() {
  if (horario == false) {
    horario = true;
    document.getElementById("meridiano").innerHTML = ">- 24 H -<";
  } else {
    horario = false;
    document.getElementById("meridiano").innerHTML = "> AM - PM <";
  }
}

function digito(valor) {
  if (valor < 10 && valor.toString().length < 2) {
    return "0" + valor;
  } else {
    return valor.toString();
  }
}
