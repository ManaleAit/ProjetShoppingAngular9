import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthRequest } from '../models/AuthRequest';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService   {
  private baseUrl = 'http://localhost:8092/authenticate';
  token:any;
  isLoggedIn=false;

 constructor(private http: HttpClient,
             protected router: Router) {
 }
 connecxion(value: any ){
  this.isLoggedIn=true;
  return this.http.post(`${this.baseUrl}`, value, { responseType: 'text' as 'json'  });

}

logoutUser() {
  this.isLoggedIn=false;
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  
  this.router.navigate(['/Accueil'])
}

getToken() {
  return localStorage.getItem('token')
}

loggedIn() {
  return !!localStorage.getItem('token')    
}


}




