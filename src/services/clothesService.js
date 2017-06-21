export const getClothes = function() {
  return fetch('https://practiceapi.devmountain.com/products')
  .then(res => res.json());
}
