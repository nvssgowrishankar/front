import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { TripBooking } from '../models/trip-booking';
import { Cab } from '../models/cab';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8083/api/customers'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  registerCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}/register`, customer);
  }

  updateCustomerProfile(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.baseUrl}/update`, customer);
  }

  deleteCustomer(customerId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${customerId}`);
  }

  getCustomerById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseUrl}/get/${customerId}`);
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/all`);
  }

  searchCustomers(query: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/search?query=${query}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  viewAvailableCabs(): Observable<Cab[]> {
    return this.http.get<Cab[]>(`${this.baseUrl}/available-cabs`);
  }

  bookCab(customerId: number, tripBooking: TripBooking): Observable<TripBooking> {
    const body = {
      ...tripBooking,
      customerId
    };
    return this.http.post<TripBooking>(`${this.baseUrl}/${customerId}/book`, body);
  }

  cancelBooking(tripId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/cancel/${tripId}`);
  }

  viewBookingHistory(customerId: number): Observable<TripBooking[]> {
    return this.http.get<TripBooking[]>(`${this.baseUrl}/${customerId}/booking-history`);
  }
}
