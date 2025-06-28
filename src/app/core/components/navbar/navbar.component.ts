import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  isCompact = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isCompact = window.scrollY > 50;
  }
  
  isDropdownOpen = false;

  showMenu() {
    this.isDropdownOpen = true;
  }

  hideMenu() {
    this.isDropdownOpen = false;
  }
}
