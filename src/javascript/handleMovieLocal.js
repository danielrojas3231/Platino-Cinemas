var peliculas = {

    0: {
        "titulo": "joker",
        "director": "Todd Philips",
        "reparto": `Joaquin Phoenix
        Robert De Niro
        Zazie Beetz
        Bill Camp
        Frances Conroy
        Brett Cullen`,
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
        "titulo": "Dedicada a mi ex",
        "director": "Jorge Ulloa",
        "reparto": `Raúl Santana, Nataly Valencia,
        Biassini Segura, Carlos Alcántara,
        Luis Arturo Villa "Luisito Comunica",
        Luis Fernando Flores "Fernanfloo",
        Ivan Marín`,
        "sinopsis": `Después de que su novia lo deja, Ariel
        está dispuesto a todo para recuperarla.
        Incluso si eso significa participar en un
        concurso de música para ganar 10,000
        dólares e ir por ella. ¿El problema? No
        tiene ningún talento. Pero el amor
        todo lo puede y con ayuda de su mejor
        amigo, Ariel logra juntar una banda de
        desadaptados. Ahora tendrán que
        competir contra bandas que si tienen
        talento y su plan maestro no será tan
        fácil después de todo.`,
        "url": "poster-dedicada.jpg"
    },
    2: {
        "titulo": "Doctor Sueño",
        "director": "Mike Flanagan",
        "reparto": `Rebecca Ferguson, Ewan McGregor,
        Zahn McClarnon, Alex Essoe.`,
        "sinopsis": `Secuela del film de culto "El resplandor" (1980)
        dirigido por Stanley Kubrick y también basado en una famosa
        novela de Stephen King. La historia transcurre algunos años
        después de los acontecimientos de "The Shining", y sigue a
        Danny Torrance (Ewan McGregor), traumatizado y con problemas
        de ira y alcoholismo que hacen eco de los problemas de su padre
        Jack, que cuando sus habilidades psíquicas resurgen, se
        contacta con una niña de nombre Abra Stone, a quien debe
        rescatar de un grupo de viajeros que se alimentan de los
        niños que poseen el don de "el resplandor" `,
        "url": "poster-doctor.jpg"
    },
    3: {
        "titulo": "Terminator: Dark Fate",
        "director": "Tim Miller",
        "reparto": `MacKenzie Davis, Natalia Reyes,
        Linda Hamilton, Diego Boneta,
        Arnold Schwarzenegger, Gabriel Luna.`,
        "sinopsis": `Han pasado más de dos décadas desde que Sarah Connor
        evitó el Juicio Final, cambió el futuro y reescribió el destino
        de la raza humana. Dani Ramos (Natalia Reyes) vive de manera
        sencilla en México con su hermano (Diego Boneta) y su padre,
        cuando un nuevo Terminator, letal y tecnológicamente avanzado
        —un Rev-9 (Gabriel Luna)— viaja a través del tiempo para cazarla
        y matarla. La supervivencia de Dani dependerá de que sume fuerzas
        con dos guerreras: Grace (Mackenzie Davis), una mejorada súper-soldado
        del futuro, y una aguerrida Sarah Connor (Linda Hamilton). Mientras
        el Rev-9 destruye de forma despiadada todo y a todos los que se
        crucen en su camino para poder cazar a Dani, las tres serán guiadas
        hasta un T-800 (Arnold Schwarzenegger) perteneciente al pasado de
        Sarah, que bien podría ser su mejor y última esperanza.`,
        
        "url": "poster-terminator.jpg"
    },
    4: {
        "titulo": "Maléfica: Dueña del Mal",
        "director": "Joachim Rønning",
        "reparto": `Elle Fanning, Juno Temple,
        Chiwetel Ejiofor, Ed Skrein,
        Angelina Jolie, Michelle Pfiffer,
        Teresa Mahoney, Harris Dickinson.`,
        "sinopsis": `En MALÉFICA: DUEÑA DEL MAL de Disney, la secuela del
        éxito de taquilla mundial de 2014, Maléfica y su ahijada Aurora
        comienzan a cuestionar los complejos lazos familiares que las unen,
        mientras son presionadas en diferentes direcciones por una boda inminente,
        aliados inesperados y nuevas fuerzas oscuras que entran en juego.`,
        "url": "poster-malefica.jpg"
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



