import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable, of } from 'rxjs';


import { Note, Result } from '../../class/classes';
import { httpOptions, baseUrl } from '../book.service';

const noteBaseUrl = baseUrl+'/note/note/';
const urls= {
	list : noteBaseUrl,
	new: noteBaseUrl,
	update: noteBaseUrl+'<id>/',
	delete: noteBaseUrl+'<id>/'
}
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  getNotes(url: string = urls.list): Observable<Result<Note>>{
  	return this.http.get<Result<Note>>(url);
  }

  addNote(note: Note): Observable<Note>{
  	return this.http.post<Note>(urls.new, note);
  }

  updateNote(note: Note): Observable<Note>{
  	return this.http.put<Note>(urls.update.replace('<id>', note.id), note);
  }

  deleteNote(id: string): Observable<any>{
  	return this.http.delete<any>(urls.delete.replace('<id>', id));
  }
}
