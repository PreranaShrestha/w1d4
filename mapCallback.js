var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


function map(array, callback) {
  var mapArray = [];
  array.forEach(function(element){
  mapArray.push(callback(element));
  });
  console.log(mapArray);
}