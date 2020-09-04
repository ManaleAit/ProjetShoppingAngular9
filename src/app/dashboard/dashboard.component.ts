import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  authorizeEmployee = false;
  matricule: any;
  id: any;
  send = false;
  constructor(private router: Router) {

  }



  ngOnInit(){}}