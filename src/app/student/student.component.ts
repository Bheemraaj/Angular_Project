import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  public studentForm:FormGroup=new FormGroup(
    {
      name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      class:new FormControl(),
      fatherName:new FormControl(),
      email:new FormControl('',[Validators.required,Validators.email]),
      dob:new FormControl(),
      address:new FormGroup(
        {
          addressLine:new FormControl(),
          city:new FormControl(),
          state:new FormControl(),
          pinCode:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{6}$")])
        }
      ),
      type:new FormControl(),
      marksDetails:new FormArray([])
    }
  )

  get marksDetailsFormArray(){
    return this.studentForm.get('marksDetails') as FormArray;
  }


  addMarks(){
    this.marksDetailsFormArray.push(
      new FormGroup({
        class:new FormControl,
        year:new FormControl,
        percentage:new FormControl
      })
    )
  }

  deleteCard(i:number)
  {
    this.marksDetailsFormArray.removeAt(i);
  }

  constructor(){
    this.studentForm.get("type")?.valueChanges.subscribe(
      (data:any)=>{
        if(data=="dayScholor"){
          this.studentForm.addControl('busFee',new FormControl());
          this.studentForm.removeControl('hostelFee');
        }
        else{
          this.studentForm.addControl('hostelFee',new FormControl());
          this.studentForm.removeControl('busFee');
        }
      }
    )
  }



  submit(){
    console.log(this.studentForm);
  }

}
