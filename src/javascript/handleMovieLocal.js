var peliculas = {

    0: {
        "titulo": "Hola",
        "director": "Todd Philips",
        "sinopsis": `La pasión de Arthur Fleck,
        un hombre ignorado por la
        sociedad, es hacer reír a la
        gente. Sin embargo, una
        serie de trágicos sucesos 
        harán que su visión del
        mundo se distorsione
        considerablemente
        convirtiéndolo en un
        brillante criminal.`,
        "url": "joker-poster 2.png"
    },
    1: {
        "titulo": "chao",
        "director": "Todd Philips",
        "sinopsis": `Hola`,
        "url": "poster-dedicada.jpg"
    },
    2: {
        "titulo": "Doctor Sueño",
        "director": "Todd Philips",
        "sinopsis": `Hola`,
        "url": "poster-doctor.jpg"
    },
    3: {
        "titulo": "pdg",
        "director": "Todd Philips",
        "sinopsis": `La pasión de Arthur Fleck,
        un hombre ignorado por la
        sociedad, es hacer reír a la
        gente. Sin embargo, una
        serie de trágicos sucesos 
        harán que su visión del
        mundo se distorsione
        considerablemente
        convirtiéndolo en un
        brillante criminal.`,
        "url": "poster-malefica.jpg"
    },
    4: {
        "titulo": "losk",
        "director": "Todd Philips",
        "sinopsis": `Hola`,
        "url": "poster-terminator.jpg"
    }


};

var moiveExport ={
    0: {
        "titulo": "Holis amiguis",
        "director": "Todd Philips",
        "sinopsis": `La pasión de Arthur Fleck,
        un hombre ignorado por la
        sociedad, es hacer reír a la
        gente. Sin embargo, una
        serie de trágicos sucesos 
        harán que su visión del
        mundo se distorsione
        considerablemente
        convirtiéndolo en un
        brillante criminal.`,
        "url": "joker-poster 2.png"
    }
}

//saco del local storage
var index = localStorage?localStorage.getItem("index"):0;

var tituloL = document.querySelector(".titleMovie");
var directorL = document.querySelector(".directorMovie");
var repartoL = document.querySelector(".castingMovie");
var sinopsisL = document.querySelector(".sinopsisMovie");
var ulrImage = document.querySelector(".imagePoster");


function local(tituloC, directorC, sinopsisC, urlC) {
    console.log(ulrImage);
    tituloL.innerText = tituloC;
    directorL.innerHTML = directorC;
    sinopsisL.innerHTML = sinopsisC;
    ulrImage.src = "./src/data/" +urlC;
    console.log("./src/data/"+urlC);

}

console.log(peliculas[index].url);
local(peliculas[index].titulo, peliculas[index].director, peliculas[index].sinopsis, peliculas[index].url);



