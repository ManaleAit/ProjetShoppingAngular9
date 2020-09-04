import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerAccueil',
  templateUrl: './footerAccueil.component.html',
  styleUrls: ['./footerAccueil.component.css']
})
export class FooterComponent implements OnInit {
  test : Date = new Date();
  
  constructor() { }

  ngOnInit() {
  }

}
