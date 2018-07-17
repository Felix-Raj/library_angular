import { Result } from '../class/classes';

import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

export abstract class ResultList<T> {

	result: Result<T>;
	list: Array<T>;
	loadAll: boolean = false;

	loading: boolean = true;
	searchObject = new Subject<{}>();
	
	constructor(){}

	abstract _makeServiceCall(url?: string, queries?: {}): Observable<Result<T>>

	getList(url?: string):void {
		/*
		* Get the list of T.
		*/
		this.loading = true;
		if (this.result && this.result.next == null) {
			return ;
		}
		this.fetchList(this._makeServiceCall(url, undefined));
	}

	/*
	* subscribe to the observable to read the result
	*/
	fetchList(observable: Observable<Result<T>>){
		observable.subscribe((data)=>this.success_function(data), (error)=>this.error_function(error))
	}

	success_function(data){
		this.postFetchList(data);
	}

	error_function(error){
		console.log('error in fetching list');
		console.log(error);
	}

	postFetchList(results: Result<T>){
		/*
		* update the result array, fetch the remaining if
		* required.
		*/
		this.result = results;
		this.updateList();
		this.loading = false;
		if (this.loadAll) {
			if (this.result.next == null) {
				return ;
			}
			this.getList(this.result.next);
		}
	}

	updateList():void {
		/* update the result array */
		if (this.list != null) {
			for (var i = this.result.results.length - 1; i >= 0; i--) {
				this.list.push(this.result.results[i]);
			}
		}else {
			this.list = this.result.results;
		}
	}

	getNextList():void {
		/* Helper function to load the next set of list */
		this.getList(this.result.next);
	}

	loadAllList():void {
		/* Heler function to load all the result */
		if (this.result.next != null) {
			this.loadAll = true;
			this.getList(this.result.next);
		}
	}

	search(){
		this.searchObject.pipe(
			debounceTime(300),
      		distinctUntilChanged(),
      		switchMap((value, index)=>{
      			this.list = null;
      			return this._makeServiceCall(undefined, value);
      		})
		).subscribe((data)=>{this.success_function(data);}, (error)=>{this.error_function(error)});
	}
}