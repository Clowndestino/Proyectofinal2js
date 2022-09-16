class manga  {
    constructor(Titulo,Imagen,descripcion,){
        this.Titulo = Titulo;
        this.Imagen = Imagen;
        this.descripcion = descripcion;
    }
}

const manga1 = new manga("Bleach","./imagenes/bleach.webp","La serie narra las aventuras de un adolescente llamado Ichigo Kurosaki, un estudiante de quince años que tiene la habilidad de interactuar con los espíritus.");

const manga2 = new manga("Demon Slayer","./imagenes/demon slayer.webp","Demon Slayer se ubica en un mundo donde los demonios y sus cazadores tienen ciertos roles y actúan de acuerdo a reglas ya establecidas. Por fortuna nos adentramos en este mundo al mismo tiempo que el protagonista, así que junto a él vamos descubriendo la complejidad del mundo en esta historia.");

const manga3 = new manga("Evangelion","./imagenes/evangelionmanga.webp","Evangelion es una serie “de robots” donde los robots enemigos son lo menos importante pero que a la vez hacen avanzar la trama.");

const mangas = []

mangas.push(manga1);
mangas.push(manga2);
mangas.push(manga3);

function mostrarMangas(mangas) {
    const mangaContainer = document.getElementById("manga container");
    mangaContainer.innerHTML = "";
    mangas.forEach( manga => {
       const divmangacontainer = document.createElement("div");
       divmangacontainer.classList.add("manga");
       divmangacontainer.innerHTML = `
       <img src="${manga.Imagen}" alt="${manga.Titulo}">
       <h2>${manga.Titulo}</h2>
       <p>Descripcion: ${manga.descripcion}</p>
       `;
       mangaContainer.append(divmangacontainer);
       const botonCompra = crearBotonComprar(manga)
       divmangacontainer.append(botonCompra);
       mangaContainer.appendChild(divmangacontainer);
    })
} 


function crearBotonComprar(manga) {
    const buttom = document.createElement("button");
    buttom.innerText = "Comprar";
    buttom.addEventListener("click", () => {
        comprarManga(manga);
    })
    return buttom;
}

mostrarMangas(mangas);