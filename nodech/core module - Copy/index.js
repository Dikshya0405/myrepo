
const fs = require("fs");

//creating a new file
fs.writeFileSync("read.txt", "Hello From Dikshya");
fs.writeFileSync("read.txt", "Hello From Dikshya,how are you?"); //overwrite hunxa

//add hunxa  append le
fs.appendFileSync("read.txt", "Welcome");

///read garna
//buffer data binary data store garna use hunxa
const buff_data = fs.readFileSync("read.txt");
//console.log(buff_data);

//string ma lagna
org_data = buff_data.toString();
console.log(org_data);

