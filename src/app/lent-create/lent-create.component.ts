import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

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
  userLentStatus: Array<Lent>;
  /* both lentUser and lentBook can have an intermediate value containing more than one entries*/
  message: string;
  searchUser = new Subject<string>();
  searchBook = new Subject<string>();

  constructor(
    private formBuilder: FormBuilder, private lentService: LentService,
    private bookService: BookService, private userService: UserService) {
  	this.createForm();
    this.listenToFormValueChanges();
  }

  ngOnInit() {
    this.searchBook.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((value, index)=>{
        return this.bookService.getBook(value);
      })
    ).subscribe((data)=>{this.lentBook=data.results;}, (error)=>{console.log(error);});

    this.searchUser.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((value, index)=>{
        return this.userService.getUser(value);
      })
    ).subscribe((data)=>{this.lentUser=data.results;}, (error)=>{console.log(error);});
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
        value=>{this.searchUser.next(value)}
      );

      this.lentForm.get('book').valueChanges.forEach(value=>
        {this.searchBook.next(value)}
      );
    }
  }

  getUserLentStatus(userId: string){
    /*
    * Loads the lent status of an user, when the value of user ID is completly entered
    */
    this.userLentStatus=new Array<Lent>();
    this.userService.getPendinglents(userId).subscribe(
      data=>{this.userLentStatus=data; this.message=''},
      error=>{this.message='Failed to load user lent detials!'}
    );
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
