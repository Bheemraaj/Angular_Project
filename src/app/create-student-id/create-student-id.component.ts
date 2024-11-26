import { Component } from '@angular/core';
import { StudentIdService } from '../student-id.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student-id',
  templateUrl: './create-student-id.component.html',
  styleUrls: ['./create-student-id.component.css']
})
export class CreateStudentIdComponent {

constructor(private _student_idService:StudentIdService){}

public student_idForm:FormGroup=new FormGroup(
  {
    name:new FormControl(),
    phone:new FormControl(),
    city:new FormControl(),
    dob:new FormControl(),
    profile_picture:new FormControl(),
    email:new FormControl(),
    school_logo:new FormControl(),
    school_name:new FormControl(),
    school_city:new FormControl(),
    school_pin:new FormControl(),
    

  },
);

submit(){
  console.log(this.student_idForm);
  this._student_idService.createStudent_id(this.student_idForm.value).subscribe(
    (data:any)=>{
      alert("created")
    },
    (err:any)=>{
      alert("Error")
    }
  )
}


}
