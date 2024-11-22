import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  term:string="";

  column:string="";
  order:string="";

  limit:number=0;
  page:number=0;


  vehicles:any=[];

  constructor(private _vehicleService:VehicleService)
  {
    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("interal server error");
      }
    )
  }


  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("interal server error");
      }
    )
  }


 sorted(){
    this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("interal server error");
      }
    )
  }

  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("succesfully deleted");
        location.reload();
      },
      (err:any)=>{
        alert("interal server error");
      }
    )
  }

  pagination(){
    this._vehicleService.getPageVehicles(this.limit,this.page).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("interal server error");
      }
    )

  }




}
