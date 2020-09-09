import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../Services/service-notifications.service';
import { Produit } from '../models/Produit';
import { ServiceProduitService } from '../Services/service-produit.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Fournisseur } from '../models/Fournisseur';
@Component({
  selector: 'app-afficher-produits',
  templateUrl: './afficher-produits.component.html',
  styleUrls: ['./afficher-produits.component.css']
})
export class AfficherProduitsComponent implements OnInit {
  produits:[];
  produitSelectDelete:Produit;
  PhotoUpload: File;
  send:boolean=false;
  ProSelect:Produit=new Produit();
  produitCreate:Produit=new Produit();
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
    this.ServiceProduitService.DeletePhoto(this.produitSelectDelete.id).subscribe(
      res => {
        console.log(res);

      },
      error => console.log(error));

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
  

  onFileChange(event) {


    if (event.target.files.length > 0) {

      this.PhotoUpload = event.target.files[0];

    }

  }
  onSelectUpdate(pro: Produit): void {
    this.ProSelect = pro;
       this.FormulaireControl.get('libelle').setValue(this.ProSelect.libelle);
  
       this.FormulaireControl.get('description').setValue(this.ProSelect.description);
  
       this.FormulaireControl.get('prix').setValue(this.ProSelect.prix);
   
       this.FormulaireControl.get('typeProduit').setValue(this.ProSelect.typeProduit);
   
}
compareFn(data1: any, data2: any) {

  return data1 && data2 ? data1.id === data2.id : data1 === data2;
}
  update() {
   this.ProSelect.libelle=this.FormulaireControl.get('libelle').value;
   this.ProSelect.description=this.FormulaireControl.get('description').value;
   this.ProSelect.prix=this.FormulaireControl.get('prix').value;
   this.ProSelect.typeProduit=this.FormulaireControl.get('typeProduit').value;
    this.ProSelect.fournisseur=new Fournisseur();
    this.ProSelect.fournisseur.id=localStorage.getItem('id');
    this.ServiceProduitService.updateProduit(this.ProSelect)
      .subscribe(
        (data) => {
          console.log("data ", data);
          if(data!=null){
            if(this.PhotoUpload!=null){
            this.ServiceProduitService.DeletePhoto(data).subscribe(
              res => {
                console.log(res);
        
              },
              error => console.log(error));
          this.ServiceProduitService.uploadPhoto(this.PhotoUpload, data);
            }
          this.notification.showSuccess("le produit est bien modifier", "La modification d'un produit");

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
      this.update();
  
      this.delay(1000).then(any => {
        this.ServiceProduitService.getProduitList().subscribe((data : any) => {
          this.produits= data;
          
          });
       });
       this.send=false;
    } else if (this.send) {
      this.notification.showWarning("Merci de remplir les champs du formulaire", "Attention!!!!!!!");
    }
  
  }


  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("allow download"));
  }


}
