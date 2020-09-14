import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceClientService {
  private baseUrl = 'http://localhost:8092/client/';

  constructor(private http: HttpClient) { }
  
  getClientList():Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  
  createClient(Client: Object): any {
    return this.http.post(`${this.baseUrl}`, Client);
  }
 

  updateClient(value: any): any {
    return this.http.put(`${this.baseUrl}`, value);
  }

  deleteClient(id: any): any {
    return this.http.delete(`${this.baseUrl}${id}`, { responseType: 'text' });
  }

  getClient(id: any): any {
    return this.http.get(`${this.baseUrl}${id}`);
  }
 
}
