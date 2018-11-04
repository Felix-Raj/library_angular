import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-app',
  templateUrl: './search-app.component.html',
  styleUrls: ['./search-app.component.css']
})
export class SearchAppComponent implements OnInit {

	search: string;


  constructor() { }

  ngOnInit() {
  }

}
