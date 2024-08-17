import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html', // Correct path
  styleUrls: ['./admin-dashboard.component.css']

})
export class AdminDashboardComponent implements OnInit {
  cabs: any[] = [];
  drivers: any[] = [];
  errorMessage: string | null = null;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadCabs();
    this.loadDrivers();
  }

  loadCabs() {
    this.adminService.getAllCabs().subscribe(
      data => this.cabs = data,
      error => this.errorMessage = 'Failed to load cabs'
    );
  }

  loadDrivers() {
    this.adminService.getAllDrivers().subscribe(
      data => this.drivers = data,
      error => this.errorMessage = 'Failed to load drivers'
    );
  }
}
