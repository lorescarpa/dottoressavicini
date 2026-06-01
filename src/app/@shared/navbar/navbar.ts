import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'av-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isMenuOpen = false;
  navLinks = [
    { label: 'Home', fragment: '/' },
    { label: 'About me', fragment: 'about-me' },
    { label: 'Services', fragment: 'services' },
    // { label: 'About Psycoterapy', fragment: 'psycotherapy' },
    // { label: 'Reading room', fragment: 'reading-room' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
