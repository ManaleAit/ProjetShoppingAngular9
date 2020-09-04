import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
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
   
  ], 
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PageAccueilComponent,
    LoginComponent


  ],
  providers: [
    NotificationService,{ provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
   
  ],
  
  bootstrap: [AppComponent],
})
export class AppModule {
}