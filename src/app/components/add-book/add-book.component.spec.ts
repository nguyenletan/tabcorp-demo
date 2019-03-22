import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AddBookComponent } from './add-book.component';

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AddBookComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
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
});
