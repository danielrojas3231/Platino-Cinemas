var horario = document.querySelectorAll(".horario");


console.log(horario);


for (let index = 0; index < horario.length; index++) {

    horario[index].addEventListener("click", function() {
        var horario2 = document.querySelector(".horario-selected");
        horario[index].classList.replace("horario","horario-selected");
        horario2.classList.replace("horario-selected","horario");
        horario2 = document.querySelector(".horario-selected");

        localStorage.setItem("horario", horario2.innerHTML);
        

       
    });
}
