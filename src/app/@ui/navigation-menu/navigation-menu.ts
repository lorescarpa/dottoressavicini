// Unstyled version generated from navigation-menu.example.ts
// Original styles property has been removed.
import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  NgpNavigationMenu,
  NgpNavigationMenuContent,
  NgpNavigationMenuContentItem,
  NgpNavigationMenuItem,
  NgpNavigationMenuList,
  NgpNavigationMenuTrigger,
} from 'ng-primitives/navigation-menu';

@Component({
  selector: 'av-navigation-menu',
  imports: [
    NgClass,
    NgpNavigationMenu,
    NgpNavigationMenuList,
    NgpNavigationMenuItem,
    // NgpNavigationMenuTrigger,
    // NgpNavigationMenuContent,
    // NgpNavigationMenuContentItem,
    RouterModule,
  ],
  template: `
    <!-- DESKTOP VIEW -->
    <nav
      class="hidden sm:flex items-center w-full bg-gradient-to-r from-olive-900 to-olive-800 shadow-md transition-colors duration-300"
      ngpNavigationMenu
    >
      <div class="container mx-auto px-4 py-2 inline-flex justify-between">
        <div
          class="text-olive-100 text-2xl font-bold font-italiana cursor-default flex gap-3 items-center"
        >
          <img src="assets/resources/logo.png" alt="logo" class="h-[30px] opacity-80" />
          <a
            [routerLink]="'/'"
            routerLinkActive="active"
            class="px-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 rounded-sm transition-all duration-300"
          >
            Alessia Vicini
          </a>
        </div>
        <ul class="navigation-menu-list inline-flex gap-4 items-center" ngpNavigationMenuList>
          @for (item of navLinks(); track $index) {
            <li
              ngpNavigationMenuItem
              class="text-olive-50 hover:text-olive-200 text-xs font-light uppercase hover:scale-105 transition-all duration-300"
            >
              <a
                ngpNavigationMenuLink
                [routerLink]="item.fragment"
                class="p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 rounded-sm transition-all duration-300"
              >
                {{ item.label }}
              </a>
            </li>
          }
        </ul>
      </div>
    </nav>

    <!-- MOBILE VIEW -->
    <nav
      class="sm:hidden items-center w-full bg-gradient-to-r from-olive-900 to-olive-800 shadow-md transition-colors duration-300"
      [ngClass]="{ 'h-screen': isMenuOpen(), 'h-auto': !isMenuOpen() }"
      ngpNavigationMenu
    >
      <div class="container mx-auto px-4 py-2">
        <div class="flex flex-row w-full md:w-auto justify-between">
          <div
            class="text-olive-100 text-2xl font-bold font-italiana cursor-default flex gap-3 items-center"
          >
            <img src="assets/resources/logo.png" alt="logo" class="h-[30px] opacity-80" />
            <a
              [routerLink]="'/'"
              routerLinkActive="active"
              class="px-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 rounded-sm transition-all duration-300"
            >
              Alessia Vicini
            </a>
          </div>
          <button
            (click)="toggleMenu()"
            class="text-olive-100 md:hidden"
            [ngClass]="{ 'ico-open': isMenuOpen(), 'ico-closed': !isMenuOpen() }"
          >
            <i class="bi bi-list"></i>
          </button>
        </div>
        @if (isMenuOpen()) {
          <ul
            class="navigation-menu-list flex flex-col items-center p-4 mt-4 gap-4 animate-fadeDown"
            ngpNavigationMenuList
          >
            @for (item of navLinks(); track $index) {
              <li
                ngpNavigationMenuItem
                class="text-olive-50 hover:text-olive-200 text-xs font-light uppercase hover:scale-105 transition-all duration-300"
              >
                <a
                  ngpNavigationMenuLink
                  [routerLink]="item.fragment"
                  (click)="toggleMenu()"
                  class="p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 rounded-sm transition-all duration-300"
                >
                  {{ item.label }}
                </a>
              </li>
            }
          </ul>
        }
      </div>
    </nav>
  `,
  styles: `
    @keyframes rotateR {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(90deg);
      }
    }

    @keyframes rotateL {
      0% {
        transform: rotate(90deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    @keyframes slideIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes slideOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    .ico-open {
      animation: rotateR 200ms ease-in;
      transform: rotate(90deg);
    }

    .ico-closed {
      animation: rotateL 200ms ease-in;
      transform: rotate(0deg);
    }

    .menu-open {
      animation: slideIn 200ms ease-in;
    }

    .menu-closed {
      animation: slideOut 200ms ease-in;
    }
  `,
})
export default class NavigationMenu {
  isMenuOpen = signal(false);
  readonly navLinks = signal([
    { label: 'Home', fragment: '/' },
    { label: 'About me', fragment: 'about-me' },
    { label: 'Services', fragment: 'services' },
    // { label: 'About Psycoterapy', fragment: 'psycotherapy' },
    // { label: 'Reading room', fragment: 'reading-room' },
  ]);

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
