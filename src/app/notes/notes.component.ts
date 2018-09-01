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
	message='';

  constructor(private notesService: NotesService) { 
  	super();
  }

  ngOnInit() {
  	this.loadAll = true;
  	this.getList();
  }

  _makeServiceCall(url?: string, queries?: {}): Observable<Result<Note>>{
    return this.notesService.getNotes(url);
  }

  addNote(note:Note, retries=0){
  	this.notesService.addNote(note).subscribe(
  		(note: Note)=>{this.list.unshift(note)},
  		(err)=>{
  			console.log('Could not save note '+note.note+' due to '+err+' retying '+retries+' time');
  			if (retries >= 10) {
  				this.message = 'Could not save note '+note.note+' due to '+err;
  				return ;
  			}
  			this.addNote(note, retries+1);
  		}
  	)
  }

  delete(id: string){
  	this.notesService.deleteNote(id).subscribe(()=>{}, ()=>{ this.message = 'Unable to delete'; console.log(this.message);})
  	this.list = this.list.filter((note)=>{return note.id!=id}, this.list)
  }

  onEnter(value: string) {
  	var newNote = new Note();
  	newNote.id = '-1';
  	newNote.note = value;
  	this.addNote(newNote);
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
