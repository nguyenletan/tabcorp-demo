import {DebugElement} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import {BrowserModule, By} from '@angular/platform-browser';
import {init} from 'protractor/built/launcher';
import {Book} from '../../shared/book';
import {BookCategory} from '../../shared/book-category.enum';
import {AddBookComponent} from '../add-book/add-book.component';

import {BooksComponent} from './books.component';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  const initBook = new Book();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserModule, FormsModule ],
      declarations: [ BooksComponent, AddBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    initBook.id = 1;
    initBook.title = 'Book1';
    initBook.category  = BookCategory.Drama;
    initBook.description = 'Nothing at all';
    component.books = [initBook];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Book Title should be create', () => {

    const header = fixture.debugElement.query(By.css('.book-title'));

    expect(header).toBeTruthy();
    expect(header.nativeElement.innerHTML).toEqual(`Title: ${initBook.title} (${initBook.category})`);
   /* headers.forEach((inputText: DebugElement, index) => {
      console.log(headers);
      expect(inputText).toBeTruthy();
      // expect(inputText.nativeElement.innerHTML).toContain()
      // expect(inputText.nativeElement.innerHTML).toContain(favoriteMoviesToUse[index].title);
    });*/
  });

  it('Book Description should be create', () => {
    const description = fixture.debugElement.query(By.css('.description'));

    expect(description).toBeTruthy();
    expect(description.nativeElement.innerHTML).toContain(initBook.description);
  });

  it('Number of Books should be equal total books', () => {
    const numberOfBooks = fixture.debugElement.query(By.css('.number-of-books'));

    expect(numberOfBooks).toBeTruthy();
    expect(numberOfBooks.nativeElement.innerHTML).toEqual(`(${component.books.length})`);
  });
});
