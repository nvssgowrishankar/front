import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Cab } from '../models/cab';

@Injectable({
  providedIn: 'root'
})
export class CabService {
  private apiUrl = `${environment.apiBaseUrl}/cabs`; // Update with your backend URL

  constructor(private http: HttpClient) {}

  // Add a new cab
  addCab(cab: Cab): Observable<Cab> {
    return this.http.post<Cab>(this.apiUrl, cab);
  }

  // Update existing cab details
  updateCab(cab: Cab): Observable<Cab> {
    return this.http.put<Cab>(`${this.apiUrl}/${cab.id}`, cab);
  }

  // Delete a cab by ID
  deleteCab(cabId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cabId}`);
  }

  // Get cab details by ID
  getCabById(cabId: number): Observable<Cab> {
    return this.http.get<Cab>(`${this.apiUrl}/${cabId}`);
  }

  // Get all cabs
  getAllCabs(): Observable<Cab[]> {
    return this.http.get<Cab[]>(this.apiUrl);
  }

  // Get cabs by driver ID (optional, if needed)
  getCabsByDriverId(driverId: number): Observable<Cab[]> {
    return this.http.get<Cab[]>(`${this.apiUrl}/driver/${driverId}`);
  }
}
