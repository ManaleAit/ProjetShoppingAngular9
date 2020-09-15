import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../Services/authentication.service';
import { ServiceUserService } from '../Services/service-user.service';
import { NotificationService } from '../Services/service-notifications.service';
import { Client } from '../models/Client';
import { User } from '../models/User';
import { Role } from '../models/Role';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  send: boolean = false;
  client:Client;
  user:User=new User();
  role:Role;
  constructor(protected router: Router, private notification: NotificationService,private ServiceUserService:ServiceUserService) {

  }

  ngOnInit() {
   
 
  }

  Formulaire = new FormGroup({
    userName : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email:new FormControl('', Validators.email),
    ville:new FormControl('', Validators.required),
    telephone:new FormControl('', Validators.required),


  }
  );
  get telephone() {
    return this.Formulaire.get('telephone');
  }
  get ville() {
    return this.Formulaire.get('ville');
  }
  get email() {
    return this.Formulaire.get('email');
  }
  
  get userName() {
    return this.Formulaire.get('userName');
  }

  get password() {
    return this.Formulaire.get('password');
  }

  SendChange() {
    this.send = true;
  }
  onSubmit(){
    if (this.Formulaire.valid) {
     
      this.user.client=new Client();
      this.client=new Client();
      this.client.ville=this.Formulaire.get('ville').value;
      this.client.telephone=this.Formulaire.get('telephone').value;
      this.client.isActive=false;
      this.user.client=this.client;
      this.user.userName=this.Formulaire.get('userName').value;
      this.user.email=this.Formulaire.get('email').value;
      this.user.password=this.Formulaire.get('password').value;
      this.role=new Role();
      this.role.id=2;
      this.user.roles=[];
      this.user.roles.push(this.role);
      this.ServiceUserService.createUser(this.user)
      .subscribe(
        (data) => {

         this.router.navigate(['/login'])

         this.notification.showSuccess("Vous etes bien inscrit","l'inscription bien effectuer");
         
        },
        error => {console.log(error);});

       this.send=false;

    }else{
      this.notification.showWarning("Merci de remplir les champs du formulaire", "Attention!!!!!!!");

    }
  }
}