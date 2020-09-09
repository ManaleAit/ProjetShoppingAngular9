import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceUserService } from '../Services/service-user.service';
import { NotificationService } from '../Services/service-notifications.service';
import { User } from '../models/User';
import { Fournisseur } from '../models/Fournisseur';
import { Role } from '../models/Role';
@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  /*users:  User[] = [];
  name: string;
  send:boolean=false;
  update:boolean=false;
  userSelect: User =new User();
  founisseur:Fournisseur;
  userSelectDelete: User =new User();
  user:User=new User();
  role:Role;*/
  fileUpload: File;
  constructor(private router: Router,private ServiceUserService:ServiceUserService, private notification: NotificationService) {

  }
/*
  FormulaireControl= new FormGroup({
    userName : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email:new FormControl('', Validators.email),
    ville:new FormControl('', Validators.required),
    telephone:new FormControl('', Validators.required),
    entreprise:new FormControl('', Validators.required),
  }
  );

  get telephone() {
    return this.FormulaireControl.get('telephone');
  }
  get entreprise() {
    return this.FormulaireControl.get('entreprise');
  }
  get userName() {
    return this.FormulaireControl.get('userName');
  }
  get email() {
    return this.FormulaireControl.get('email');
  }
  get ville() {
    return this.FormulaireControl.get('ville');
  }
  get password() {
    return this.FormulaireControl.get('password');
  }*/
  
  
 
  ngOnInit() {
    
     
  }
  onFileChange(event) {


    if (event.target.files.length > 0) {

      this.fileUpload = event.target.files[0];

    }

  }
  save() {
   /* this.user.fournisseur=new Fournisseur();
    this.founisseur=new Fournisseur();
    this.founisseur.ville=this.FormulaireControl.get('ville').value;
    this.founisseur.telephone=this.FormulaireControl.get('telephone').value;
    this.founisseur.entreprise=this.FormulaireControl.get('entreprise').value;
    this.user.fournisseur=this.founisseur;
    this.user.userName=this.FormulaireControl.get('userName').value;
    this.user.email=this.FormulaireControl.get('email').value;
    this.user.password=this.FormulaireControl.get('password').value;
    this.role=new Role();
    this.role.id=3;
    this.user.roles=[];
    this.user.roles.push(this.role);
    this.ServiceUserService.createUser(this.user)
      .subscribe(
        (data) => {
          console.log("data ", data);

          this.notification.showSuccess("le founisseur est bien ajouté", "L'ajout d'un founisseur");


        },
        error => {      
          console.log("Error", error);
        }
      );*/
  }



   SendChange(){
     
     /*this.send=true;
     console.log(this.FormulaireControl);*/
   }
  
   onSubmit() {
   /* if (this.FormulaireControl.valid) {
      this.save();
      this.resetForm();
      this.delay(1000).then(any => {
        this.ngOnInit();
      });
    } else if (this.send) {
      this.notification.showWarning("Merci de remplir les champs du formulaire", "Attention!!!!!!!");
    }
*/
  }


  /* resetForm() {
    
   this.FormulaireControl.reset({
      userName : '',
      password: '',
      email:'',
      ville:'',
      telephone:'',
      entreprise:'',
    }
    );
    this.send = false;
    this.update = false;

  }*/
}
