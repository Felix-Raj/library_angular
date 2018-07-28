import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/users/user.service';
import { Result, User } from '../class/classes';

@Component({
  selector: 'app-user-recent-birthday-list',
  templateUrl: './user-recent-birthday-list.component.html',
  styleUrls: ['./user-recent-birthday-list.component.css']
})
export class UserRecentBirthdayListComponent implements OnInit {

	birthdays:Result<User>;
	loading = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.getRecentBirthdays();
  }

  getRecentBirthdays(){
  	this.userService.getRecentBirthdays().subscribe(
  		data=>{this.birthdays=data; this.loading=false},
  		error=>console.log(error)
  	)
  }

}
