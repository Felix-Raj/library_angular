import { Component, OnInit } from '@angular/core';

import { LentService } from '../services/lent/lent.service';
import { Lent } from '../class/classes';



@Component({
  selector: 'app-lent-recent-dues',
  templateUrl: './lent-recent-dues.component.html',
  styleUrls: ['./lent-recent-dues.component.css']
})
export class LentRecentDuesComponent implements OnInit {

	recentDues: Array<Lent>;
	loading = true;
	message='';
  today = new Date();

  constructor(private lentService: LentService) {}

  ngOnInit() {
  	this.getRecentDues();
  }

  getRecentDues(){
  	this.lentService.recentDues().subscribe(
  		data=>{this.recentDues = data; this.loading=false;},
  		error=>{this.message = error;}
	);
  }

  returnLent(lent_id: string){
    console.log(lent_id);
    this.lentService.returnLent(lent_id).subscribe(
      (data)=>{
        this.message='Operation successful';
        var cp = this.recentDues.map((lent)=>{
          if (lent.id == lent_id) {
          }else{
            return lent;
          }
        });

        this.recentDues = cp;
      },
      (error)=>{console.log('error in returning lent'); console.log(error);this.message='Failed to return'}
    );
    this.removemessage();
  }

  renew(lentId: string){
    console.log('Renew Lent with id ', lentId);
    this.lentService.renew(lentId).subscribe(
      (lent: Lent)=>{
        this.message = 'Successfully Renewed';
        this.recentDues = this.recentDues.map(
          (lnt: Lent)=>{
            if(lnt.id == lentId){
              lnt.due_on = lent.due_on;
              return lnt;
            }else{
              return lnt;
            }
          }
        );
      },
      (error)=>{
        console.log('Error renewing lent with lent id ',lentId,'. Reason ',error);
      }
    );
    this.removemessage();
  }

  removemessage(){
    setTimeout(
      ()=>{this.message=''},
      3000
    );
  }

  rowStyle(due_on){
    const dueDate = new Date(due_on);
    if (dueDate < this.today){
      return "text-danger";
    }else{
      return "text-success";
    }
  }

}
