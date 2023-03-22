import { Author } from './author.js'
import { Ratingable } from './ratingable.js'
import { Product } from './product.js'
import { Review, Genre } from './types.js'

export class Book implements Ratingable, Product {
  getProductDescription(): string {
    return `Book "${this.name}" by ${this.author.firstName}
    ${this.author.lastName}`
  }
  rating: number
  name: string
  genre: Genre
  price: number
  author: Author
  reviews: [string, number, string][]
  constructor(
    name: string,
    genre: Genre,
    price: number,
    author: Author,
    reviews?: [string, number, string][]
  ) {
    this.name = name
    this.genre = genre
    this.price = price
    this.author = author
    if (reviews) {
      this.reviews = reviews
      if (this.reviews.length > 0) {
        const reviewSum = this.reviews.reduce(
          (accumulator, currentValue) => {
            return accumulator + currentValue[1]
          },
          0
        )
        this.rating = reviewSum / this.reviews.length
      } else {
        this.rating = null
      }
    } else {
      reviews = []
    }

  }
}


