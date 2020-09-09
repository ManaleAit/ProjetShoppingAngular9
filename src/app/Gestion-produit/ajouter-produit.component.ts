import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from '../Services/service-notifications.service';
import { Fournisseur } from '../models/Fournisseur';
import { Role } from '../models/Role';
import { Produit } from '../models/Produit';
import { ServiceProduitService } from '../Services/service-produit.service';
@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {

  PhotoUpload: File;
  send:boolean=false;
  produitCreate:Produit=new Produit();
  constructor(private router: Router,private ServiceProduitService:ServiceProduitService, private notification: NotificationService) {

  }

  FormulaireControl= new FormGroup({
    libelle : new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    prix:new FormControl('', Validators.required),
    typeProduit:new FormControl('', Validators.required),
   
  }
  );


  get libelle() {
    return this.FormulaireControl.get('libelle');
  }
  get description() {
    return this.FormulaireControl.get('description');
  }
  get prix() {
    return this.FormulaireControl.get('prix');
  }
  get typeProduit() {
    return this.FormulaireControl.get('typeProduit');
  }
  
  
 
  ngOnInit() {
    
     
  }
  onFileChange(event) {


    if (event.target.files.length > 0) {

      this.PhotoUpload = event.target.files[0];

    }

  }
  save() {
    this.produitCreate=new Produit();
    this.produitCreate.libelle=this.FormulaireControl.get('libelle').value;
    this.produitCreate.description=this.FormulaireControl.get('description').value;
    this.produitCreate.prix=this.FormulaireControl.get('prix').value;
    this.produitCreate.typeProduit=this.FormulaireControl.get('typeProduit').value;
    this.produitCreate.fournisseur=new Fournisseur();
    this.produitCreate.fournisseur.id=localStorage.getItem('id');
    this.ServiceProduitService.createProduit(this.produitCreate)
      .subscribe(
        (data) => {
          console.log("data ", data);
          if(data!=null){
          this.ServiceProduitService.uploadPhoto(this.PhotoUpload, data);

          this.notification.showSuccess("le produit est bien ajouté", "L'ajout d'un produit");

        }


        },
        error => {      
          console.log("Error", error);
        }
      );
  }



   SendChange(){
     
     this.send=true;
     console.log(this.FormulaireControl);
   }
  
   onSubmit() {
    if (this.FormulaireControl.valid) {
      this.save();
      this.resetForm();
     
    } else if (this.send) {
      this.notification.showWarning("Merci de remplir les champs du formulaire", "Attention!!!!!!!");
    }

  }


   resetForm() {
    
   this.FormulaireControl.reset({
    libelle : '',
    description:'',
    prix:'',
    typeProduit:'',
    }
    );
    this.send = false;

  }
}
