import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

//any not recommonded

products:any[]=[
  {name:"pen",price:2000},
  {name:"book",price:1000},
  {name:"laptop",price:50000}
]

today:any=new Date();

}
