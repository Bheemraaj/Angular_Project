import { Component } from '@angular/core';
import { StudentIdService } from '../student-id.service';

@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.css']
})
export class StudentIdComponent {


  student_ids:any=[];

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

}
