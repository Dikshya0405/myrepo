const fs = require("fs");

//syncronous version 
//CRUD

//fs.mkdirSync("thapa"); //creating new folder

fs.writeFileSync("thapa/bio.txt", "My name is Dikshya"); //creates  new file if already exits, overwrites

fs.appendFileSync("thapa/bio.txt", " I am from Butwal");///adds data

//const data = fs.readFileSync("thapa/bio.txt");
//console.log(data);  //yesto garda buffer  value auxa 


const data = fs.readFileSync("thapa/bio.txt", "utf-8");
console.log(data); //file encoding like utf-8 use faryo vane buffer value audaina

fs.renameSync("thapa/bio.txt", "thapa/mybio.txt");

fs.unlinkSync("thapa/mybio.txt"); //to delete file

fs.rmdirSync("thapa"); //  to remove folder




