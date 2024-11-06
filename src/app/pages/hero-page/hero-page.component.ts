import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css'] 
})
export class HeroPageComponent {

}
