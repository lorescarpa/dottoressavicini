import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './@shared/footer/footer';
import { Navbar } from './@shared/navbar/navbar';
import NavigationMenu from './@ui/navigation-menu/navigation-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, NavigationMenu],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('dottoressavicini');
}
