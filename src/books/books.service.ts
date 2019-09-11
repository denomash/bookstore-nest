import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from '../mock/books.mock';

@Injectable()
export class BooksService {
  books = BOOKS;

  //   get all books
  getBooks(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.books);
    });
  }

  //   get a single book
  getBook(bookId): Promise<any> {
    let id = Number(bookId);

    return new Promise(resolve => {
      const book = this.books.find(book => book.id === id);

      if (!book) {
        throw new HttpException('Book not found', 404);
      }

      resolve(book);
    });
  }

  //   add a book
  addBook(book): Promise<any> {
    return new Promise(resolve => {
      this.books.push(book);
      resolve(this.books);
    });
  }

  //   delete a book
  deleteBook(bookId): Promise<any> {
    let id = Number(bookId);

    return new Promise(resolve => {
      const index = this.books.findIndex(book => book.id === id);

      if (index === -1) {
        throw new HttpException('Book not found', 404);
      }

      this.books.splice(1, index);
      resolve(this.books);
    });
  }
}
