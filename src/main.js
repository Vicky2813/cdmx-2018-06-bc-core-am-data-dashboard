// LISTA DE SEDES
let headquarters;

//GENERACIONES
let generaciones;

// SEDE INDEX
let keySede;

// FONDO LABORATORIA
const backgroundLaboratoria = document.getElementById('background-laboratoria')

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

//REFERENCIA AL ELEMENTO ESTUDIANTE
const ulStudents = document.getElementById('students');

const containerStudents = document.getElementById('students-container')

// TABLA DE DATOS DE ESTUDIANTE
let tableDataStudents = document.getElementById('data-students')

// EVENTO PARA SEDE DE LIMA
headquartersLima.addEventListener('click', (event) => {
  event.preventDefault();//evitar que recargue la pagina

  // APAGAR FONDO
  backgroundLaboratoria.style.display = 'none'
  ulGeneraciones.innerHTML = '';
  keySede = 'lima';
  containerStudents.style.display = 'none'
  h2Sede.innerHTML = event.target.text.toUpperCase();
  //console.log(event.target.text);

  const generaciones = Object.keys(laboratoria[keySede].generacion);
  console.log(generaciones);

  generaciones.forEach(e => {
    let li = document.createElement('li');
    li.innerHTML = `${e.toUpperCase()}`
    li.className = 'generation';//se le asigna una class al li
    li.onclick = computeStudentsStats;//cuando das click se ejecute esta funcion
    ulGeneraciones.appendChild(li);//
  })
})

// EVENTO PARA SEDE DE CDMX
headquartersMexico.addEventListener('click', (event) => {
  event.preventDefault();
  // APAGAR FONDO
  backgroundLaboratoria.style.display = 'none'
  ulGeneraciones.innerHTML = '';
  keySede = 'mexico';
  console.log(event.target.text);

  h2Sede.innerHTML = event.target.text
  containerStudents.style.display = 'none'
  const generaciones = Object.keys(laboratoria[keySede].generacion);
  console.log(generaciones);

  generaciones.forEach(e => {
    let li = document.createElement('li')
    li.innerHTML = `${e.toUpperCase()}`
    li.className = 'generation';//se le asigna una class al li
    li.onclick = computeStudentsStats;//cuando das click se ejecute esta funcion
    ulGeneraciones.appendChild(li);//
  })
})
// EVENTO PARA SEDE DE SANTIAGO
headquartersSantiago.addEventListener('click', (event) => {
  event.preventDefault();
  // APAGAR FONDO
  backgroundLaboratoria.style.display = 'none'
  ulGeneraciones.innerHTML = '';
  keySede = 'santiago';
  console.log(event.target.text);
  containerStudents.style.display = 'none'
  h2Sede.innerHTML = event.target.text;
  const generaciones = Object.keys(laboratoria[keySede].generacion);
  console.log(generaciones);

  generaciones.forEach(e => {
    let li = document.createElement('li')
    li.innerHTML = `${e.toUpperCase()}`
    li.className = 'generation';//se le asigna una class al li
    li.onclick = computeStudentsStats;//cuando das click se ejecute esta funcion
    ulGeneraciones.appendChild(li);//
  })
})
