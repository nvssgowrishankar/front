import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { DriverService } from '../../services/driver.service';
import { CabService } from '../../services/cab.service';
import { Customer } from '../../models/customer';
import { Driver } from '../../models/driver';
import { Cab } from '../../models/cab';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegistrationComponent implements OnInit {
  customer: Customer = { 
    username: '', 
    password: '', 
    email: '',
    address: '',
    mobileNumber: ''
  };
  cab: Cab = { 
    model: '', 
    price: 0, 
    driverId: 0 
  };
  selectedDriverId: number = 0;
  drivers: Driver[] = [];
  role: string = '';

  constructor(
    private customerService: CustomerService, 
    private driverService: DriverService, 
    private cabService: CabService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.role = params.get('role') || 'customer';
    });
    if (this.role === 'driver') {
      this.loadDrivers();
    }
  }

  loadDrivers() {
    this.driverService.getAllDrivers().subscribe(drivers => this.drivers = drivers);
  }

  register() {
    if (this.role === 'customer') {
      this.customerService.registerCustomer(this.customer).subscribe(
        (customer) => {
          // Navigate to customer dashboard or show success message
          console.log('Customer registered successfully:', customer);
        },
        (error) => {
          console.error('Error during customer registration:', error);
          alert(`Error: ${error.error.message || 'An unexpected error occurred.'}`);
        }
      );
    } else if (this.role === 'driver') {
      this.cab.driverId = this.selectedDriverId;
      this.cabService.addCab(this.cab).subscribe(
        (cab) => {
          const updatedCab: Cab = {
            id: cab.id,
            model: this.cab.model,
            price: this.cab.price,
            driverId: this.cab.driverId
          };
          this.driverService.updateDriver({
            driverId: this.selectedDriverId,
            cab: updatedCab
          }).subscribe(
            () => {
              // Navigate to driver dashboard or show success message
              console.log('Driver registered successfully.');
            },
            (error) => {
              console.error('Error during driver registration:', error);
              alert(`Error: ${error.error.message || 'An unexpected error occurred.'}`);
            }
          );
        },
        (error) => {
          console.error('Error adding cab:', error);
          alert(`Error: ${error.error.message || 'An unexpected error occurred.'}`);
        }
      );
    }
  }
}
