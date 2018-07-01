window.laboratoria = {};
window.getData = async () => {
  const url = 'https://raw.githubusercontent.com/Vicky2813/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
  const promiseData = await fetch(url);
  laboratoria = await promiseData.json();
}

window.computeGenerationsStats = (event) => {
  console.log(event.target.innerHTML);
  const generation = event.target.innerHTML;
  const estudiantes = laboratoria[keySede].generacion[generation].estudantes;
  console.log(estudiantes);

  estudantes.forEach(estudiante => {
    console.log(estudiante.nombre);
  })
};


window.computeStudentsStats = () => {
};

window.sortStudents = () => {};
window.filterStudents = () => {};
