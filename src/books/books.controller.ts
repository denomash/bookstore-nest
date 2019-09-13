import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDTO } from './dto/book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getBooks() {
    const books = await this.booksService.getBooks();
    return books;
  }

  @Get(':id')
  async getBook(@Param('id') bookId) {
    const book = await this.booksService.getBook(bookId);
    return book;
  }

  @Post()
  async addBook(@Body() bookDTO: BookDTO) {
    const book = await this.booksService.addBook(bookDTO);
    return book;
  }

  @Delete()
  async deteteBook(@Query() query) {
    const books = await this.booksService.deleteBook(query.bookId);
    return books;
  }
}
