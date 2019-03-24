import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, NgForm} from '@angular/forms';
import { By } from '@angular/platform-browser';
import {Book} from '../../shared/book';

import { AddBookComponent } from './add-book.component';

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;
  let addBookForm: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AddBookComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    addBookForm = fixture.debugElement.query(By.css('form'));
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Book Title should be required and max length is 30', () => {
    const bookTitle = fixture.debugElement.query(By.css('#title'));
    expect(bookTitle).toBeTruthy();
    expect(bookTitle.attributes.required).not.toBeUndefined();
    expect(bookTitle.attributes.maxlength).toEqual('30');
  });

  it('Book Description should be required ', () => {
    const bookDescription = fixture.debugElement.query(By.css('#description'));
    expect(bookDescription).toBeTruthy();
    expect(bookDescription.attributes.required).not.toBeUndefined();
  });

  it('Should raise FormSubmit event when clicked on Add button (triggerEventHandler)', () => {
    const newBook = new Book();
    const ngFakeForm = new NgForm(null,  null);
    spyOn(component, 'onSubmit');
    spyOn(component.addBookHandler, 'emit');

    addBookForm.triggerEventHandler('submit', ngFakeForm);
    fixture.detectChanges();

    expect(component.onSubmit).toHaveBeenCalled();
  });
});
