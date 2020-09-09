import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceFournisseurService {
  private baseUrl = 'http://localhost:8092/fournisseur/';

  constructor(private http: HttpClient) { }
  
  getFournisseurList():Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  
  createFournisseur(Fournisseur: Object): any {
    return this.http.post(`${this.baseUrl}`, Fournisseur);
  }
 

  updateFournisseur(value: any): any {
    return this.http.put(`${this.baseUrl}`, value);
  }

  deleteFournisseur(id: any): any {
    return this.http.delete(`${this.baseUrl}${id}`, { responseType: 'text' });
  }

  getFournisseur(id: any): any {
    return this.http.get(`${this.baseUrl}${id}`);
  }
  getFournisseurByFournisseurName(id: any): any {
    return this.http.get(`${this.baseUrl}${id}Role`);
  }

}
