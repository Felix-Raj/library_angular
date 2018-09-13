import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { BookService } from '../services/book.service';
import { Book, book_categories } from '../class/classes';

@Component({
  selector: 'app-book-create-form',
  templateUrl: './book-create-form.component.html',
  styleUrls: ['./book-create-form.component.css']
})
export class BookCreateFormComponent implements OnInit, OnChanges {

	bookCreateForm: FormGroup;
	@Input() book: Book;
  @Output() outBook = new EventEmitter<Book>();
  message: string;
  errors: {error:''};
  book_categories = book_categories;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor(
  	private formBuilder: FormBuilder,
  	private bookService: BookService ) { 
  	this.createForm();
  }

  ngOnInit() {}

  createForm(){
  	//todo: review used validators
    // todo : add validators for book category
  	this.bookCreateForm = this.formBuilder.group({
  		title: ['', Validators.required],
  		author: ['', Validators.required],
      price: 0,
  		copies: '',
      book_id:['', Validators.required],
      locked: false,
      category: this.book_categories[0].toUpperCase(),
      preview: null,
  	});
  }

  onSubmit() {  	
    const saveBook: Book = {
  		id: 0,
  		title: this.bookCreateForm.value.title as string,
  		author: this.bookCreateForm.value.author as string,
  		copies: this.bookCreateForm.value.copies as number,
      price: this.bookCreateForm.value.price as number,
  		booktag_set: [],
      book_id: this.bookCreateForm.value.book_id as string,
      locked: this.bookCreateForm.value.locked as boolean,
      category: this.bookCreateForm.value.category as string,
      preview: this.bookCreateForm.value.preview
  	};

    if(this.book){
      console.log('edit');

      if(saveBook.preview){
        console.log('PREVIEW');
        console.log(saveBook.preview);
      }else{
        console.log('NO');
        saveBook.preview = this.book.preview
      }

      saveBook.id = this.book.id;

      console.log(saveBook);

      this.bookService.editBook(saveBook).subscribe(
        (data)=>{this._onSuccess(data)}, (err)=>{this._onError(err)}
      );
    }else{
      console.log('creaet');
      this.bookService.createBook(saveBook).subscribe(
        (data)=>{this._onSuccess(data)}, (err)=>{this._onError(err)}
      );
    }

  }

  _onSuccess(book:Book){
    console.log(book);
    this.bookCreateForm.reset()
    this.message = 'success';
    this.outBook.emit(book);
  }

  _onError(err){
    console.log('error on creating/editing book');
    console.log(err);
    this.message = 'failed!';
    this.errors = err.error;
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.bookCreateForm.get('preview').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }

  clearFile() {
    this.bookCreateForm.get('preview').setValue(null);
  }

  rebuildForm(){
  	this.bookCreateForm.reset(this.book);
  }

  ngOnChanges() {
  	this.rebuildForm()
  }

}
