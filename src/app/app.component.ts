import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  navClicked(event: any){
  	var childrens = event.target.parentElement.parentElement.children;
  	for (var i = childrens.length - 1; i >= 0; i--) {
  		childrens.item(i).firstChild.classList.remove('active');
  	}
  	event.target.classList.add('active');
  }
}
