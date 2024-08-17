import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Cab } from '../../models/cab';
import { TripBooking } from '../../models/trip-booking';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  cabs: Cab[] = [];
  booking: TripBooking = {
    tripId: 0,
    customerId: 0,
    driverId: 0,
    cabId: 0,
    pickupLocation: '',
    dropoffLocation: '',
    perKmRate: 0
  };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadAvailableCabs();
  }

  loadAvailableCabs(): void {
    this.customerService.viewAvailableCabs().subscribe({
      next: (cabs) => this.cabs = cabs,
      error: (error) => this.errorMessage = 'Failed to load cabs'
    });
  }

  bookCab(): void {
    this.customerService.bookCab(this.booking.customerId, this.booking).subscribe({
      next: (response) => this.successMessage = 'Booking successful!',
      error: (error) => this.errorMessage = 'Booking failed. Please try again.'
    });
  }
}
