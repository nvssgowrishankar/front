import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';
import { Cab } from '../models/cab'; // Ensure Cab model is defined
import { Driver } from '../models/driver'; // Ensure Driver model is defined
import { ApiService } from 'src/app/api.service';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8083/api/admins'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  addAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.apiUrl}/add`, admin);
  }

  updateAdmin(admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(`${this.apiUrl}/update`, admin);
  }

  deleteAdmin(adminId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${adminId}`);
  }

  getAdminById(adminId: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.apiUrl}/get/${adminId}`);
  }

  getAllAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.apiUrl}/all`);
  }

  getAllCabs(): Observable<Cab[]> {
    return this.http.get<Cab[]>('http://localhost:8083/api/cabs'); // Adjust URL as needed
  }

  getAllDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>('http://localhost:8083/api/drivers'); // Adjust URL as needed
  }
}
