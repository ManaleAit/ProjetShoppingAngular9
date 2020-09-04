import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { JwPaginationModule } from 'jw-angular-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { ToastrModule } from 'ngx-toastr'; 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
  
    ReactiveFormsModule,
   
    JwPaginationModule,
  
   // ToastrModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  
  declarations: [
    DashboardComponent,
   
 
  ]
})

export class AdminLayoutModule {}
