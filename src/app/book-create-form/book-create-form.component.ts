import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { BookService } from '../services/book.service';
import { Book } from '../class/classes';

@Component({
  selector: 'app-book-create-form',
  templateUrl: './book-create-form.component.html',
  styleUrls: ['./book-create-form.component.css']
})
export class BookCreateFormComponent implements OnInit, OnChanges {

	bookCreateForm: FormGroup;
	@Input() book: Book;

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
  	this.bookCreateForm = this.formBuilder.group({
  		title: ['', Validators.required],
  		author: ['', Validators.required],
  		copies: ''
  	});
  }

  onSubmit() {  	
    const saveBook: Book = {
  		id: 0,
  		title: this.bookCreateForm.value.title as string,
  		author: this.bookCreateForm.value.author as string,
  		copies: this.bookCreateForm.value.copies as number,
  		booktag_set: []
  	};

  	this.bookService.createBook(saveBook).subscribe(
  		(data: Book) => console.log(data), // todo: remove this
  		error=>console.log(error) //todo: make better
  	);
  }

  rebuildForm(){
  	this.bookCreateForm.reset(this.book);
  }

  ngOnChanges() {
  	this.rebuildForm()
  }

}
