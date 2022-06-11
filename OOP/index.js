//const s = ("Hello");
//console.log(s.toUpperCase());
//console.log(typeof s);

/*const r = new String("Hi");
console.log(typeof r);*/

//console.log(window);
//window.alert("Warning");
//window.alert();

//console.log(navigator.appName);


const book1 = {
    name: "Ikigai",
    Author: "bwdebkwe",
    Rating: 8,
    getSummary: function () {
        return `${this.name} was written by ${this.Author} and its rating is ${this.Rating}. `
    }
};

const book2 = {
    name: "Sapiens",
    Author: " blahblah",
    Rating: 7,
    getSummary: function () {
        return `${this.name} was written by ${this.Author} and its rating is ${this.Rating}. `
    }
};

const book3 = {
    name: "Secret",
    Author: "nnkdl",
    Rating: 10,
    getSummary: function () {
        return `${this.name} was written by ${this.Author} and its rating is ${this.Rating}. `
    }
};

//console.log(book1.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));




console.log(book2.getSummary());
console.log(book3.getSummary());
