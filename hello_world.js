// fs = file system library in NodeJS
const fs = require('fs'); // bring in fs library
const heroes = require("superheroes");

fs.writeFileSync("file.txt", "hi there!\n")// write to a file
//  fs.writeSync("filename", "fileContent")

//  add to a file - formatted same as above
fs.appendFileSync(`file.txt`,`\nNode is a JavaScript runtime
environment designedto run outside the browser.`);

// write name of random superhero to text file named superhero.
fs.writeFileSync("superhero", "");
fs.appendFileSync("superhero", heroes.random())


action()














function action(){
    console.log(`action complete`);
}