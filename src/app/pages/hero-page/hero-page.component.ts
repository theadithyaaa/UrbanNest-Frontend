import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [RouterLink, FormsModule , FormsModule],
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css'] 
})
export class HeroPageComponent {

  email: string = "";
  password: string = "";

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'admin123') {
      alert('Login successful');
      window.location.href = '/admin-dashboard';
    } else {
      alert('Invalid email or password');
    }
  }

}

