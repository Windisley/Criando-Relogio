let horas = document.querySelector("#boxhoras p")
let minutos = document.querySelector("#boxminutos p")
let segundos = document.querySelector("#boxsegundos p")


const relogio = () => {
  let classdata = new Date();
  horas.innerHTML = formatarnumero(classdata.getHours())
  minutos.innerHTML = formatarnumero(classdata.getMinutes())
  segundos.innerHTML = formatarnumero(classdata.getSeconds())
};

function formatarnumero(numero) {
  return numero < 10 ? "0" + numero : numero
}

setInterval(relogio, 999)