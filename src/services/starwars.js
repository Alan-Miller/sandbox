import axios from 'axios';

export const getPeople = function() {
  return axios.get('http://swapi.co/api/people/')
  .then((res) => {
    console.log(res.data.results);
    return res.data.results;
  });
}


// export const getLuke = function() {
//   return fetch('http://swapi.co/api/people/1').then(res => res.json());
// }

// export const getLuke = function() {
//   return http({
//     method: 'GET'
//     ,url: 'http://swapi.co/api/people/1'
//   })
// }
