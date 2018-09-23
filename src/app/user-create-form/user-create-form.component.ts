import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User, user_categories } from '../class/classes';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.css']
})
export class UserCreateFormComponent implements OnInit, OnChanges {

	userCreateForm: FormGroup;
	@Input() user: User;
  catergories = user_categories;

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
      name: this.userCreateForm.value.name as string,
      date_of_birth: this.userCreateForm.value.date_of_birth as string,
      avatar: this.userCreateForm.value.avatar,
      account_activated: this.userCreateForm.value.account_activated,
      category: this.userCreateForm.value.category,
    }
    this.userService.createUser(saveUser).subscribe(
      (data: User) => console.log(data), //todo: remove
      error => {console.log(error);} //todo: make better
    );
  }

  createForm(){
    this.userCreateForm = this.formBuilder.group({
      uid: '',
      name: ['', Validators.required],
      date_of_birth: '',
      avatar:null,
      account_activated: false,
      category: this.catergories[0].toUpperCase(),
    });
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.userCreateForm.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }

  clearFile() {
    this.userCreateForm.get('avatar').setValue(null);
  }

  rebuildForm() {
    this.userCreateForm.reset(this.user);
  }

  get name() { return this.userCreateForm.get('name'); }

}
