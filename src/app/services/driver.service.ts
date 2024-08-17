import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver';
import { TripBooking } from '../models/trip-booking';
import { Cab } from '../models/cab';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
    private baseUrl = 'http://localhost:8083/api/drivers';

    constructor(private http: HttpClient) {}

    register(driver: Driver): Observable<Driver> {
      return this.http.post<Driver>(`${this.baseUrl}/register`, driver);
    }

    updateDriver(driverUpdate: { driverId: number, cab: Cab }): Observable<void> {
      return this.http.put<void>(`${this.baseUrl}/update`, driverUpdate);
    }

    deleteDriver(driverId: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/delete/${driverId}`);
    }

    getDriverById(driverId: number): Observable<Driver> {
      return this.http.get<Driver>(`${this.baseUrl}/${driverId}`);
    }

    getAllDrivers(): Observable<Driver[]> {
      return this.http.get<Driver[]>(`${this.baseUrl}/all`);
    }

    getBookingHistory(driverId: number): Observable<TripBooking[]> {
      return this.http.get<TripBooking[]>(`${this.baseUrl}/history/${driverId}`);
    }

    viewBestDrivers(): Observable<Driver[]> {
      return this.http.get<Driver[]>(`${this.baseUrl}/top-drivers`);
    }
}
