import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

import { UserService } from '../services/users/user.service';
import { User, Result, Avatar } from '../class/classes';
import { ResultList } from '../shared/list_class';

import { UserListComponent } from '../user-list/user-list.component';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent extends UserListComponent implements OnInit {

	@Input() searchWord: string;


  ngOnInit() {
  	this.search();
  }


  ngOnChanges(){
  	this.loadAll = true;
  	const obj = {'search': this.searchWord};
  	this.searchObject.next(obj);
  }

}
