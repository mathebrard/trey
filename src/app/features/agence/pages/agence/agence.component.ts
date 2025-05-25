import { Component } from '@angular/core';
import { NavbarAgenceComponent } from '../../navbar-agence/navbar-agence.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-agence',
  imports: [NavbarAgenceComponent, RouterModule],
  templateUrl: './agence.component.html',
  styleUrl: './agence.component.scss'
})
export class AgenceComponent {

}
