import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ErroNotificationService } from './error-notifications.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router,private notification:ErroNotificationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError( (error) => {
            //console.log('ssssssssssssssssssssssssssss');
           //console.log("ErrorInterceptor  : " + error);

           const errorConst = error.error.message || error.statusText;
           let errorMessage = '';

           if(error.error.hasOwnProperty('message')){    
             // client-side error
   
              errorMessage = `Error: ${error.error.message}`;
   
           } else {
   
             // server-side error
   
             errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   
           }
         
           console.log("error message:"+errorMessage);
           this.notification.showError(errorMessage, "Erreur!!!!!");
           return throwError(errorConst);
       }))
    }
}