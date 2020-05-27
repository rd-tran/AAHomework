/* // Warm Up
function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    // Logs 'in block' because var allows redeclaration of variables
    console.log(x);
  }
  // Logs 'in block' because redeclaring a variable using var inside of a block
  // will also redeclare it outside of the block
  console.log(x);
}

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';  
    // Logs 'in block' because const allows block scope
    console.log(x);
  }
  // Logs 'out of block' because of block scope
  console.log(x);
}

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';
    // Causes an error because x has already been declared as a constant
    // And because var doesn't allow block scope
    console.log(x);
  }
  // Doesn't reach this point because of the error
  console.log(x);
}

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    // Logs 'in block' because let allows block scope
    console.log(x);
  }
  // Logs 'out of block' because of block scope
  console.log(x);
}

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    // Logs 'in block' because let allows block scope
    console.log(x);
  }
  let x = 'out of block again';
  // Causes an error because you can't reassign a variable
  console.log(x);
} */

function madLib(verb, adjective, noun) {
  sentence = `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()}${noun.toUpperCase()}`;
  return sentence;
}

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}