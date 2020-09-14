import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { ServiceProduitService } from '../Services/service-produit.service';
import { Produit } from '../models/Produit';
import { Router } from '@angular/router';
import { ServiceCommandeService } from '../Services/service-commande.service';
import { Commande } from '../models/Commande';
import { Client } from '../models/Client';
import { NotificationService } from '../Services/service-notifications.service';
@Component({
  selector: 'app-espace-client',
  templateUrl: './espace-client.component.html',
  styleUrls: ['./espace-client.component.css']
})
export class EspaceClientComponent implements OnInit {
 
  produits:Produit[];
  mobilierVisible=false;
  cosmeticVisible=false;
  electomenageVisible=false;
  transportVisible=false;
  commandeCreate:Commande=new Commande();
  commande: Produit[] =[];
  clientsCommande:Client[]=[];
  clientCommande:Client=new Client();
  Totale=0;
  userName="";
  constructor(private notification: NotificationService,private router: Router,private ServiceProduitService:ServiceProduitService,private AuthenticationService:AuthenticationService,private ServiceCommandeService:ServiceCommandeService) {

  }
  myFunction(){var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }}
  ajouterProduit(pro:Produit) {
   this.commande.push(pro);
   this.Totale+=pro.prix;
  
  }
  getList(){
    return this.commande;
  }
  removeProduit(pro:Produit) { 
    const index: number = this.commande.indexOf(pro);
    if (index !== -1) {
        this.commande.splice(index, 1);
        this.Totale-=pro.prix;
    }      
   }
  ngOnInit(){
    this.ServiceProduitService.getProduitList().subscribe((data : any) => {
      this.produits= data;
      
      });
    this.userName=localStorage.getItem('username');
  }
  logout(){
    this.AuthenticationService.logoutUser();
 }
 mobilier(){
this.mobilierVisible=true;
this.cosmeticVisible=false;
this.electomenageVisible=false;
this.transportVisible=false;
 }
 cosmetic(){
  this.mobilierVisible=false;
  this.cosmeticVisible=true;
  this.electomenageVisible=false;
  this.transportVisible=false;
 }
 electomenage(){
  this.mobilierVisible=false;
  this.cosmeticVisible=false;
  this.electomenageVisible=true;
  this.transportVisible=false;
 }
 transport(){
  this.mobilierVisible=false;
  this.cosmeticVisible=false;
  this.electomenageVisible=false;
  this.transportVisible=true;
 }
 payment(){
  localStorage.setItem('commande',this.commande.toString());
  this.router.navigate(['/PaymentComponent']);
 }
 onSubmit(){
  this.clientCommande.id=localStorage.getItem('idUser');
  this.clientsCommande.push(this.clientCommande);
  this.commandeCreate.clients=this.clientsCommande;
  this.commandeCreate.produits=this.commande;
  this.ServiceCommandeService.createCommande(this.commandeCreate)
  .subscribe(
    (data) => {
      console.log("data ", data);

      this.notification.showSuccess("la commande est bien passer  ", "Success!");


    },
    error => {      
      console.log("Error", error);
    }
  );
 }
 async delay(ms: number) {
  await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("allow download"));
}

}
