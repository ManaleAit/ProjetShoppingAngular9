import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/AjouterProduit', title: 'Ajouter un produit ',  icon:'add_business', class: '' },
    { path: '/afficher-produits', title: 'La liste des produits',  icon:'storefront', class: '' },

  ];
//gestion-marche
@Component({
  selector: 'app-sidebarFournisseur',
  templateUrl: './sidebarFournisseur.component.html',
  styleUrls: ['./sidebarFournisseur.component.css']
})
export class SidebarFournisseurComponent implements OnInit {
  menuItems: any[];
  authorize=false;
  username:any;
  constructor() { }

  ngOnInit() {
   
    this.username=localStorage.getItem('username')
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
