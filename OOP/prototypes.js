


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

//get age
Book.prototype.getAge = function () {
    const year = new Date().getFullYear() - this.year;
    return `${this.title} written by ${this.author} is ${year} year old. `;
}


//instantiate an object
const book1 = new Book("Ikigai", "jkekj", 1999);
const book2 = new Book("Sapiens", "kojll", 2008);
const book3 = new Book("Secret", "sknkn", 1988);


//console.log(book1, book2, book3);

//console.log(book1.getSummary());
console.log(book2.getAge());

