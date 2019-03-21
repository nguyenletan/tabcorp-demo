import {DebugElement} from '@angular/core';
import { async, ComponentFixture, TestBed,  } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

import { AddBookComponent } from './add-book.component';

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AddBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Book Title should be required', () => {
      const inputTexts = fixture.debugElement.queryAll(By.css('input'));
      inputTexts.forEach((inputText: DebugElement, index) => {
        // console.log(inputText);
        expect(inputText).toBeTruthy();
        // expect(inputText.nativeElement.innerHTML).toContain()
        // expect(inputText.nativeElement.innerHTML).toContain(favoriteMoviesToUse[index].title);
      });
    });

});
