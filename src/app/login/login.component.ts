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
              this.router.navigate(['/dashboard'])
              localStorage.setItem('token',data.toString());
              localStorage.setItem('username',data.userName);
              localStorage.setItem('email',data.email);
              this.roles=data.roles;
              this.role=this.roles[0];
              localStorage.setItem('role',this.role.name);
           
            /*this.roles.forEach(function(item){
              this.rolesString.push(item.name);
            });
            for (var i = 0; i < this.roles.length; i++) {
              this.rolesString.push(this.roles[i].name);
              console.log('ssss   '+this.rolesString[i].toString);
            }*/
        
            //localStorage.setItem('roles',this.rolesString.toLocaleString());

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