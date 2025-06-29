import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  isCompact = false;

  constructor(private router: Router) {
  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      // Si on n'est pas sur la page d'accueil, isCompact = true
      if (event.urlAfterRedirects !== '/') {
        this.isCompact = true;
      } else {
        this.isCompact = window.scrollY > 50;
      }
    });
}


  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Ne compact pas si on n’est pas sur la home : déjà forcé à true
    if (this.router.url === '/') {
      this.isCompact = window.scrollY > 10;
    }
  }
  
  isDropdownOpen = false;

  showMenu() {
    this.isDropdownOpen = true;
  }

  hideMenu() {
    this.isDropdownOpen = false;
  }

  get isFullscreen(): boolean {
    return !this.isCompact && this.router.url === '/';
  }
}
