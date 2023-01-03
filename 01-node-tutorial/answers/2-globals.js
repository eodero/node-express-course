//GLOBALS - NO WINDOW!!! - no browser

// __dirname - path to current directory
// __filename - filename
// require -function to use modules(commonJS)
// module - info about current module (file)
// process -info about env where the program us being executed

console.log(__dirname);
console.log(__filename);
setInterval(() => {
  console.log("hello world");
}, 1000);
