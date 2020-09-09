import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../Services/service-notifications.service';
import { Produit } from '../models/Produit';
import { ServiceProduitService } from '../Services/service-produit.service';
@Component({
  selector: 'app-afficher-produits',
  templateUrl: './afficher-produits.component.html',
  styleUrls: ['./afficher-produits.component.css']
})
export class AfficherProduitsComponent implements OnInit {
  produits:[];
  produitSelectDelete:Produit;
  constructor(private ServiceProduitService:ServiceProduitService,private notification:NotificationService) {

  }

 
  ngOnInit() {
    this.ServiceProduitService.getProduitList().subscribe((data : any) => {
      this.produits= data;
      
      });
  }
  onSelectDelete(produit: Produit): void {
    this.produitSelectDelete = produit;
  }
  onSubmitDelete() {
  
    this.ServiceProduitService.deleteProduit(this.produitSelectDelete.id)
    .subscribe(
      data => {
        console.log(data);
        this.notification.showSuccess("le produit est bien supprimer", "La suppression de produit  "+this.produitSelectDelete.libelle);
      },
      error => console.log(error));
      this.delay(1000).then(any => {
       this.ngOnInit();
      });
  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("allow download"));
  }


}
