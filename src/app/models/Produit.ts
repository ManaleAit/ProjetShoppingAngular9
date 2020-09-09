import { Fournisseur } from './Fournisseur';
import { Commande } from './Commande';

export class Produit{
    id:any;
	libelle:string;
	photoPath:any;
	description:string;
	prix:any;
    commandes:Commande[];
	fournisseur:Fournisseur
    typeProduit:any;
}
