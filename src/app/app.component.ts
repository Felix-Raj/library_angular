import { Component } from '@angular/core';
import { enable, destroy } from 'splash-screen';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){
  	enable('tailing');
  	setTimeout(function(){destroy();}, 3000);
  }
}
