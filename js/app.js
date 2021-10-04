// Referencias contador
let contador = 0;
let contadormin = 0;

// Referencias Botones
let btnMas = document.querySelector(".aumentar");
let btnMen = document.querySelector(".disminuir");
let btnRun = document.querySelector(".empezar");

// Referencias Display
var lblMin = document.querySelector("#lblMin");
var lblSeg = document.querySelector("#lblSeg");

// Declaración de constantes
const MIN = 0;
const MAX = 3599;

// Temporizador
let timer;

// Tiempo Operacion
let tmp;

btnMas.addEventListener("click", function () {
  // Obtener Valores
  let min = lblMin.innerText * 1;
  let seg = lblSeg.innerText * 1;
  tmp = min * 60 + seg;

  // Actualizar Valores
  tmp = tmp < MAX ? tmp + 1 : tmp;

  // Disgregar Valores
  min = Math.floor(tmp / 60);
  seg = tmp - min * 60;

  // Establecer Valores
  lblMin.innerText = min < 10 ? "0" + min : min;
  lblSeg.innerText = seg < 10 ? "0" + seg : seg;
});

btnMen.addEventListener("click", function () {
  // Obtener Valores
  let min = lblMin.innerText * 1;
  let seg = lblSeg.innerText * 1;
  tmp = min * 60 + seg;

  // Actualizar Valores
  tmp = tmp > MIN ? tmp - 1 : tmp;

  // Disgregar Valores
  min = Math.floor(tmp / 60);
  seg = tmp - min * 60;

  // Establecer Valores
  lblMin.innerText = min < 10 ? "0" + min : min;
  lblSeg.innerText = seg < 10 ? "0" + seg : seg;
});

btnRun.addEventListener("click", function () {
  // Obtener Valores
  let min = lblMin.innerText * 1;
  let seg = lblSeg.innerText * 1;
  tmp = min * 60 + seg;

  // Temporizador Regresivo
  timer = setInterval(() => {
    if (tmp > 0) {
      // Retrocede
      console.log(tmp);
      tmp--;

      // Disgregar Valores
      min = Math.floor(tmp / 60);
      seg = tmp - min * 60;

      // Establecer Valores
      lblMin.innerText = min < 10 ? "0" + min : min;
      lblSeg.innerText = seg < 10 ? "0" + seg : seg;

      // Bloquear botón Run
      btnRun.removeEventListener("click", eliminar());
    } else {
      clearInterval(timer);
    }
  }, 1000);
});
