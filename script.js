//First we need to as the user for list of numbers separated by comma. Then use split method to convert string in to array of numbers, delating comma in process.
let arrayA = window
  .prompt("Provide list of the numbers separated by a comma")
  .split(",");
const arrayB = window
  .prompt(
    "Provide numbers to be removed from first list (separated by a comma) "
  )
  .split(",");

//In here we use for loop to cycle through elements in arrayB. Then use filter method on arrayA with conditional statement to check if any elements in both element are the same.
function arrayDiff() {
  for (i = 0; i < arrayB.length; i++) {
    arrayA = arrayA.filter((element) => {
      if (element !== arrayB[i]) {
        return true;
      } else {
        return false;
      }
    });
  }

  if (arrayA[0] === "") {
    window.alert("List is empty");
  } else {
    window.alert(arrayA);
  }
}
//And run a function. In these case is not necessary to wrap logic in function but it may look better
arrayDiff();
