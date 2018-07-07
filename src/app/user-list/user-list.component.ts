import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/users/user.service';
import { Result, User } from '../class/classes'
import { ResultList } from '../shared/list_class';

@Component({
  selector: 'app-user',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends ResultList<User> implements OnInit {

  result: Result<User>;
  userList: Array<User>;
  loadAll:boolean = false;

  constructor(private userService: UserService) { super(); }

  fetchList(callback, url?: string) {
    this.userService.getUsers(url).subscribe(
      users=>{
        super.postFetchList(users);
      }
    );
  }

  ngOnInit() {
    this.getList();
  }

}
