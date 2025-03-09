import { Routes } from '@angular/router';
import { ProjetComponent } from './features/projet/pages/projet/projet.component';
import { AgenceComponent } from './features/agence/pages/agence/agence.component';
import { ContactComponent } from './features/contact/contact.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { VillaComponent } from './features/projet/pages/villa/villa.component';

export const routes: Routes = [
  { path: '', component: ProjetComponent },
  {
    path: 'projet',
    component: ProjetComponent,
    children: [
      {
        path: 'villa', // child route path MARCHE PAS POUR LINSTANT
        component: VillaComponent, // child route component that the router renders
      },
    ],
  },
  { path: 'agence', component: AgenceComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },
];
