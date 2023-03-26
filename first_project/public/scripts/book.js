export class Book {
    getProductDescription() {
        return `Book "${this.name}" by ${this.author.firstName}
    ${this.author.lastName}`;
    }
    constructor(name, genre, price, author, reviews) {
        this.name = name;
        this.genre = genre;
        this.price = price;
        this.author = author;
        if (reviews) {
            this.reviews = reviews;
            if (this.reviews.length > 0) {
                const reviewSum = this.reviews.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue[1];
                }, 0);
                this.rating = reviewSum / this.reviews.length;
            }
            else {
                this.rating = null;
            }
        }
        else {
            reviews = [];
        }
    }
}
