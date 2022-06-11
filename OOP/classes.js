

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in the year ${this.year}. `

    }

    getAge() {
        const year = new Date().getFullYear() - this.year;
        return `${this.title} written by ${this.author} is ${year} year old. `
    }
};


//instantiate object 

const book1 = new Book("Book 1", "jkhjkb", "2000");
console.log(book1);

console.log(book1.getSummary());
