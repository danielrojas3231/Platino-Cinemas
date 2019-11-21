

    //elemento general
    const movieFrame = document.querySelectorAll('.movieFrame');

    for (let index = 0; index < movieFrame.length; index++) {
 
        movieFrame[index].addEventListener("click", function() {
            
            //guardo en el local storage
            localStorage.setItem("index", index);
            window.location.href = "compra.html";
            
           
        });
    }





    




