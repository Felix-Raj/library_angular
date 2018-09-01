import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Note, Result } from '../../class/classes';
import { httpOptions, baseUrl } from '../book.service';

const mockResult = {
	count: 11,
	next: null, previous: null,
	results:[
		{id:"0", note:"Note one"},
		{id:"1", note:"Note two"},
		{id:"2", note:"Note three"},
		{id:"3", note:"Note three Note three"},
		{id:"4", note:"Note three Note threeNote three"},
		{id:"5", note:"Note threeNote threeNote threeNote threeNote threeNote threeNote three"},
		{id:"6", note:"Note threeNote three"},
		{id:"7", note:"Note"},
		{id:"8", note:"Note threeNote threeNote threeNote three"},
		{id:"9", note:"Note three Note three"},
		{id:"10", note:"Note three Note threeNote threeNote threeNote"},
		{id:"11", note:"Note threeNote threeNote threeNote threeNote threeNote threeNote threeNote threeNote three"},
	]
};

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  getNotes(url: string = ''): Observable<Result<Note>>{
  	return of(mockResult);
  }

  addNote(note: Note): Observable<Note>{
  	return of(note);
  }
}
