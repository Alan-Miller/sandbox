export const getStarWars = function() {
  return fetch('http://swapi.co/api/people')
  .then(res => res.json());
}







// export const getStarWars = function() {
//   return fetch('http://swapi.co/api/people')
//   .then(res => res.json());
// }
