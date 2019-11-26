var asientos = localStorage?localStorage.getItem("asientos"):0;
var horario = localStorage?localStorage.getItem("horario"):0;
var index = localStorage?localStorage.getItem("index"):0;

var PeliculasName =["Joker",
    "Dedicada a mi ex",
    "Doctor Sueño",
    "Terminator: Dark Fate",
    "Maléfica: Dueña del Mal",
]

var asientosD = document.querySelector(".asientos");
var horarioD = document.querySelector(".horario");
var nombreD = document.querySelector(".Pelicula")
console.log(horario);

function poner(asientos,horario,nombre){
    asientosD.innerHTML= asientos;
    horarioD.innerHTML= horario;
    nombreD.innerHTML= nombre;
}

poner(asientos,horario,PeliculasName[index]);
