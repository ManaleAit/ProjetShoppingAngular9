import { Fournisseur } from './Fournisseur';
import { Client } from './Client';
import { Role } from './Role';

export class User{
    id:any;
	userName:string;
    password:string;
	email:string;
    fournisseur:Fournisseur;
    roles:Role[];
    client:Client;
}