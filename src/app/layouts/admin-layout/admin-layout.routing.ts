import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { GestionFournisseurComponent } from '../../Gestion-Fournisseur/gestion-fournisseur.component';
import { AjouterProduitComponent } from '../../Gestion-produit/ajouter-produit.component';
import { AfficherProduitsComponent } from '../../Gestion-produit/afficher-produits.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'Fournisseur',      component: GestionFournisseurComponent },
    { path: 'AjouterProduit',      component: AjouterProduitComponent },
    { path: 'afficher-produits',      component: AfficherProduitsComponent },
    
    
];
