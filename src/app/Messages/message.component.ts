import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from '../Services/service-notifications.service';

import { ServiceMessageContactService } from '../Services/service-MessageContact.service';
import { MessageContact } from '../models/MessageContact';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages: [];
  name: string;
  messagelectLue: MessageContact = new MessageContact();
  messagelectDelete: MessageContact = new MessageContact();
  constructor(private router: Router, private ServiceMessageContactService: ServiceMessageContactService, private notification: NotificationService) {

  }

  ngOnInit() {
    this.ServiceMessageContactService.getMessageContactList().subscribe((data: any) => {
      this.messages = data;
    });


  }
  lue(msg: MessageContact) {
    this.messagelectLue = msg;
    this.messagelectLue.isVue = true;
    this.ServiceMessageContactService.updateMessageContact(this.messagelectLue)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
    this.delay(1000).then(any => {
      this.ngOnInit();
    });
  }
  onSelectDelete(msg: MessageContact) {
    this.messagelectDelete = msg;
  }
  onSubmitDelete() {

    this.ServiceMessageContactService.deleteMessageContact(this.messagelectDelete.id)
      .subscribe(
        data => {
          console.log(data);
          this.notification.showSuccess("le message est bien supprimer", "La suppression de message  " + this.messagelectDelete.id);
        },
        error => console.log(error));
    this.delay(1000).then(any => {
      this.ngOnInit();
    });
  }


  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("allow download"));
  }

}
