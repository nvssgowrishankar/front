import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/register/register.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { DriverDashboardComponent } from './components/driver-dashboard/driver-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TripBookingComponent } from './components/trip-booking/trip-booking.component';
import { AuthGuard } from './components/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login/customer', component: LoginComponent },
  { path: 'login/driver', component: LoginComponent },
  { path: 'login/admin', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'customer-dashboard', component: CustomerDashboardComponent, canActivate: [AuthGuard] },
  { path: 'driver-dashboard', component: DriverDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'trip-booking', component: TripBookingComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
