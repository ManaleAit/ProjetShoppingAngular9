import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/Fournisseur', title: 'Gestion des Fournisseurs',  icon:'supervised_user_circle', class: '' },
    { path: '/MessageComponent', title: 'Messages',  icon:'mail', class: '' },

  ];
//gestion-marche
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
