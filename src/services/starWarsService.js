import axios from 'axios';

export function getStarWars() {
  return axios.get('http://swapi.co/api/people')
  .then(res => res.data.results)
}


// export const getStarWars = function() {
//   return fetch('http://swapi.co/api/people')
//   .then(res => res.json());
// }
