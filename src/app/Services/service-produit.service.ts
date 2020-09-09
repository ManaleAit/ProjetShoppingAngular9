import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceProduitService {
  private baseUrl = 'http://localhost:8092/produit/';

  constructor(private http: HttpClient) { }
  
  getProduitList():Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  
  createProduit(Produit: Object): any {
    return this.http.post(`${this.baseUrl}`, Produit);
  }
 

  updateProduit(value: any): any {
    return this.http.put(`${this.baseUrl}`, value);
  }

  deleteProduit(id: any): any {
    return this.http.delete(`${this.baseUrl}${id}`, { responseType: 'text' });
  }

  getProduit(id: any): any {
    return this.http.get(`${this.baseUrl}${id}`);
  }
 
}
