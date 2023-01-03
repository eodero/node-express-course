// CommonJS, every file in node is module (by default)
// modules - Encapuslated code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

//when you import a module, you actually invoke it - the function add values is invoked and is wrapped automatically in app.js
require("./7-mind-grenade");

sayHi("Erick");
sayHi(names.john);
sayHi(names.peter);
