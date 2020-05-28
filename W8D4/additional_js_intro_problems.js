/**
 * TODO Phase I: Callbacks
 * Write a function titleize that takes an array of names and a function
 * (callback).
 * titleize should use Array.prototype.map to create a new array full of
 * titleized versions of each name -
 *   titleize meaning "Roger" should be made to read
 *   "Mx. Roger Jingleheimer Schmidt".
 * Then pass this new array of names to the callback, which should use
 * Array.prototype.forEach to print out each titleized name.
 */

console.log('Phase 1: Callbacks\n');

function titleize(names, cb) {
  names = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);

  cb(names);
}

function printCallBack(arr) {
  arr.forEach(ele => console.log(ele));
}

console.log('titleize results:\n');
titleize(['Mary', 'Brian', 'Leo'], printCallBack);
console.log("\n\n");

/**
 * TODO Phase II: Constructors, Prototypes, and this
 * First write a constructor function for an elephant.
 * Each elephant should have a name, height (in inches), and array of tricks in
 * gerund form (e.g. "painting a picture" rather than "paint a picture").
 * 
 * Next write a few prototype functions that will be shared among all elephants:
    * Elephant.prototype.trumpet:
    *   should print "(name) the elephant goes 'phrRRRRRRRRRRR!!!!!!!'"
    * Elephant.prototype.grow:
    *   should increase the elephant's height by 12 inches
    * Elephant.prototype.addTrick(trick):
    *   add a new trick to their existing repertoire
    * Elephant.prototype.play:
    *   print out a random trick, e.g. "(name) is (trick)!"
      * Hint: look up some JS Math methods!
 */

 console.log('Phase 2: Constructors, Prototypes, and this\n');

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} goes phrRRRRRRRRRRR!!!!!!!'`);
}

Elephant.prototype.grow = function() {
  this.height += 12;
}

Elephant.prototype.add_trick = function(newTrick) {
  this.tricks.push(newTrick);
  return 'newTrick';
}

Elephant.prototype.play = function() {
  let trickInd = Math.floor(Math.random() * Math.floor(this.tricks.length));
  let trick = this.tricks[trickInd];
  console.log(`${this.name} is ${trick}!`);
}

let dumbo = new Elephant('Dumbo', 36, ['flying in the air', 'dancing in circles']);
console.log('Dumbo:', dumbo, '\n');

console.log('Invoking the trumpet method on Dumbo:');
dumbo.trumpet();

dumbo.grow();
dumbo.add_trick('eating peanuts');
console.log('\nDumbo after growing and adding a new trick:', dumbo, '\n');

console.log('Invoking the play method 3 times on Dumbo:');
dumbo.play();
dumbo.play();
dumbo.play();
console.log('\n\n');

/**
 * TODO Phase III: Function Invocation
 * Let's create a function called paradeHelper that we'll use to have an
 * elephant parade.
 * It should take a single elephant as an argument;
 * this way, we can pass it as a callback to forEach when called on our herd.
 * Make sure to store it as a property on the Elephant object.
 * You can populate it with any console.log statement to build your parade
 * (e.g. "___ is trotting by!" OR "___ is parading by!").
 */

console.log('Phase III: Function Invocation\n');

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
}

console.log('Invoking Elephant.paradehelper as a callback:\n')
herd.forEach(Elephant.paradeHelper);
console.log('\n\n');

/**
 * TODO Phase IV: Closures
 * Let's make a function dinerBreakfast.
 * Ultimately, we want it to return an anonymous closure, which we will
 * be able to use to keep adding breakfast foods to our initial order.
 */

 console.log('Phase IV: Closures\n')

function dinerBreakfast() {
  let order = "I'd like to order please."
  console.log(order);

  return function addItems(items) {
    if (order === "I'd like to order please.") {
      order = `${order.slice(0, -8)} ${items} please.`;
    } else if (order.includes(', and ')) {
      order = order.replace(', and ', ', ');
      order = `${order.slice(0, -8)}, and ${items} please.`;
    } else if (order.includes(' and ')) {
      order = order.replace(' and ', ', ');
      order = `${order.slice(0, -8)}, and ${items} please.`;
    } else {
      order = `${order.slice(0, -8)} and ${items} please.`;
    }

    console.log(order);
  }
}
// order.match(/\w*\sand\s.*\splease/g)

console.log('Initial empty order:')
let bfastOrder = dinerBreakfast();

console.log('\nAdding to the order:')
bfastOrder('chocalate chip pancakes');
bfastOrder('corned beef hash');
bfastOrder('biscuits and gravy');
bfastOrder('country fried steak');