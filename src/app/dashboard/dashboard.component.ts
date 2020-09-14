import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Router } from '@angular/router';
import { ServiceCommandeService } from '../Services/service-commande.service';
import { Commande } from '../models/Commande';
import { ServiceClientService } from '../Services/service-client.service';
import { ServiceFournisseurService } from '../Services/service-fournisseur.service';
import * as CanvasJS from '../../assets/canvasjs.min';
import { ServiceProduitService } from '../Services/service-produit.service';
import { Produit } from '../models/Produit';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  authorizeEmployee = false;
  matricule: any;
  id: any;
  send = false;
  nbCommande=0;
  commandes:Commande[]=[];
  totalePrixCommande=0;
  nbClient=0;
  nbFournisseur=0;
  produits:Produit[]=[];
  pro1="";
  pro2="";
  pro3="";
  constructor(private ServiceProduitService:ServiceProduitService,private ServiceFournisseurService:ServiceFournisseurService,private ServiceClientService:ServiceClientService,private router: Router,private ServiceCommandeService:ServiceCommandeService) {

  }



  ngOnInit(){
    this.ServiceProduitService.getProduitList().subscribe((data : any) => {
      this.produits=data;
       this.pro1=this.produits[0].libelle;
       this.pro2=this.produits[1].libelle;
       this.pro3=this.produits[2].libelle;
       let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Les produits les plus commandés"
        },
        data: [{
          type: "column",
          dataPoints: [
            { y: 71, label: this.pro1 },
            { y: 55, label: this.pro2 },
            { y: 50, label: this.pro3  },
          ]
        }]
      });
        
      chart.render();

    
    });
    this.ServiceCommandeService.getCommandeList().subscribe((data : any) => {
      this.commandes= data;
      this.nbCommande=this.commandes.length;
      for (var i = 0; i < this.commandes.length; i++) {
         this.totalePrixCommande+=this.commandes[i].montantTotale;
      }
      });
      this.ServiceClientService.getClientList().subscribe((data : any) => {
       ;
        this.nbClient=data.length;
  
        });
        this.ServiceFournisseurService.getFournisseurList().subscribe((data : any) => {
          ;
           this.nbFournisseur=data.length;
     
           });
          
  }


}