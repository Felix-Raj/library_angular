import { Component, OnInit } from '@angular/core';

import { Lent, Result } from '../class/classes';
import { LentService } from '../services/lent/lent.service';
import { ResultList } from '../shared/list_class';

@Component({
  selector: 'app-lent',
  templateUrl: './lent.component.html',
  styleUrls: ['./lent.component.css']
})
export class LentComponent extends ResultList<Lent> implements OnInit {

  constructor(private lentServices: LentService) { super() }

  fetchList(callback, url?: string) {
    this.lentServices.getLentList(url).subscribe(
      lents=>{
        super.postFetchList(lents);
      }
    );
  }

  ngOnInit() {
    this.getList();
  }

}
