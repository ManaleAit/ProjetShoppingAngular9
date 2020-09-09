import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceUserService } from '../Services/service-user.service';
import { NotificationService } from '../Services/service-notifications.service';
import { User } from '../models/User';
import { Fournisseur } from '../models/Fournisseur';
import { Role } from '../models/Role';
@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {

  fileUpload: File;
  constructor(private router: Router,private ServiceUserService:ServiceUserService, private notification: NotificationService) {

  }

  
 
  ngOnInit() {
    
     
  }
  onFileChange(event) {


    if (event.target.files.length > 0) {

      this.fileUpload = event.target.files[0];

    }

  }
  save() {

  }



   SendChange(){
    
   }
  
   onSubmit() {

  }

}
