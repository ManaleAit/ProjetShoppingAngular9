import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import {NotificationService} from '../app/Services/service-notifications.service';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {AccueilModule} from '../app/page-accueil/page-accueil.module';

import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.interceptor';
import {PageAccueilComponent} from './page-accueil/page-accueil.component';
import {LoginComponent} from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { AuthenticationService } from './Services/authentication.service';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './Services/AuthGuard';
import { EspaceClientComponent } from './Espace-client/espace-client.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ServiceCommandeService } from './Services/service-commande.service';
//import { TokenInterceptor } from './Services/token-interceptor';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    StorageServiceModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpModule,
    AccueilModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ToastrModule.forRoot(),
    ModalModule.forRoot()
   
  ], 
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PageAccueilComponent,
    LoginComponent,
    RegistrationComponent,
    EspaceClientComponent,


  ],
  providers: [
    AuthGuard,
    NotificationService,{ provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    ,AuthenticationService,ServiceCommandeService,//,{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  
  bootstrap: [AppComponent],
})
export class AppModule {
}