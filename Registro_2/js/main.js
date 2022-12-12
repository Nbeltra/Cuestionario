function info() {
    let colorError = "red";
    let colorSelec = "green";
    let contador = 0;
    pulsado = document.elegir.pregunta1;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("Seleccionado").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("noSeleccionado1").style.color = colorError;
                cambio2 = document.getElementById("noSeleccionado2").style.color = colorError;
                cambio2 = document.getElementById("noSeleccionado3").style.color = colorError;

            }
            cambio = document.getElementById("Seleccionado")
            cambio.style.color = colorSelec;
        }
    }

    pulsado = document.elegir.pregunta2;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("Seleccionadop2_correcta").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("noSeleccionadop2_r1").style.color = colorError;
                cambio2 = document.getElementById("noSeleccionadop2_r2").style.color = colorError;
                cambio2 = document.getElementById("noSeleccionadop2_r3").style.color = colorError;

            }
            cambio = document.getElementById("Seleccionadop2_correcta")
            cambio.style.color = colorSelec;
        }
    }

    pulsado = document.elegir.pregunta3;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("Selecciona_correcta").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("noSelecciona_r1").style.color = colorError;
                cambio2 = document.getElementById("noSelecciona_r2").style.color = colorError;
                cambio2 = document.getElementById("noSelecciona_r3").style.color = colorError;

            }
            cambio = document.getElementById("Selecciona_correcta")
            cambio.style.color = colorSelec;
        }

    }
    pulsado = document.elegir.pregunta4;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("Selec").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("noSele1").style.color = colorError;
                cambio2 = document.getElementById("noSele2").style.color = colorError;
                cambio2 = document.getElementById("noSele3").style.color = colorError;

            }
            cambio = document.getElementById("Selec")
            cambio.style.color = colorSelec;
        }
    }


    pulsado = document.elegir.pregunta5;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("Siescorrecta").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("noeslarespuesta1").style.color = colorError;
                cambio2 = document.getElementById("noeslarespuesta2").style.color = colorError;
                cambio2 = document.getElementById("noeslarespuesta3").style.color = colorError;

            }
            cambio = document.getElementById("Siescorrecta")
            cambio.style.color = colorSelec;
        }
    }

    pulsado = document.elegir.pregunta6;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("Sip").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("nop1").style.color = colorError;
                cambio2 = document.getElementById("nop2").style.color = colorError;
                cambio2 = document.getElementById("nop3").style.color = colorError;

            }
            cambio = document.getElementById("Sip")
            cambio.style.color = colorSelec;
        }
    }

    pulsado = document.elegir.pregunta7;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("correcta").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("incorrecta1").style.color = colorError;
                cambio2 = document.getElementById("incorrecta2").style.color = colorError;
                cambio2 = document.getElementById("incorrecta3").style.color = colorError;

            }
            cambio = document.getElementById("correcta")
            cambio.style.color = colorSelec;
        }
    }
    pulsado = document.elegir.pregunta8;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("sies").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("noes1").style.color = colorError;
                cambio2 = document.getElementById("noes2").style.color = colorError;
                cambio2 = document.getElementById("noes3").style.color = colorError;

            }
            cambio = document.getElementById("sies")
            cambio.style.color = colorSelec;
        }
    }

    pulsado = document.elegir.pregunta9;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("si_es").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("no_es1").style.color = colorError;
                cambio2 = document.getElementById("no_es2").style.color = colorError;
                cambio2 = document.getElementById("no_es3").style.color = colorError;

            }
            cambio = document.getElementById("si_es")
            cambio.style.color = colorSelec;
        }
    }
    pulsado = document.elegir.pregunta10;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("suficiente").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("insuficiente1").style.color = colorError;
                cambio2 = document.getElementById("insuficiente2").style.color = colorError;
                cambio2 = document.getElementById("insuficiente3").style.color = colorError;

            }
            cambio = document.getElementById("suficiente")
            cambio.style.color = colorSelec;
        }
    }
    pulsado = document.elegir.pregunta11;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("rta.correcta").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("rtaincorrect_1").style.color = colorError;
                cambio2 = document.getElementById("rtaincorrect_2").style.color = colorError;
                cambio2 = document.getElementById("rtaincorrect_3").style.color = colorError;

            }
            cambio = document.getElementById("rta.correcta")
            cambio.style.color = colorSelec;
        }
    }
    
    pulsado = document.elegir.pregunta12;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("s_correcta").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("n_correcta1").style.color = colorError;
                cambio2 = document.getElementById("n_correcta2").style.color = colorError;
                cambio2 = document.getElementById("n_correcta3").style.color = colorError;

            }
            cambio = document.getElementById("s_correcta")
            cambio.style.color = colorSelec;
        }
    }
   
    pulsado = document.elegir.pregunta13;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("Seleccio.2").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("noSseleccionado1").style.color = colorError;
                cambio2 = document.getElementById("noSseleccionado2").style.color = colorError;
                cambio2 = document.getElementById("noSseleccionado3").style.color = colorError;

            }
            cambio = document.getElementById("Seleccio.2")
            cambio.style.color = colorSelec;
        }
    }
   
    pulsado = document.elegir.pregunta14;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("Selecci,").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("noSelecci1").style.color = colorError;
                cambio2 = document.getElementById("noSelecci2").style.color = colorError;
                cambio2 = document.getElementById("noSelecci3").style.color = colorError;

            }
            cambio = document.getElementById("Selecci,")
            cambio.style.color = colorSelec;
        }
    }
   
    pulsado = document.elegir.pregunta15;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("Seleccionado--15").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("noSeleccionado--1").style.color = colorError;
                cambio2 = document.getElementById("noSeleccionado--2").style.color = colorError;
                cambio2 = document.getElementById("noSeleccionado--3").style.color = colorError;

            }
            cambio = document.getElementById("Seleccionado--15")
            cambio.style.color = colorSelec;
        }
    }
   
    pulsado = document.elegir.pregunta16;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("si--funciona.").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("no--funciona1").style.color = colorError;
                cambio2 = document.getElementById("no--funciona2").style.color = colorError;
                cambio2 = document.getElementById("no--funciona3").style.color = colorError;

            }
            cambio = document.getElementById("si--funciona.")
            cambio.style.color = colorSelec;
        }
    }

    pulsado = document.elegir.pregunta17;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("esla.correcta").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("no_esvalida1").style.color = colorError;
                cambio2 = document.getElementById("no_esvalida2").style.color = colorError;
                cambio2 = document.getElementById("no_esvalida3").style.color = colorError;

            }
            cambio = document.getElementById("esla.correcta")
            cambio.style.color = colorSelec;
        }
    }

    pulsado = document.elegir.pregunta18;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("exito").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("falla1").style.color = colorError;
                cambio2 = document.getElementById("falla2").style.color = colorError;
                cambio2 = document.getElementById("falla3").style.color = colorError;

            }
            cambio = document.getElementById("exito")
            cambio.style.color = colorSelec;
        }
    }

    pulsado = document.elegir.pregunta19;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("Seleccionadogood").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("noSeleccionadoofail1").style.color = colorError;
                cambio2 = document.getElementById("noSeleccionadoofail2").style.color = colorError;
                cambio2 = document.getElementById("noSeleccionadoofail3").style.color = colorError;

            }
            cambio = document.getElementById("Seleccionadogood")
            cambio.style.color = colorSelec;
        }
    }

    pulsado = document.elegir.pregunta20;
    for (i = 0; i < pulsado.length; i++) {
        valor = pulsado[i].checked;
        if (valor == true) {
            elegido = pulsado[i].value;
            if (elegido == "si") {
                cambio = document.getElementById("aplica..do").style.color = colorSelec;

                contador = contador + 1
            } else if (elegido == "no") {
                cambio2 = document.getElementById("noapliica1").style.color = colorError;
                cambio2 = document.getElementById("noapliica2").style.color = colorError;
                cambio2 = document.getElementById("noapliica3").style.color = colorError;

            }
            cambio = document.getElementById("aplica..do")
            cambio.style.color = colorSelec;
        }
    }

    
    alert('Su cantidad de aciertos fueron ' + contador);
    contador = 0;

}

function limpiarForm() {
    document.getElementById("noSeleccionadop2_r1").remove();
}
