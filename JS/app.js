const cronometro = document.getElementById(`cronometro`);
const botonIniciar = document.getElementById(`btnIniciar`);
const botonPausar = document.getElementById(`btnPausar`);
const botonReset = document.getElementById(`btnReset`);
let contadorSegundos = 0;
let contadorMinutos = 0;
let contadorHoras = 0;
let setIntervalCronometrar;
botonPausar.disabled = true;
botonReset.disabled = true;

function cronometrar() {
  setIntervalCronometrar = setInterval(() => {
    contadorSegundos++;
    if (contadorSegundos >= 60) {
      contadorMinutos++;
      contadorSegundos = 0;
      if (contadorMinutos >= 60) {
        contadorHoras++;
        contadorMinutos = 0;
      }
    }

    if (contadorHoras < 10) {
      if (contadorMinutos < 10) {
        if (contadorSegundos < 10) {
          cronometro.innerHTML = `0${contadorHoras} : 0${contadorMinutos} : 0${contadorSegundos}`;
        } else {
          cronometro.innerHTML = `0${contadorHoras} : 0${contadorMinutos} : ${contadorSegundos}`;
        }
      } else {
        if (contadorSegundos < 10) {
          cronometro.innerHTML = `0${contadorHoras} : ${contadorMinutos} : 0${contadorSegundos}`;
        } else {
          cronometro.innerHTML = `0${contadorHoras} : ${contadorMinutos} : ${contadorSegundos}`;
        }
      }
    } else {
      if (contadorMinutos < 10) {
        if (contadorSegundos < 10) {
          cronometro.innerHTML = `${contadorHoras} : 0${contadorMinutos} : 0${contadorSegundos}`;
        } else {
          cronometro.innerHTML = `0${contadorHoras} : 0${contadorMinutos} : ${contadorSegundos}`;
        }
      } else {
        if (contadorSegundos < 10) {
          cronometro.innerHTML = `${contadorHoras} : ${contadorMinutos} : 0${contadorSegundos}`;
        } else {
          cronometro.innerHTML = `${contadorHoras} : ${contadorMinutos} : ${contadorSegundos}`;
        }
      }
    }
  }, 1000);
}

botonIniciar.addEventListener("click", () => {
  botonIniciar.disabled = true;
  botonPausar.disabled = false;
  botonReset.disabled = false;
  cronometrar();
});

botonPausar.addEventListener("click", () => {
  if (botonPausar.innerHTML === "Reanudar") {
    cronometrar();
    botonPausar.innerHTML = `Pausar`;
  } else {
    clearInterval(setIntervalCronometrar);
    botonPausar.innerHTML = "Reanudar";
  }
});

botonReset.addEventListener("click", () => {
  botonIniciar.disabled = false;
  botonPausar.disabled = true;
  botonReset.disabled = true;
  clearInterval(setIntervalCronometrar);
  cronometro.innerHTML = `00 : 00 : 00`;
  contadorHoras = 0;
  contadorMinutos = 0;
  contadorSegundos = 0;
  botonPausar.innerHTML = `Pausar`;
});
