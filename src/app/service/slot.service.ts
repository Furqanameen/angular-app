import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlotService {
  url: string = "localhost:3000"
  // url: string = "http://127.0.0.1:3000"
  constructor(private http: HttpClient) { }

  listSlot(){
    return this.http.get(this.url+"/api/v1/clients")
    // return this.http.get(this.url+"/api/v1/customer/customers")
  }

}
