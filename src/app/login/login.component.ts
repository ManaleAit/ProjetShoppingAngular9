import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../Services/authentication.service';
import { ServiceUserService } from '../Services/service-user.service';
import { NotificationService } from '../Services/service-notifications.service';
import { Role } from '../models/Role';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  send: boolean = false;
  roles:Role[];
  rolesString=[''];
  role:Role=new Role();
  constructor(protected router: Router, private notification: NotificationService,private AuthenticationService:AuthenticationService,private ServiceUserService:ServiceUserService) {

  }

  ngOnInit() {
   
 
  }

  Formulaire = new FormGroup({
    userName : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),



  }
  );

  
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
      this.AuthenticationService.connecxion(this.Formulaire.value)
      .subscribe(
        (data) => {

           this.ServiceUserService.getUserByUserNamePassword(this.Formulaire.value)
           .subscribe(
            (data) => {
              console.log(data);
              
              localStorage.setItem('token',data.toString());
              this.roles=data.roles;
              this.role=this.roles[0];
              localStorage.setItem('role',this.role.name);
              localStorage.setItem('username',data.userName);
              localStorage.setItem('email',data.email);
              if(data.fournisseur!=null){
                localStorage.setItem('id',data.fournisseur.id);
              }
              
              if(this.role.name=='user'){
                this.router.navigate(['/espaceClient'])

              }
              else{
                this.router.navigate(['/dashboard'])
              }
           
            },
            error => {console.log(error);});
      
        },
        error => {console.log(error);});


  // alert(this.AuthenticationService.connecxion(this.Formulaire.value)+"yyyy  "+this.ServiceUserService.getUserByUserName(this.Formulaire.get("userName").value));

    }else{
      this.notification.showWarning("Merci de remplir les champs du formulaire", "Attention!!!!!!!");

    }
  }
}