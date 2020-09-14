import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {PageAccueilComponent} from './page-accueil/page-accueil.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {LoginComponent} from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './Services/AuthGuard';
import { EspaceClientComponent } from './Espace-client/espace-client.component';
const routes: Routes =[
  {
    path: '',
    //redirectTo: 'dashboard',
    redirectTo: 'Accueil',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,//canActivate: [AuthGuard],
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }, ]}
    ,
  {
    path: 'Accueil',
     component: PageAccueilComponent
  },  
  {
    path: 'login',
     component: LoginComponent
  },  {
    path: 'registration',
     component: RegistrationComponent
  },   {
    path: 'espaceClient',
     component: EspaceClientComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
