const cronometro = document.getElementById(`cronometro`);
const botonIniciar = document.getElementById(`btnIniciar`);
const botonPausar = document.getElementById(`btnPausar`);
const botonReset = document.getElementById(`btnReset`);
let contadorSegundos = 0;
let contadorMinutos = 0;
let contadorHoras = 0;
botonPausar.disabled = true;
botonDetener.disabled = true;

function cronometrar() {
  setInterval(() => {
    if (contadorSegundos < 60) {
      contadorSegundos++;
    } else if (contadorMinutos < 60) {
      contadorMinutos++;
      contadorSegundos = 0;
    } else {
      contadorHoras++;
      contadorMinutos = 0;
    }

    if(contadorSegundos < 10){
        cronometro.innerHTML = `0${contadorHoras} : 0${contadorMinutos} : 0${contadorSegundos}`;
    } else {
        cronometro.innerHTML = `0${contadorHoras} : 0${contadorMinutos} : ${contadorSegundos}`
    }
  });
}
