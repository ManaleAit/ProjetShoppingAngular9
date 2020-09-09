import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceUserService } from '../Services/service-user.service';
import { NotificationService } from '../Services/service-notifications.service';
import { User } from '../models/User';
import { Fournisseur } from '../models/Fournisseur';
import { Role } from '../models/Role';
@Component({
  selector: 'app-gestion-fournisseur',
  templateUrl: './gestion-fournisseur.component.html',
  styleUrls: ['./gestion-fournisseur.component.css']
})
export class GestionFournisseurComponent implements OnInit {
  users:  User[] = [];
  name: string;
  send:boolean=false;
  update:boolean=false;
  userSelect: User =new User();
  founisseur:Fournisseur;
  userSelectDelete: User =new User();
  user:User=new User();
  role:Role;
  constructor(private router: Router,private ServiceUserService:ServiceUserService, private notification: NotificationService) {

  }

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
  }
  
  
 
  ngOnInit() {
      this.ServiceUserService.getFournisseursList().subscribe((data : any) => {
      this.users= data;
      
      });
    
     
  }

  //fonction de filtrage
  Search() {
    if (this.name != "") {
      this.users = this.users.filter(res => {
        return res.userName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
    else if (this.name == "") {
      this.ngOnInit();
    }

  }
  save() {
    this.user.fournisseur=new Fournisseur();
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
      );
  }
  onSelectDelete(founisseur: User): void {
    this.userSelectDelete = founisseur;
  }
  onSelect(founisseur: User): void {
    this.userSelect= founisseur;
   
    this.FormulaireControl.get('userName').setValue(this.userSelect.userName);
    this.FormulaireControl.get('password').setValue(this.userSelect.password);
    this.FormulaireControl.get('email').setValue(this.userSelect.email);
    this.FormulaireControl.get('telephone').setValue(this.userSelect.fournisseur.telephone);
    this.FormulaireControl.get('entreprise').setValue(this.userSelect.fournisseur.entreprise);
    this.FormulaireControl.get('ville').setValue(this.userSelect.fournisseur.ville);
   
}
  onSubmitUpdate(){
    if (this.FormulaireControl.valid) {
      this.userSelect.userName=this.FormulaireControl.get('userName').value;
      this.userSelect.password=this.FormulaireControl.get('password').value;
      this.userSelect.email=this.FormulaireControl.get('email').value;
      this.userSelect.fournisseur.telephone=this.FormulaireControl.get('telephone').value;
      this.userSelect.fournisseur.entreprise=this.FormulaireControl.get('entreprise').value;
      this.userSelect.fournisseur.ville=this.FormulaireControl.get('ville').value;
    
    this.ServiceUserService.updateUser(this.userSelect)
    .subscribe(
      data => {
        this.notification.showSuccess("le fournisseur est bien modifier", "La modification de fournisseur "+this.userSelect.userName);
      },
      error => console.log(error));
      this.update = false;
    this.delay(1000).then(any => {
      this.ngOnInit();
    });
    } else  {
      this.notification.showWarning("Merci de remplir les champs du formulaire", "Attention!!!!!!!");
    }
   
  }

  onSubmitDelete() {
  
    this.ServiceUserService.deleteUser(this.userSelectDelete.id)
    .subscribe(
      data => {
        console.log(data);
        this.notification.showSuccess("le fournisseur est bien supprimer", "La suppression de fournisseur  "+this.userSelectDelete.userName);
      },
      error => console.log(error));
      this.delay(1000).then(any => {
       this.ngOnInit();
      });
  }
  compareFn(data1: any, data2: any) {

    return  data1 && data2 ? data1.id === data2.id : data1 === data2;
  }
   SendChange(){
     
     this.send=true;
     console.log(this.FormulaireControl);
   }
   SendChangeUpadte(){
    this.update =true;
   }

   onSubmit() {
    if (this.FormulaireControl.valid) {
      this.save();
      this.resetForm();
      this.delay(1000).then(any => {
        this.ngOnInit();
      });
    } else if (this.send) {
      this.notification.showWarning("Merci de remplir les champs du formulaire", "Attention!!!!!!!");
    }

  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("allow download"));
  }


  resetForm() {
    
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

  }
}
