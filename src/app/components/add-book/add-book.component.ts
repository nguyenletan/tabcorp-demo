import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../../shared/book';
import { BookCategory } from '../../shared/book-category.enum';
import '../../shared/book-category.enum';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  category = BookCategory;
  @Output() addBookHandler: EventEmitter<Book> = new EventEmitter();
  book: Book;

  constructor() {}

  ngOnInit() {
    if (this.book === undefined) {
      this.book = new Book();
    }
  }

  onSubmit(bookForm: NgForm) {
    if (bookForm.valid) {
      this.addBookHandler.emit(this.book);
      bookForm.resetForm(new Book());
    }
  }

  /// TODO: WILL Remove
  get diagnostic() {
    return JSON.stringify(this.book);
  }
}
