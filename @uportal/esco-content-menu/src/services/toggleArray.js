export default function toggleArray(array, value) {
  const index = array.indexOf(value);
  if (index > -1) {
    array.splice(index, 1);
    return array;
  } else {
    return array.concat(value);
  }
}
