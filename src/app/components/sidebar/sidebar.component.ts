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
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
  
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
  role:string='Responsable';
  constructor() { }

  ngOnInit() {
   
    
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
