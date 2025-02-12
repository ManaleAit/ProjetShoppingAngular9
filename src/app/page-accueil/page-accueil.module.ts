import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footerAccueil/footerAccueil.component';
import { NavbarComponent } from './navbarAccueil/navbarAccueil.component';
import { BodyComponent } from './bodyAccueil/bodyAccueil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    BodyComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    BodyComponent
  ]
})
export class AccueilModule { }
