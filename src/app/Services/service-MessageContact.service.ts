import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceMessageContactService {
  private baseUrl = 'http://localhost:8092/MessageContact/';

  constructor(private http: HttpClient) { }
  
  getMessageContactList():Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
  getMessageContactListNonLue():Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}get`);
  }
  createMessageContact(MessageContact: Object): any {
    return this.http.post(`${this.baseUrl}`, MessageContact);
  }
 

  updateMessageContact(value: any): any {
    return this.http.put(`${this.baseUrl}`, value);
  }

  deleteMessageContact(id: any): any {
    return this.http.delete(`${this.baseUrl}${id}`, { responseType: 'text' });
  }

  getMessageContact(id: any): any {
    return this.http.get(`${this.baseUrl}${id}`);
  }
 
}
