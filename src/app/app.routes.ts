import { Routes } from '@angular/router';
import { AjouterComponent } from './page/ajouter/ajouter.component';
import { ModifierComponent } from './page/modifier/modifier.component';
import { ReadComponent } from './page/read/read.component';
import { DeleteComponent } from './page/delete/delete.component';

export const routes: Routes = [
    {path:'/gestion/list',component:ReadComponent },
    { path:'/gestion/form/ajouter',component:AjouterComponent },
   { path:'/gestion/form/modifier',component:ModifierComponent },

       { path:'/gestion/form/supprimer',component:DeleteComponent },

    



];
