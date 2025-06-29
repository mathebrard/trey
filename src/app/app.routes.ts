import { Routes } from '@angular/router';
import { ProjetComponent } from './features/projet/pages/projet/projet.component';
import { AgenceComponent } from './features/agence/pages/agence/agence.component';
import { ContactComponent } from './features/contact/contact.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { VillaComponent } from './features/projet/pages/villa/villa.component';
import { PhilosophieComponent } from './features/agence/pages/philosophie/philosophie.component';
import { ServicesComponent } from './features/agence/pages/services/services.component';
import { HistoireComponent } from './features/agence/pages/histoire/histoire.component';
import { ProjectDetailComponent } from './features/projet/pages/project-detail/project-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: ProjetComponent,
    children: [
      {
        path: 'projet/villa',
        component: VillaComponent,
      }
    ]
  },
  {
    path: 'projet',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'projet/:slug',
    component: ProjectDetailComponent
  },
  {
    path: 'agence',
    component: AgenceComponent,
    children: [
      {
        path: '',
        redirectTo: 'philosophie',
        pathMatch: 'full'
      },
      {
        path: 'philosophie',
        component: PhilosophieComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'histoire',
        component: HistoireComponent
      }
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },
];
