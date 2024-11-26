import { Component } from '@angular/core';
import { StudentIdService } from '../student-id.service';

@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.css']
})
export class StudentIdComponent {


  student_ids:any=[];
  term:string="";


  column:string="";
  order:string="";

  limit:number=0;
  page:number=0;

  constructor(private _student_idService:StudentIdService)
  {
    _student_idService.getStudent_ids().subscribe(
      (data:any)=>{
        this.student_ids=data;
      },
      (err:any)=>{
        alert("internal sevice error");
      }
    )
  }
  delete(id:string){
    this._student_idService.deleteStudent_id(id).subscribe(
      (data:any)=>{
        alert("Deleted Successfully");
        location.reload();
      },
      (err:any)=>{
        alert("internal sevice error");
      }
    )
  }

  filter(){
    this._student_idService.getFilterStudents(this.term).subscribe(
      (data:any)=>{
        this.student_ids=data;
      },
      (err:any)=>{
        alert("internal sevice error");
      }
    )
  }

  sorted(){
    this._student_idService.getSortedStudents(this.column,this.order).subscribe(
      (data:any)=>{
        this.student_ids=data;
      },
      (err:any)=>{
        alert("internal sevice error");
      }
    )
  }

  pagenation(){
    this._student_idService.getPageStudents(this.limit,this.page).subscribe(
      (data:any)=>{
        this.student_ids=data;
      },
      (err:any)=>{
        alert("internal sevice error");
      }
    )
  }


}
