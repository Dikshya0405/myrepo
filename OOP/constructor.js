//constructor

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
        return `${this.title} was written by ${this.author} and it was published in year ${this.year}. `
    };
};


//instantiate an object
const book1 = new Book("Ikigai", "jkekj", 1999);
const book2 = new Book("Sapiens", "kojll", 2008);
const book3 = new Book("Secret", "sknkn", 1988);


console.log(book1, book2, book3);

console.log(book1.getSummary());

