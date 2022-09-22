class manga  {
    constructor(id,Titulo,Imagen,descripcion,precio,){
        this.id = id;
        this.Titulo = Titulo;
        this.Imagen = Imagen;
        this.descripcion = descripcion;
        this.precio = precio
    }
}

const manga1 = new manga("1","Bleach","./imagenes/bleach.webp","La serie narra las aventuras de un adolescente llamado Ichigo Kurosaki, un estudiante de quince años que tiene la habilidad de interactuar con los espíritus.","1350$");

const manga2 = new manga("2","Demon Slayer","./imagenes/demon slayer.webp","Demon Slayer se ubica en un mundo donde los demonios y sus cazadores tienen ciertos roles y actúan de acuerdo a reglas ya establecidas. Por fortuna nos adentramos en este mundo al mismo tiempo que el protagonista, así que junto a él vamos descubriendo la complejidad del mundo en esta historia.","750$");

const manga3 = new manga("3","Evangelion","./imagenes/evangelionmanga.webp","Evangelion es una serie “de robots” donde los robots enemigos son lo menos importante pero que a la vez hacen avanzar la trama.","900$");

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
       <h3>${manga.id}</h3>
       <p>Descripcion: ${manga.descripcion}</p>
       <br>
       <p>Precio: ${manga.precio}</p>
       `;
       mangaContainer.append(divmangacontainer);
       const botonCompra = crearBotonComprar(manga)
       divmangacontainer.append(botonCompra);
       mangaContainer.appendChild(divmangacontainer);
    })
} 



function comprarManga(e) {
    
    const id = document.getElementById("id").value;
    const Titulo = document.getElementById("Titulo").value;
    const Imagen = document.getElementById("Imagen").value;
    const descripcion = document.getElementById("descripcion").value;
    const precio = document.getElementById("precio").value;

    const manga = new manga(id,Titulo,Imagen,descripcion,precio);
    const mangasEnLocaLStorage = JSON.parse(localStorage.getItem(mangas));

 if (mangasEnLocaLStorage == null) {
    localStorage.setItem(mangas, JSON.stringify([manga]));
    mostrarMangas([manga]);
 }else {
    mangasEnLocaLStorage.push(manga);
    localStorage.setItem(mangas, JSON.stringify(mangasEnLocaLStorage));
    mostrarMangas(mangasEnLocaLStorage);
 }
 e.target.reset();
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