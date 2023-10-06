'use strict';
/////////////////...........
// a function that is called only once and never used again in program, that is it dissappears after one time execution.

const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce();

// Immediety invoked funcion expression
// IIFE

(function () {
  const isPrivate = 23;
  console.log(`This will never run again`);
})(); // this function wound in round brackets and is called instanteously and can never be called again

// console.log(isPrivate);  // error: bcoz isPrivate variable is encapsulated in the local scope of function only , not to the global scope.

// with arrow function
(() => console.log(`This function is also never called `))();

{
  const isPrivate1 = 2323;
  var nonPrivate = 46;
}
// console.log(isPrivate1); // siPrivate1 is inside the code block , therefore local scope , and it is throughing error when called globally

console.log(nonPrivate);
