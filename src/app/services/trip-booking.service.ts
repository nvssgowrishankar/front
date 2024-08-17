import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { TripBooking } from '../models/trip-booking';
import { ApiService } from 'src/app/api.service';


@Injectable({
  providedIn: 'root'
})
export class TripBookingService {
  private apiUrl = 'trips';


  constructor(private apiService: ApiService) { }

  saveTripBooking(tripBooking: TripBooking): Observable<TripBooking> {
    return this.apiService.post<TripBooking>(this.apiUrl, tripBooking);
  }

  updateTripBooking(tripBooking: TripBooking): Observable<TripBooking> {
    return this.apiService.put<TripBooking>(this.apiUrl, tripBooking);
  }

  cancelTripBooking(tripId: number): Observable<void> {
    return this.apiService.delete<void>(`${this.apiUrl}/${tripId}`);
  }

  getTripBookingById(tripId: number): Observable<TripBooking> {
    return this.apiService.get<TripBooking>(`${this.apiUrl}/${tripId}`);
  }

  getAllTripBookings(): Observable<TripBooking[]> {
    return this.apiService.get<TripBooking[]>(this.apiUrl);
  }

  viewBookingHistory(customerId: number): Observable<TripBooking[]> {
    return this.apiService.get<TripBooking[]>(`${this.apiUrl}/history/${customerId}`);
  }

  bookCab(customerId: number, tripBooking: TripBooking): Observable<TripBooking> {
    return this.apiService.post<TripBooking>(`${this.apiUrl}/${customerId}`, tripBooking);
  }

  viewDriverBookingHistory(driverId: number): Observable<TripBooking[]> {
    return this.apiService.get<TripBooking[]>(`${this.apiUrl}/driver-history/${driverId}`);
  }
}

