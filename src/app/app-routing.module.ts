import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddBookComponent} from './components/add-book/add-book.component';
import {BooksComponent} from './components/books/books.component';

const routes: Routes = [
  { path: '', component: BooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
