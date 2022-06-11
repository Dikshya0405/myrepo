

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in the year ${this.year}. `

    }
};

//Magazine Subclass

class magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

//instantiate magazine
const mag1 = new magazine("mag1", "jbjk", "2003", "april");
console.log(mag1);
console.log(mag1.getSummary()); 