import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { ServiceProduitService } from '../Services/service-produit.service';
import { Produit } from '../models/Produit';
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
  constructor(private ServiceProduitService:ServiceProduitService,private AuthenticationService:AuthenticationService) {

  }
  myFunction(){var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }}
  ngOnInit(){
    this.ServiceProduitService.getProduitList().subscribe((data : any) => {
      this.produits= data;
      
      });
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
}
