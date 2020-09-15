import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageContact } from '../../models/MessageContact';
import { ServiceMessageContactService } from '../../Services/service-MessageContact.service';
import { NotificationService } from '../../Services/service-notifications.service'
@Component({
  selector: 'app-bodyAccueil',
  templateUrl: './bodyAccueil.component.html',
  styleUrls: ['./bodyAccueil.component.css']
})
export class BodyComponent implements OnInit {

  send = false;
  messageContact: MessageContact = new MessageContact();
  constructor(private router: Router, private notification: NotificationService, private ServiceMessageContactService: ServiceMessageContactService) { }

  ngOnInit() {

  }
  Formulaire = new FormGroup({
    objet: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  }
  );


  get objet() {
    return this.Formulaire.get('objet');
  }

  get message() {
    return this.Formulaire.get('message');
  }

  SendChange() {
    this.send = true;
  }
  onSubmit() {
    if (this.Formulaire.valid) {
      this.messageContact.objet = this.Formulaire.get('objet').value;
      this.messageContact.message = this.Formulaire.get('message').value;
      this.messageContact.isVue = false;
      this.ServiceMessageContactService.createMessageContact(this.messageContact)
        .subscribe(
          (data) => {

            this.notification.showSuccess("votre message est bien envoyé", "Le message bien envoyer")
          },
          error => { console.log(error); });

      this.send = false;
      this.Formulaire.get('objet').setValue('');
      this.Formulaire.get('message').setValue('');

    } else {
      this.notification.showWarning("Merci de remplir les champs du formulaire", "Attention!!!!!!!");

    }
  }
}
