import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from '../home/home';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = false;
  isScrolled = false;

  toggleMenu(open: boolean) {
    this.isMenuOpen = open;

    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.toggleMenu(false);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

}
