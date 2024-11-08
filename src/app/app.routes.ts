import { Routes } from '@angular/router';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    {
        path: "",
        component: HeroPageComponent
    },
    {
        path: "customer-dashboard",
        component: CustomerDashboardComponent
    },
    {
        path: "admin-dashboard",
        component: AdminDashboardComponent
    }
    
    
];
