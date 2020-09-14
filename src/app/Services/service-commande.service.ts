import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceCommandeService {
  private baseUrl = 'http://localhost:8092/Commande/';

  constructor(private http: HttpClient) { }
  
  getCommandeList():Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  
  createCommande(Commande: Object): any {
    return this.http.post(`${this.baseUrl}`, Commande);
  }
 

  updateCommande(value: any): any {
    return this.http.put(`${this.baseUrl}`, value);
  }

  deleteCommande(id: any): any {
    return this.http.delete(`${this.baseUrl}${id}`, { responseType: 'text' });
  }

  getCommande(id: any): any {
    return this.http.get(`${this.baseUrl}${id}`);
  }
 
}
