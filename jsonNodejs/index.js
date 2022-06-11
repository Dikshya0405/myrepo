const fs = require("fs");
const bioData = {
    name: "Dikshya",
    age: 19,
    gender: "Female"
};

//console.log(bioData.name);

//to convert object to json

//const jsonData = JSON.stringify(bioData);
//console.log(jsonData);
//console.log(jsonData.channnel); //this cant be done

//to convert json to object
//const objData = JSON.parse(jsonData);
//console.log(objData);

const jsonData = JSON.stringify(bioData);

fs.writeFile("json1.json", "New file", (err) => {
    console.log("done");

});



