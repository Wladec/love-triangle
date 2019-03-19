/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  let arrLenght = preferences.length;
  for (let i = 0; i < arrLenght; i++) {
    if (preferences[i] != i + 1) {
      let a = preferences[i];
      let b = preferences[a-1];
      let c = preferences[b-1];
      if (c == i + 1) count++;
    }
  }
  return (count/3);
};
