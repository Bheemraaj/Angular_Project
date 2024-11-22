import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  accounts:any=[];
  term:string="";

  column:string="";
  order:string="";
  limit:number=0;
  page:number=0;

  constructor(private _accountServie:AccountService){
    _accountServie.getAccounts().subscribe(

      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal sevice error");
      }
    )
  }

  filter(){
    this._accountServie.getFilteredAcounts(this.term).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal sevice error");
      }
    )
  }

  sorted(){
    this._accountServie.getSortedAcounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal sevice error");
      }
    )
  }

  pagination(){
    this._accountServie.getPageAcounts(this.limit,this.page).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal sevice error");
      }
    )
  }


  delete(id:string){
    this._accountServie.deleteAcounts(id).subscribe(
      (data:any)=>{
        alert("Successfully deleted");
        location.reload();
      },
      (err:any)=>{
        alert("internal sevice error");
      }
    )
  }

}
