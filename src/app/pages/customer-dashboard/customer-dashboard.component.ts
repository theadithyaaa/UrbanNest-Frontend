import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../common/navbar/navbar.component";

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent {

}
