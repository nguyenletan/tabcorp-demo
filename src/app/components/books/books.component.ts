import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[];
  nextId: number;

  constructor() {
    this.books = [];
    this.nextId = 0;
  }

  ngOnInit() {
  }

  onAddBookHandler(book: Book) {
    if (book !== undefined) {
      book.id = this.nextId++;
      this.books.push(Object.assign({}, book));
    }
  }

}
