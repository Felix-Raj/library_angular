import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { UserService } from '../services/users/user.service';
import { Result, User, Avatar } from '../class/classes'
import { ResultList } from '../shared/list_class';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends ResultList<User> implements OnInit {

  result: Result<User>;
  userList: Array<User>;
  loadAll:boolean = false;

  constructor(private userService: UserService, private sanitizer: DomSanitizer) { super(); }

  ngOnInit() {
    this.getList();
  }

  _makeServiceCall(url?, queries?){
    return this.userService.getUsers(url);
  }

  _image_src(avatar: Avatar){
    return this.sanitizer.bypassSecurityTrustUrl("data:"+avatar.filetype+";base64, "+avatar.value);
  }

}
