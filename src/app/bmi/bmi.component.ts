import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {


  num1:number=0;
  num2:number=0;


  result:number=0;


  bmi(){
    this.result=this.num1/(this.num2 * this.num2)
  }

}
