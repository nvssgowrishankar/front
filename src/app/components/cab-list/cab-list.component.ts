import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Cab } from '../../models/cab';

@Component({
  selector: 'app-cab-list',
  templateUrl: './cab-list.component.html',
  styleUrls: ['./cab-list.component.css']
})
export class CabListComponent implements OnInit {
  cabs: Cab[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadAvailableCabs();
  }

  loadAvailableCabs(): void {
    this.customerService.viewAvailableCabs().subscribe({
      next: (cabs) => this.cabs = cabs,
      error: (error) => console.error('Failed to load cabs', error)
    });
  }
}
