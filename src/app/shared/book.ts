import {BookCategory} from './book-category.enum';

export class Book {
  public id: number;
  public title: string;
  public description: string;
  public category: BookCategory;
  constructor() {
    this.id = 0;
    this.title = '';
    this.description = '';
    this.category = BookCategory.Drama;
  }

}
