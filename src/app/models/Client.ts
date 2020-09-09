import { User } from './User';
import { Commande } from './Commande';

export class Client{
    id:any;
	ville:string;
	telephone:string;
	isActive=false;
	user:User;
	commandes:Commande[];
}
