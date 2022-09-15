const peliculas = [  
  {
      nombre: "Breaking Bad",
      genero: "Acción/Comedia",
      img: "./img/Dark.jpg",
      año: "2021",
      trailer: "https://youtu.be/Pj0wz7zu3Ms",
  },
  {
      nombre: "The Good Doctor",
      genero: "Acción/Aventura",
      img: "./img/1.png",
      año: "2017",
      trailer: "https://youtu.be/sfPWvYKKAJ4",

  },
  {
      nombre: "La Casa de Papel",
      genero: "Acción/Ciencia Ficción",
      img: "./img/1.png",
      año: "2021",
      trailer: "https://youtu.be/qjnvX44LoQw",
  },
  {
      nombre: "Lucifer",
      genero: "Acción/Aventura/Fantasía",
      img: "./img/1.png",
      año: "2021",
      trailer: "https://youtu.be/v1EkoQV4g5c",
  },
  {
      nombre: "Lupin",
      genero: "Aventura/Ciencia Ficción",
      img: "./img/1.png",
      año: "2021",
      trailer: "https://youtu.be/TTgk_iT8Uts",
  },
  {
      nombre: "Peaky Blinders",
      genero: "Guerra/Drama",
      img: "./img/1.png",
      año: "2019",
      trailer: "https://youtu.be/SBc69RKIqwg",
  },
  {
      nombre: "Sense8",
      genero: "Acción/Fantasía",
      img: "./img/1.png",
      año: "2021",
      trailer: "https://youtu.be/BD77EOU8N3o",
  },
  {
    nombre: "The100",
    genero: "Acción/Fantasía",
    img: "./img/1.png",
    año: "2006",
    trailer: "https://youtu.be/36mnx8dBbGE",
},
{
  nombre: "The Umbrella Academy",
  genero: "Acción/Aventura",
  img: "./img/1.png",
  año: "2008",
  trailer: "https://youtu.be/EXeTwQWrcwY",
},
{
  nombre: "The Witcher",
  genero: "Acción/Fantasía",
  img: "./img/1.png",
  año: "2018",
  trailer: "https://youtu.be/XR7Ev14vUh8",
},
{
  nombre: "Control Z",
  genero: "Acción/Fantasía/Aventura",
  img: "./img/1.png",
  año: "2018",
  trailer: "https://youtu.be/u9Mv98Gr5pY",
},
{
  nombre: "The Vampirie Diaries",
  genero: "Acción/Fantasía/Aventura",
  img: "./img/1.png",
  año: "2003",
  trailer: "https://youtu.be/r5X-hFf6Bwo",
},
{
  nombre: "Vikingos",
  genero: "Guerra/Drama/Acción",
  img: "./img/1.png",
  año: "1998",
  trailer: "https://youtu.be/yU6IjZPQ8cQ",
},
{
  nombre: "The Walking Dead",
  genero: "Ciencia ficción/Aventura",
  img: "./img/1.png",
  año: "2014",
  trailer: "https://youtu.be/UDVtMYqUAyw",
},

];


console.log(peliculas);

///ejecutador de funciones
document.getElementById("icono").addEventListener("click", mostra_buscador);
document.getElementById("buscador").addEventListener("click", ocultar_buscador);
//declarando variables
const buscador = document.getElementById("buscador");
const portada = document.getElementById("portada");
const input = document.getElementById("buscar");


//funcion mostrar

function mostra_buscador(){
  buscador.style.top="10.1%";
  // buscador.style.top="17.8%";
  portada.style.display="block";
  input.focus();
}

//fincion ocultar

function ocultar_buscador(){
  buscador.style.top="-16.6%";
  portada.style.display="none";
  input.value = "";
}


//buscador de contenido

const inputs = document.getElementById("buscar");
const resultado = document.getElementById("peliculas");
const movies = document.getElementById("movies");
const filtro = () => {
  resultado.innerHTML = "";
  const texto = inputs.value.toUpperCase();
  for (let pelicula of peliculas) {
      let nombre = pelicula.nombre.toUpperCase();
      if (nombre.indexOf(texto) !== -1) {
          resultado.innerHTML += `
          <div class="movie-card">

          <div class="card-head">
            <img src="${pelicula.img}" alt="" class="card-img">

            <div class="card-overlay">

              <div class="bookmark">
              <i class="bi bi-bookmarks"></i>
              </div>

              <div class="rating">
              <i class="bi bi-star"></i>
                <span>8.0</span>
              </div>

              <div class="play">
                <a href="${pelicula.trailer}" target="_blank"><i class="bi bi-collection-play"></i></a>
              </div>

            </div>
          </div>

          <div class="card-body">
            <h3 class="card-title">${pelicula.nombre}</h3>

              <div class="card-info">
                <span class="genre">${pelicula.genero}</span>
                <span class="year">${pelicula.año}</span>
              </div>
            </div>

        </div>

          `;
      }
  }
  if (resultado.innerHTML === "") {
      resultado.innerHTML += `
      <div class="error">
          <h3>Pelicula no fue encontrada</h3>
      </div>
          `;
  }
};

buscador.addEventListener("click", filtro);
input.addEventListener("keyup", filtro);
filtro();
