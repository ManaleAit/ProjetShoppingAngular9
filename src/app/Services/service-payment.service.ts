import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicePaymentService {
  private baseUrl = 'http://localhost:9090/payment/pay';

  constructor(private http: HttpClient) { }
  

  
   Payment(Order: Object): any {
    return this.http.post(`${this.baseUrl}`, Order);
  }
 

 
}
