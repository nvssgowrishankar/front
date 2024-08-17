import { Component } from '@angular/core';
import { TripBookingService } from '../../services/trip-booking.service';
import { TripBooking } from '../../models/trip-booking';

@Component({
  selector: 'app-trip-booking',
  templateUrl: './trip-booking.component.html',
  styleUrls: ['./trip-booking.component.css']
})
export class TripBookingComponent {
  tripBooking: TripBooking = {
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

  constructor(private tripBookingService: TripBookingService) {}

  bookTrip(): void {
    this.tripBookingService.saveTripBooking(this.tripBooking).subscribe({
      next: (response) => this.successMessage = 'Trip booked successfully!',
      error: (error) => this.errorMessage = 'Failed to book trip. Please try again.'
    });
  }
}
