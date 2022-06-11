const fs = require("fs");


//callback function is mandatory in asynchrous file system
fs.writeFile("read.txt", "Welcome", (err) => {
    console.log("added");
    //console.log(err); //if kei error xa vane dekhauxa

});

//to add
fs.appendFile("read.txt", "hello", (err) => {
    console.log("New");
});

//to read
fs.readFile("read.txt", "utf-8", (err, data) => {
    console.log(data);

})
