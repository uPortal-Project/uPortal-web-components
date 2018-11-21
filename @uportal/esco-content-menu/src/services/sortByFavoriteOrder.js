export default function(array) {
  return function(a, b) {
    return array.indexOf(a.fname) - array.indexOf(b.fname);
  };
}
