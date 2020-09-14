import { Produit } from './Produit';
import { Client } from './Client';

export class Commande{
    id:any;
	produits:Produit[];
	clients:Client[];
	montantTotale:any;
}