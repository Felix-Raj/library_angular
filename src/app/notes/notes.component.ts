import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';


import { NotesService } from '../services/notes/notes.service';
import { Note, Result } from '../class/classes';
import { ResultList } from '../shared/list_class';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent extends  ResultList<Note> implements OnInit {
	newNote: string;
	borderTypes=['primary', 'secondary', 'success', 'danger', 'warning', 'info']
	lastIndex = 0;

  constructor(private notesService: NotesService) { 
  	super();
  }

  ngOnInit() {
  	this.getList();
  }

  _makeServiceCall(url?: string, queries?: {}): Observable<Result<Note>>{
    return this.notesService.getNotes(url);
  }

  addNote(){
  	console.log('add note');
  	this.list.push(new Note());
  }

  onEnter(value: string) {
  	var newNote = new Note();
  	newNote.id = '-1';
  	newNote.note = value;
  	this.notesService.addNote(newNote).subscribe(
  		(note:Note)=>{this.list.unshift(newNote)},
  		(error)=>{console.log(error); this.list.unshift(newNote)}
  	);
  }

  getRandomIndex(){
  	const index = Math.floor(Math.random() * (this.borderTypes.length - 0 + 1)) + 0
  	if (index==this.lastIndex) {
  		return this.getRandomIndex();
  	}else{
  		this.lastIndex = index;
  		return this.lastIndex;
  	}
  }

  getRandomBorder(){
		return 'border-'+this.borderTypes[this.getRandomIndex()];
  }

  cardStyle(id: string){
  	const border: string = this.getRandomBorder();
  	var  clasObj = {
  		card: true,
  		'mb-3': true,
  	} ;
  	clasObj[border] = true;
  	return clasObj;
  }

}
