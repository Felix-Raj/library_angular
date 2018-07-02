import { Result } from '../class/classes';

import { Observable } from 'rxjs';

export abstract class ResultList<T> {

	result: Result<T>;
	list: Array<T>;
	loadAll: boolean = false;
	
	constructor(){}

	/*
	* Call the actual service in this function, implement
	* this in child class. Callback is the function to 
	* call with the result 
	*/
	abstract fetchList(callback, url?: string);

	getList(url?: string):void {
		/*
		* Get the list of T.
		*/
		if (this.result && this.result.next == null) {
			return ;
		}
		this.fetchList(this.postFetchList, url);
	}

	postFetchList(results: Result<T>){
		/*
		* update the result array, fetch the remaining if
		* required.
		*/
		this.result = results;
		this.updateList();
		if (this.loadAll) {
			if (this.result.next == null) {
				return ;
			}
			this.getList(this.result.next);
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
}