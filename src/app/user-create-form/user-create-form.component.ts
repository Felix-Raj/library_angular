import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../class/classes';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.css']
})
export class UserCreateFormComponent implements OnInit, OnChanges {

	userCreateForm: FormGroup;
	@Input() user: User;

  constructor( private formBuilder: FormBuilder, 
    public userService: UserService ) {
    this.createForm();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.rebuildForm()
  }

  onSubmit() {
    const saveUser: User = {
      id: '0',
      uid: this.userCreateForm.value.uid as string,
      name: this.userCreateForm.value.name as string
    }
    this.userService.createUser(saveUser).subscribe(
      (data: User) => console.log(data), //todo: remove
      error => {console.log(error);} //todo: make better
    );
  }

  createForm(){
    this.userCreateForm = this.formBuilder.group({
      uid: '',
      name: ['', Validators.required]
    });
  }

  rebuildForm() {
    this.userCreateForm.reset(this.user);
  }

  get name() { return this.userCreateForm.get('name'); }

}
