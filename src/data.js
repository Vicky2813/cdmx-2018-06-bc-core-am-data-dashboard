window.laboratoria = {};
window.computeStudentsStats = () => {};
window.computeGenerationsStats = () => {};
window.sortStudents = () => {};
window.filterStudents = () => {};


const getData = async () => {
  const url = 'https://raw.githubusercontent.com/Vicky2813/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
  const promiseData = await fetch(url);
  laboratoria = await promiseData.json();
}

getData();
