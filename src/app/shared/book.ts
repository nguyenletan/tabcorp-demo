import {BookCategory} from './book-category.enum';

export class Book {
  public id: number;
  public title: string;
  public description: string;
  public category: BookCategory;
  constructor(id= 0, title= '', description= '', category= BookCategory.Comedy) {
    this.id = id;
    this.title = title;
    this.description = '';
    this.category = BookCategory.Drama;
  }

}
