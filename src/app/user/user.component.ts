import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users/user.service';




@Component({
  // selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
	exportUrl = UserService.getExportURL();
}
/*
* root of user center
* shell for user
* go via https://angular.io/guide/router#child-routing-component
*/