// LISTA DE SEDES
let headquarters;

//GENERACIONES
let generaciones

// SEDE INDEX
let keySede

// SEDE LIMA
const headquartersLima = document.getElementById('sede-lima');

// SEDE MEXICO
const headquartersMexico = document.getElementById('sede-cdmx');

// SEDE SANTIAGO
const headquartersSantiago = document.getElementById('sede-scl');

// REFERENCIA AL ELEMENTO SEDE
const h2Sede = document.getElementById('sede');

// REFERENCIA AL ELEMENTO GENERACIONES
const ulGeneraciones = document.getElementById('generations');

// ASEGURAR QUE AL CARGAR LA PAGINA TENGA LOS DATOS DE INICIO
window.onload = async function () {
  await getData()
  headquarters = Object.keys(laboratoria)
}

// EVENTO PARA SEDE DE LIMA
headquartersLima.addEventListener('click', (event) => {
  event.preventDefault();
  ulGeneraciones.innerHTML = '';
  const key = 'lima';
  h2Sede.innerHTML = event.target.text;
  console.log(event.target.text);

  const generaciones = Object.keys(laboratoria[key].generacion);
  console.log(generaciones);

  generaciones.forEach(e => {
    let li = document.createElement('li');
    li.innerHTML = `${e}`;
    li.className = 'generation';
    li.onclick = computeStudentsStats;
    ulGeneraciones.appendChild(li);
  })

//   for (let i = 0; i < generaciones.length; ++i) {
//     let estudiantes = laboratoria[key].generacion[generaciones[i]].estudiantes;
//     console.log(estudiantes);
//     estudiantes.forE
//     ach(e => {
//       console.log(e.nombre);
//     })
//   }
})

// EVENTO PARA SEDE DE CDMX
headquartersMexico.addEventListener('click', (event) => {
  event.preventDefault();
  ulGeneraciones.innerHTML = '';
  const key = 'mexico';
  console.log(event.target.text);

  h2Sede.innerHTML = event.target.text
  const generaciones = Object.keys(laboratoria[key].generacion);
  console.log(generaciones);

  generaciones.forEach(e => {
    let li = document.createElement('li');
    li.innerHTML = `${e}`;
    li.className = 'generation';
    li.onclick = computeStudentsStats;
    ulGeneraciones.appendChild(li);
  })
})
// EVENTO PARA SEDE DE SANTIAGO
headquartersSantiago.addEventListener('click', (event) => {
  event.preventDefault();
  ulGeneraciones.innerHTML = '';
  const key = 'santiago';
  console.log(event.target.text);

  h2Sede.innerHTML = event.target.text;
  const generaciones = Object.keys(laboratoria[key].generacion);
  console.log(generaciones);

  generaciones.forEach(e => {
    let li = document.createElement('li');
    li.innerHTML = `${e}`;
    li.className = 'generation';
    li.onclick = computeStudentsStats;
    ulGeneraciones.appendChild(li);
  })
})
