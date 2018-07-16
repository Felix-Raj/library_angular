import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Lent, User, Book, Result } from '../class/classes';
import { LentService } from '../services/lent/lent.service';
import { BookService } from '../services/book.service';
import { UserService } from '../services/users/user.service';


@Component({
  selector: 'app-lent-create',
  templateUrl: './lent-create.component.html',
  styleUrls: ['./lent-create.component.css']
})
export class LentCreateComponent implements OnInit {

	lentForm: FormGroup;
  lentUser: Array<User>;
  lentBook: Array<Book>;
  /* both lentUser and lentBook can have an intermediate value containing more than one entries*/
  message: string;

  constructor(
    private formBuilder: FormBuilder, private lentService: LentService,
    private bookService: BookService, private userService: UserService) {
  	this.createForm();
    this.listenToFormValueChanges();
  }

  ngOnInit() {
  }

  createForm(){
  	this.lentForm = this.formBuilder.group({
  		lib_user: ['', Validators.required],
			book: ['', Validators.required],
			lent_on: new FormControl({value: new Date(), disabled: true}),
			due_on: new FormControl({value: new Date(), disabled: true}),
      duration: [14]
  	});
  }

  listenToFormValueChanges(){
    if (this.lentForm == undefined) {
      return ;
    } else {
      this.lentForm.get('lib_user').valueChanges.forEach(
        value=>{this.getUser(value);}
      );

      this.lentForm.get('book').valueChanges.forEach(value=>
        {this.getBook(value)}
      );
    }
  }

  getUser(userId:string){
    /*
    * Load the user whose ID was entered in the form. Sets the value of
    * lentUser property
    */
    this.userService.getUser(userId).subscribe(
      data=>{
        this.lentUser = data.results;
      }
    );
  }

  getBook(bookId: string){
    /*
    * Load the book whose ID was enterd in the form. Sets the value of
    * lentBook property
    */
    this.bookService.getBook(bookId).subscribe(
      data=>{this.lentBook=data.results;}
    )
  }

  onSubmit(){
    if (this.lentBook.length != 1) {
      this.message = "Please Enter a correct book code";
      return;
    }
    if (this.lentUser.length != 1) {
      this.message = "Please Enter a correct user code";
      return ;
    }
  	const submitLent: Lent = {
  		lib_user: this.lentUser[0],
      book: this.lentBook[0],
      lent_on: this.lentForm.value.lent_on,
      due_on: this.lentForm.value.due_on,
      duration: this.lentForm.value.duration as string
  	};


    this.lentService.createLent(submitLent).subscribe(data=>{
      this.message = "Success";
      this.lentForm.reset();
    })
  }

}
