import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TrimValueAccessorModule } from 'ng-trim-value-accessor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BooksComponent } from './components/books/books.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddBookComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    TrimValueAccessorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
