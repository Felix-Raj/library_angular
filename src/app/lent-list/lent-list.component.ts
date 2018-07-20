import { Component, OnInit } from '@angular/core';

import { Lent, Result } from '../class/classes';
import { LentService } from '../services/lent/lent.service';
import { ResultList } from '../shared/list_class';

@Component({
  selector: 'app-lent-list',
  templateUrl: './lent-list.component.html',
  styleUrls: ['./lent-list.component.css']
})
export class LentListComponent extends ResultList<Lent> implements OnInit {

  message: string;

  constructor(private lentServices: LentService) { super() }

  ngOnInit() {
    this.getList();
  }

  _makeServiceCall(url?: string, queries?: {}){
    return this.lentServices.getLentList(url);
  }

  returnLent(lent_id: string){
    console.log(lent_id);
    this.lentServices.returnLent(lent_id).subscribe(
      (data)=>{
        this.message='Operation successful';
        var cp = this.list.map((lent)=>{
          if (lent.id == lent_id) {
          }else{
            return lent;
          }
        });

        this.list = cp;
      },
      (error)=>{console.log('error in returning lent'); console.log(error);this.message='Failed to return'}
    );
    this.removemessage();
  }

  removemessage(){
    setTimeout(
      ()=>{this.message=''},
      3000
    );
  }

}
