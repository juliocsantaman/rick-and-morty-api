let character = document.getElementById("character");
let nameP = document.getElementById("name");
let id = document.getElementById("id");
let created = document.getElementById("created");
let img = document.getElementById("img");
let status = document.getElementById("status");
let species = document.getElementById("species");
let gender = document.getElementById("gender");
let origin = document.getElementById("origin");
let lastLocation = document.getElementById("last-location");
let objDate = new Date();
let date = objDate.getFullYear();
console.log(date);

fetch("https://rickandmortyapi.com/api/character")
.then(function(response) {
  return response.json();
}).then(function(json) {
  //console.log(json);
  console.log(json.results[0]);
  let created = json.results[0].created.split("-");

  img.src = json.results[0].image;
  nameP.innerHTML = `<h3>${json.results[0].name}</h3>`;
  id.innerHTML = `id: ${json.results[0].id} - created ${date - created[0]} years ago`;
  status.innerHTML = `STATUS: <span class="name-res"> ${json.results[0].status} </span>`;
  species.innerHTML = `SPECIES: <span class="species-res"> ${json.results[0].species} </span>`;
  gender.innerHTML = `GENDER: <span class="gender-res"> ${json.results[0].gender} </span>`;
  origin.innerHTML = `ORIGIN: <span class="origin-res"> ${json.results[0].origin.name} </span>`;
  lastLocation.innerHTML = `LAST LOCATION: <span class="last-location-res"> ${json.results[0].location.name} </span>`;
});

