function findWaldo(arr, found) {
  arr.forEach(function(item, ind) {
    if(item === "Waldo") {
      found(ind);
    }
  });

}

function actionWhenFound(i) {
  console.log("Found him at index " + i + "!\"");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);