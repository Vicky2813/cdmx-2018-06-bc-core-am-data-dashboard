//ASEGURAR QUE AL CARGAR LA PAGINA TENGA LOS DATOS DE INICION
document.addEventListener('DOMContentLoaded', ()=>{//DOMContentLoaded es un evento
getData();
},false)

window.laboratoria = {};
window.getData = () => {
  const url = 'https://api.myjson.com/bins/u2aqe';
  fetch(url)
  .then(promiseData => promiseData.json())
  .then (data => {
    laboratoria = data;
    //OBTENGO EL ARRAY DE KEYS CORRESPONDIENTE A LAS SEDES
    headquarters = Object.keys(laboratoria);
  })
  //TEXTO QUE IMPRIME EL ERROR
  .catch(err => console.log("Error", err.message))
}

window.computeGenerationsStats = (event) => {

};


window.computeStudentsStats = () => {
  console.log(event.target.innerHTML);
  ulStudents.innerHTML = ''
  containerStudents.style.display = 'block';
  const generation = event.target.innerHTML;
  const estudiantes = laboratoria[keySede].generacion[generation].estudiantes;
  console.log(estudiantes);

  estudiantes.forEach(estudiante => {
    const liStudent = document.createElement('li')
    liStudent.innerHTML = `${estudiante.nombre}, ${estudiante.correo}, CAMPUS: ${keySede}, GENERACION: ${generation}`
    liStudent.className = 'list-group-item'
    ulStudents.appendChild(liStudent)
  })


};

window.sortStudents = () => {};
window.filterStudents = () => {};
