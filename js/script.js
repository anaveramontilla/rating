//Función para inicializar
function iniciar() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById("R" + i).style.display = "none";
    }
    document.getElementById("mensaje").textContent = "¡Valórame!";
}

//Función para mostrar corazones rellenos
function mostrarRelleno(i) {
    document.getElementById("B" + i).style.display = "none";
    document.getElementById("R" + i).style.display = "inline-block";
    document.getElementById("body").style.backgroundColor = "#fff1f1";
    document.getElementById("R" + i).style.animation = "efectoRebote 0.3s ease";
}

//Función para mostrar corazones con solo borde
function mostrarBorde(i) {
    document.getElementById("B" + i).style.display = "inline-block";
    document.getElementById("R" + i).style.display = "none";
    document.getElementById("body").style.backgroundColor = "#fff1f1";
}

//Función para el control de niveles
function nivel(posicion) {
    var mensajes = ["No me gusta", "No me gusta mucho", "Me gusta", "Me gusta mucho", "¡Me encanta!"];

    for (let i = 1; i <= 5; i++) {
        if (i <= posicion) {
            mostrarRelleno(i);
        } else {
            mostrarBorde(i);
        }
    }
    document.getElementById("mensaje").textContent = mensajes[posicion-1];
    document.getElementById("mensaje").style.color = "red";
}

//Función evento click
function clic() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById("B" + i).addEventListener("click", function() {
            nivel(i);
        });
        document.getElementById("R" + i).addEventListener("click", function() {
            nivel(i);
        });
    }
}

//Reseteo corazones
function reset() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById("B" + i).style.display = "inline-block";
        document.getElementById("B" + i).style.color = "";
        document.getElementById("R" + i).style.display = "none";
        document.getElementById("body").style.backgroundColor = "";
        document.getElementById("mensaje").textContent = "¡Valórame!";
        document.getElementById("mensaje").style.color = "";
    }
}

//Función control clicar fuera para resetear
function controlFuera() {
    var ignorarClick = document.getElementById("rating");
    document.addEventListener("click", function (event) {
        var clickDentro = ignorarClick.contains(event.target);
        if (!clickDentro) {
            reset();
        }
    });
}

document.addEventListener("DOMContentLoaded", clic, false);
document.addEventListener("DOMContentLoaded", iniciar, false);
document.addEventListener("DOMContentLoaded", controlFuera, false);