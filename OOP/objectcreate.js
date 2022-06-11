

//Object Of Protos
const bookprotos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} and it was published in year ${this.year}. `
    },
    getAge: function () {
        const year = new Date().getFullYear() - this.year;
        return `${this.title} written by ${this.author} is ${year} year old. `;
    }
};

//create object
const book1 = Object.create(bookprotos);
book1.title = "Book 1";
book1.author = "bjkjk";
book1.year = 2018;

console.log(book1);
