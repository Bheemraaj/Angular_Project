import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PrinterestService } from '../printerest.service';

@Component({
  selector: 'app-printerest',
  templateUrl: './printerest.component.html',
  styleUrls: ['./printerest.component.css']
})
export class PrinterestComponent {


  printerests:any=[];

  constructor(private _printerestService:PrinterestService)
  {
    _printerestService.getPrinterests().subscribe(
      (data:any)=>{
        this.printerests=data;
      },
      (err:any)=>{
        alert("internal sevice error");
      }
    )
  }
}
