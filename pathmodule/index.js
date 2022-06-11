

//The node:path module provides utilities for working with file and directory paths.


const path = require("path");

//returns the directory name of a path
//console.log(path.dirname("C: /ZZ --- Files --- ZZ/Projects / nodejsbegginer / pathmodule / index.js"));


//returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path
//console.log(path.extname("C:\ZZ --- Files --- ZZ\Projects\nodejsbegginer\pathmodule\index.js"));

//returns the last portion of a path
//console.log(path.basename("C:\ZZ --- Files --- ZZ\Projects\nodejsbegginer\pathmodule\index.js"));

//returns an object whose properties represent significant elements of the path
//The returned object will have the following properties:
//dir <string>
//root <string>
//base <string>
//name <string>
//ext <string>
//console.log(path.parse("C:\ZZ --- Files --- ZZ\Projects\nodejsbegginer\pathmodule\index.js"));

//if specific euta matra chaiye par 

const myPath = (path.parse("C:\ZZ --- Files --- ZZ\Projects\nodejsbegginer\pathmodule\index.js"));
console.log(myPath.name);
