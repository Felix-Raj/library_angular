import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable, of } from 'rxjs';


import { Note, Result } from '../../class/classes';
import { httpOptions, baseUrl } from '../book.service';

const noteBaseUrl = baseUrl+'/note/';
const urls= {
	list : noteBaseUrl+'',
	new: noteBaseUrl+'new/',
	delete: noteBaseUrl+'<id>/delete/'
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

  deleteNote(id: string): Observable<any>{
  	return this.http.delete<any>(urls.delete.replace('<id>', id));
  }
}
