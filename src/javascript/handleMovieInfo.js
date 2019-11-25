var asientos = localStorage?localStorage.getItem("asientos"):0;
var horario = localStorage?localStorage.getItem("horario"):0;

var asientosD = document.querySelector(".asientos");
var horarioD = document.querySelector("horario");
console.log(horario);

function poner(asientos,horario){
    asientosD.innerHTML= asientos;
    horarioD.innerHTML= horario;
}

poner(asientos,horario);
