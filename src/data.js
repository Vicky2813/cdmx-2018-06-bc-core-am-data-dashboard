// ASEGURAR QUE AL CARGAR LA PAGINA TENGA LOS DATOS DE INICION
// DOMContentLoaded es un evento
document.addEventListener('DOMContentLoaded', ()=>{
  getData();
}, false);

window.laboratoria = {};
window.getData = () => {
  const url = 'https://api.myjson.com/bins/u2aqe';
  fetch(url)
    .then(promiseData => promiseData.json())
    .then(data => {
      laboratoria = data;
      // OBTENGO EL ARRAY DE KEYS CORRESPONDIENTE A LAS SEDES
      headquarters = Object.keys(laboratoria);
    })
  // TEXTO QUE IMPRIME EL ERROR
    .catch(err => console.log('Error', err.message));
};

window.computeGenerationsStats = (event) => {

};


window.computeStudentsStats = () => {
  console.log(event.target.innerHTML);
  ulStudents.innerHTML = '';
  tableDataStudents.innerHTML = '';
  containerStudents.style.display = 'block';
  const generation = event.target.innerHTML.toLowerCase();
  const estudiantes = laboratoria[keySede].generacion[generation].estudiantes;
  console.log(estudiantes);

  estudiantes.forEach((estudiante, index) => {
    // PARA CREAR LA LISTA
    const liStudent = document.createElement('li');
    liStudent.innerHTML = `${index + 1} - ${estudiante.nombre} </br> <i class="fas fa-percent"> de completitud: </i>  ${estudiante.progreso.porcentajeCompletado}`;
    liStudent.className = 'list-group-item';
    ulStudents.appendChild(liStudent);

    // PARA CREAR LA TABLA
    const tr = document.createElement('tr');
    const thIndex = document.createElement('th');
    thIndex.innerHTML = index + 1;
    tr.appendChild(thIndex);
    const tdName = document.createElement('td');
    tdName.innerHTML = estudiante.nombre;
    tr.appendChild(tdName);
    const tdEmail = document.createElement('td');
    tdEmail.innerHTML = estudiante.correo;
    tr.appendChild(tdEmail);
    const tdCampus = document.createElement('td');
    tdCampus.innerHTML = keySede;
    tr.appendChild(tdCampus);
    const tdGeneration = document.createElement('td');
    tdGeneration.innerHTML = generation;
    tr.appendChild(tdGeneration);
    const tdDuration = document.createElement('td');
    tdDuration.innerHTML = estudiante.progreso.duracionPrograma;
    tr.appendChild(tdDuration);
    const tdScored = document.createElement('td');
    tdScored.innerHTML = estudiante.progreso.porcentajeCompletado;
    tr.appendChild(tdScored);

    tableDataStudents.appendChild(tr);
  });
};

window.sortStudents = () => {};
window.filterStudents = () => {};
