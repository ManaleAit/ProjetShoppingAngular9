import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { JwPaginationModule } from 'jw-angular-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GestionFournisseurComponent } from '../../Gestion-Fournisseur/gestion-fournisseur.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AjouterProduitComponent } from '../../Gestion-produit/ajouter-produit.component';
import { ServiceUserService } from '../../Services/service-user.service';
import { ErrorInterceptor } from './error.interceptor';
import { AfficherProduitsComponent } from '../../Gestion-produit/afficher-produits.component';
import { ServiceCommandeService } from '../../Services/service-commande.service';
import { ServiceClientService } from '../../Services/service-client.service';
//import { ToastrModule } from 'ngx-toastr'; 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    JwPaginationModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
   // ToastrModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [   ServiceUserService,ServiceCommandeService,ServiceClientService],//,{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  
  declarations: [
    DashboardComponent,
    GestionFournisseurComponent,
    AjouterProduitComponent,
    AfficherProduitsComponent,
    
  ]
})

export class AdminLayoutModule {}
