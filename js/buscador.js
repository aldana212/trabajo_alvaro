const peliculas = [  
  {
      nombre: "Vikingos",
      genero: "Acción/drama",
      img: "./img/Vikingos.png",
      año: "2013",
      trailer: "https://www.youtube.com/watch?v=ah1B1eZfvz0",
  },
  {
      nombre: "Casa de papel",
      genero: "Drama/Crimen",
      img: "./img/casaPapel.jpg",
      año: "2017",
      trailer: "https://www.youtube.com/watch?v=3y-6iaveY6c",

  },
  {
      nombre: "Stranger Things",
      genero: "Terror/Drama",
      img: "./img/StrangerThings.jpg",
      año: "2016",
      trailer: "https://www.youtube.com/watch?v=x7Yq9MJUqjY",
  },
  {
      nombre: "Peaky Blinders",
      genero: "Crimen/Drama",
      img: "./img/peakyBlinders.jpg",
      año: "2013",
      trailer: "https://www.youtube.com/watch?v=ZHZG6UArE3I",
  },
  {
      nombre: "Los Bridgerton",
      genero: "Cine Romantico",
      img: "./img/losBridgerton.jpg",
      año: "2020",
      trailer: "https://www.youtube.com/watch?v=AdBweWvuG68",
  },
  {
      nombre: "Los 100",
      genero: "Ciencias Ficcion/Drama",
      img: "./img/los100.jpg",
      año: "2014",
      trailer: "https://www.youtube.com/watch?v=2NUnsXkcX4E",
  },
  {
      nombre: "El juego del calamar",
      genero: "Supervivencia",
      img: "./img/Eljuegodelcalamar.jpg",
      año: "2021",
      trailer: "https://www.youtube.com/watch?v=LkXmoLsDsbU",
  },
  {
    nombre: "Bojack Horseman",
    genero: "Comedia",
    img: "./img/BoJackHorseman.jpg",
    año: "2014",
    trailer: "https://www.youtube.com/watch?v=i1eJMig5Ik4",
},
{
  nombre: "Dark",
  genero: "Misterio/Sobrenatural",
  img: "./img/Dark.jpg",
  año: "2017",
  trailer: "https://www.youtube.com/watch?v=z2wPBG-GSJ0",
},
///
{
  nombre: "End Game",
  genero: "Acción/Fantasía",
  img: "./img/endgame.jpg",
  año: "2019",
  trailer: "https://youtu.be/znk2OICHbjY",
},
{
  nombre: "Chicken Little",
  genero: "Infantil/Aventura",
  img: "./img/chickenlittle.jpg",
  año: "2005",
  trailer: "https://youtu.be/lr1vBnZ15rc",
},
{
  nombre: "12 horas para sobrevivir",
  genero: "Acción/Terror",
  img: "./img/12horas.jfif",
  año: "2014",
  trailer: "https://youtu.be/6FRmOZbPPXI",
},
{
  nombre: "Broly",
  genero: "Anime/Acción",
  img: "./img/broly.jfif",
  año: "2018",
  trailer: "https://youtu.be/dl3w10VVQj8",
},
{
  nombre: "Triple Frontera",
  genero: "Suspenso/Crimen",
  img: "./img/triplefrontera.jpg",
  año: "2019",
  trailer: "https://youtu.be/85shyxfLqQ0",
},
{
  nombre: "Nadie",
  genero: "Suspenso/Drama",
  img: "./img/Nadie.jpg",
  año: "2021",
  trailer: "https://youtu.be/SNFcflvJ90M",
},
{
  nombre: "Muñeco Diabolico",
  genero: "Accion",
  img: "./img/MuñecoDiabolico.jpg",
  año: "1988",
  trailer: "https://youtu.be/SV3pX4CUdcM",
},
{
  nombre: "Son como niños",
  genero: "Comedia/Buddy",
  img: "./img/Soncomoniños.jpg",
  año: "2010",
  trailer: "https://youtu.be/yMEDiKD7cyE",
},
{
  nombre: "Gigantes de acero",
  genero: "Accion/Drama",
  img: "./img/Gigantesdeacero.jpg",
  año: "2011",
  trailer: "https://youtu.be/4xrGpuF9pT0",
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
  // buscador.style.top="10.1%";
  buscador.style.top="17.8%";
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
  if(texto){
  for (let pelicula of peliculas) {
      let nombre = pelicula.nombre.toUpperCase();
      if (nombre.indexOf(texto) !== -1) {
          resultado.innerHTML += `
        <div class="movie-card">
          <div class="movi">
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
      </div>

          `;
      }
  }
  if (resultado.innerHTML === "") {
      resultado.innerHTML += `
      <div class="error">
          <i class="bi bi-emoji-dizzy"></i>
          <h3>No se encontro ${texto}</h3>
      </div>
          `;
   }
  } //
};

buscador.addEventListener("click", filtro);
input.addEventListener("keyup", filtro);
// filtro();
