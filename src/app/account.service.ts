import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _httpClient:HttpClient) { }

  getAccounts():Observable<any>
  {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }


  getFilteredAcounts(term:string):Observable<any>
  {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
  }

  getSortedAcounts(column:string,order:string):Observable<any>
  {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
  }


  getPageAcounts(limit:number,page:number):Observable<any>
  {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit="+limit+"&page="+page);
  }

  deleteAcounts(id:string):Observable<any>
  {
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }

  createAccount(data:any):Observable<any>
  {
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data);
  }

}
