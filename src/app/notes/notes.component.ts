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

  constructor(private notesService: NotesService) { 
  	super();
  }

  ngOnInit() {
  	this.getList();
  }

  _makeServiceCall(url?: string, queries?: {}): Observable<Result<Note>>{
    return this.notesService.getNotes(url);
  }

}
