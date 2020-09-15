import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { ServiceProduitService } from '../Services/service-produit.service';
import { Produit } from '../models/Produit';
import { Router } from '@angular/router';
import { ServiceCommandeService } from '../Services/service-commande.service';
import { Commande } from '../models/Commande';
import { Client } from '../models/Client';
import { NotificationService } from '../Services/service-notifications.service';
import { ServicePaymentService } from '../Services/service-payment.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-espace-client',
  templateUrl: './espace-client.component.html',
  styleUrls: ['./espace-client.component.css']
})
export class EspaceClientComponent implements OnInit {

  produits: Produit[];
  mobilierVisible = false;
  cosmeticVisible = false;
  electomenageVisible = false;
  transportVisible = false;
  commandeCreate: Commande = new Commande();
  commande: Produit[] = [];
  clientsCommande: Client[] = [];
  clientCommande: Client = new Client();
  Totale = 0;
  userName = "";
  send = false;
  constructor(private ServicePaymentService: ServicePaymentService, private notification: NotificationService, private router: Router, private ServiceProduitService: ServiceProduitService, private AuthenticationService: AuthenticationService, private ServiceCommandeService: ServiceCommandeService) {

  }
  Formulaire = new FormGroup({
    price: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    method: new FormControl('', Validators.email),
    intent: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  }
  );
  get price() {
    return this.Formulaire.get('price');
  }
  get currency() {
    return this.Formulaire.get('currency');
  }
  get method() {
    return this.Formulaire.get('method');
  }
  get intent() {
    return this.Formulaire.get('intent');
  }
  get description() {
    return this.Formulaire.get('description');
  }
  priceSet(){
    this.Formulaire.get('price').setValue(this.Totale);
  }
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  ajouterProduit(pro: Produit) {
    this.commande.push(pro);
    this.Totale += pro.prix;

  }
  getList() {
    return this.commande;
  }
  removeProduit(pro: Produit) {
    const index: number = this.commande.indexOf(pro);
    if (index !== -1) {
      this.commande.splice(index, 1);
      this.Totale -= pro.prix;
    }
  }
  ngOnInit() {
    this.ServiceProduitService.getProduitList().subscribe((data: any) => {
      this.produits = data;

    });
    this.userName = localStorage.getItem('username');
  }
  logout() {
    this.AuthenticationService.logoutUser();
  }

  SendChange() {
    this.send = true;
  }
  mobilier() {
    this.mobilierVisible = true;
    this.cosmeticVisible = false;
    this.electomenageVisible = false;
    this.transportVisible = false;
  }
  cosmetic() {
    this.mobilierVisible = false;
    this.cosmeticVisible = true;
    this.electomenageVisible = false;
    this.transportVisible = false;
  }
  electomenage() {
    this.mobilierVisible = false;
    this.cosmeticVisible = false;
    this.electomenageVisible = true;
    this.transportVisible = false;
  }
  transport() {
    this.mobilierVisible = false;
    this.cosmeticVisible = false;
    this.electomenageVisible = false;
    this.transportVisible = true;
  }
  payment() {
    localStorage.setItem('commande', this.commande.toString());
    this.router.navigate(['/PaymentComponent']);
  }
  onSubmit() {

    if (this.Formulaire.valid) {
      this.clientCommande.id = localStorage.getItem('idUser');
      this.clientsCommande.push(this.clientCommande);
      this.commandeCreate.clients = this.clientsCommande;
      this.commandeCreate.produits = this.commande;
      this.ServicePaymentService.Payment(this.Formulaire.value).subscribe(
        (data) => {
          console.log("data ", data);
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


        },
        error => {
          console.log("Error", error);
        });

    } else {
      this.notification.showWarning("Merci de remplir les champs du formulaire", "Attention!!!!!!!");

    }

  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("allow download"));
  }

}
