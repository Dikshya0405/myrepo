

///constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

};

//get summmary 
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} and it was published in year ${this.year}. `
};

///magazine constructor
function magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
};

//inheritate prototype
magazine.prototype = Object.create(Book.prototype);



//instantiate Magazine Object
const mg1 = new magazine("mg 1", "njk", 2009, "May");


//Use Magazine Constructor
magazine.prototype.constructor = magazine;


console.log(mg1.getSummary());
console.log(mg1);