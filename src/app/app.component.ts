import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeroPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UrbanNest_frontend';
}
