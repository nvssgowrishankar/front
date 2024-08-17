import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { Driver } from '../../models/driver';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  drivers: Driver[] = [];

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {
    this.loadBestDrivers();
  }

  loadBestDrivers(): void {
    this.driverService.viewBestDrivers().subscribe({
      next: (drivers) => this.drivers = drivers,
      error: (error) => console.error('Failed to load drivers', error)
    });
  }
}
