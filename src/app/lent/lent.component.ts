import { Component, OnInit } from '@angular/core';

import { Lent, Result } from '../class/classes';
import { LentService } from '../services/lent/lent.service';

@Component({
  selector: 'app-lent',
  templateUrl: './lent.component.html',
  styleUrls: ['./lent.component.css']
})
export class LentComponent implements OnInit {

	private result: Result<Lent>;
  private lentList: Array<Lent>;
  private loadAll: boolean = false;

  constructor(private lentServices: LentService) { }

  ngOnInit() {
  	this.getLentList();
  }

  getLentList(url?: string): void {
    if (this.result && this.result.next==null) {
      return ;
    }
  	this.lentServices.getLentList(url).subscribe(
  		result => {
  			this.result = result;
        this.updateLentList();
        if (this.loadAll) {
          if (this.result.next==null) {
            return ;
          }
          this.getLentList(this.result.next);
        }
  		}
  	)
  }

  loadAllLentList(): void {
    if (this.result.next!=null) {
      this.loadAll = true;
      this.getLentList(this.result.next);
    }
  }

  updateLentList(): void {
    if (this.lentList === undefined) {
      this.lentList = this.result.results;
    }else {
      this.result.results.forEach((value, index, array)=>{
        this.lentList.push(value);
      });
    }
  }

}
